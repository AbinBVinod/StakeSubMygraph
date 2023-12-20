// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml = require("rescript/lib/js/caml.js");
var SDSL = require("../../bindings/SDSL.bs.js");
var Curry = require("rescript/lib/js/curry.js");
var Config = require("../../Config.bs.js");
var Js_dict = require("rescript/lib/js/js_dict.js");
var Logging = require("../../Logging.bs.js");
var $$Promise = require("@ryyppy/rescript-promise/src/Promise.bs.js");
var JsSdsl = require("js-sdsl");
var Belt_Array = require("rescript/lib/js/belt_Array.js");
var Caml_array = require("rescript/lib/js/caml_array.js");
var EventUtils = require("../../EventUtils.bs.js");
var LazyLoader = require("../../LazyLoader.bs.js");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var DbFunctions = require("../../DbFunctions.bs.js");
var EventFetching = require("../../EventFetching.bs.js");
var ChainEventQueue = require("../ChainEventQueue.bs.js");
var ChainWorkerTypes = require("./ChainWorkerTypes.bs.js");
var ContractAddressingMap = require("../../ContractAddressingMap.bs.js");
var ContractInterfaceManager = require("../../ContractInterfaceManager.bs.js");

function stopFetchingEvents(self) {
  self.shouldContinueFetching = false;
  if (self.isFetching) {
    return new Promise((function (resolve, _reject) {
                  self.hasStoppedFetchingCallBack = (function (param) {
                      resolve(undefined);
                    });
                }));
  } else {
    return Promise.resolve(undefined);
  }
}

function make(caughtUpToHeadHook, contractAddressMapping, chainConfig) {
  var caughtUpToHeadHook$1 = caughtUpToHeadHook !== undefined ? caughtUpToHeadHook : (function (_self) {
        return Promise.resolve(undefined);
      });
  var logger = Logging.createChild({
        chainId: chainConfig.chainId,
        workerType: "rpc",
        loggerFor: "Used only in logging regestration of static contract addresses"
      });
  var contractAddressMapping$1;
  if (contractAddressMapping !== undefined) {
    contractAddressMapping$1 = contractAddressMapping;
  } else {
    var m = ContractAddressingMap.make(undefined);
    ContractAddressingMap.registerStaticAddresses(m, chainConfig, logger);
    contractAddressMapping$1 = m;
  }
  var rpcConfig = chainConfig.syncSource;
  var rpcConfig$1;
  var exit = 0;
  switch (rpcConfig.TAG | 0) {
    case /* Rpc */0 :
        rpcConfig$1 = rpcConfig._0;
        break;
    case /* Skar */1 :
    case /* EthArchive */2 :
        exit = 1;
        break;
    
  }
  if (exit === 1) {
    var exn = {
      RE_EXN_ID: ChainWorkerTypes.IncorrectSyncSource,
      _1: rpcConfig
    };
    Logging.childErrorWithExn(logger, exn, {
          msg: "Parsed sync source to an rpc worker",
          syncSource: rpcConfig
        });
    throw exn;
  }
  var blockLoader = LazyLoader.make((function (blockNumber) {
          return EventFetching.getUnwrappedBlockWithBackoff(rpcConfig$1.provider, blockNumber, 1000);
        }), undefined, undefined, undefined, undefined, {
        suggestedFix: "This likely means the RPC url you are using is not respending correctly. Please try another RPC endipoint.",
        asyncTaskName: "blockLoader: fetching block timestamp - `getBlock` rpc call",
        caller: "RPC ChainWorker"
      }, undefined);
  return {
          currentBlockInterval: rpcConfig$1.syncConfig.initialBlockInterval,
          currentlyFetchingToBlock: 0,
          latestFetchedBlockTimestamp: 0,
          shouldContinueFetching: true,
          isFetching: false,
          hasStoppedFetchingCallBack: (function (param) {
              
            }),
          newRangeQueriedCallBacks: new JsSdsl.Queue(),
          contractAddressMapping: contractAddressMapping$1,
          blockLoader: blockLoader,
          chainConfig: chainConfig,
          rpcConfig: rpcConfig$1,
          caughtUpToHeadHook: caughtUpToHeadHook$1
        };
}

async function startWorker(self, startBlock, logger, fetchedEventQueue) {
  var rpcConfig = self.rpcConfig;
  var chainConfig = self.chainConfig;
  var blockLoader = self.blockLoader;
  var contractAddressMapping = self.contractAddressMapping;
  self.shouldContinueFetching = true;
  self.isFetching = true;
  var sc = rpcConfig.syncConfig;
  var provider = rpcConfig.provider;
  var fromBlockRef = {
    contents: startBlock
  };
  var getCurrentBlockFromRPC = function (param) {
    return $$Promise.$$catch(provider.getBlockNumber(), (function (_err) {
                  Logging.childWarn(logger, "Error getting current block number");
                  return Promise.resolve(0);
                }));
  };
  var currentBlock = {
    contents: await getCurrentBlockFromRPC(undefined)
  };
  DbFunctions.ChainMetadata.setChainMetadataRow(chainConfig.chainId, startBlock, currentBlock.contents);
  var checkShouldContinue = async function (param) {
    if (fromBlockRef.contents > currentBlock.contents) {
      Curry._1(self.caughtUpToHeadHook, self);
      var newBlock = await EventUtils.waitForNextBlock(provider);
      currentBlock.contents = newBlock;
      await checkShouldContinue(undefined);
    }
    return true;
  };
  while(await checkShouldContinue(undefined) && self.shouldContinueFetching) {
    var blockInterval = self.currentBlockInterval;
    var targetBlock = Caml.int_min(currentBlock.contents, (fromBlockRef.contents + blockInterval | 0) - 1 | 0);
    self.currentlyFetchingToBlock = targetBlock;
    var toBlockTimestampPromise = LazyLoader.get(blockLoader, self.currentlyFetchingToBlock).then(function (block) {
          return block.timestamp;
        });
    var contractInterfaceManager = ContractInterfaceManager.make(chainConfig, contractAddressMapping);
    var match = await EventFetching.getContractEventsOnFilters(contractInterfaceManager, fromBlockRef.contents, targetBlock, blockInterval, 0, chainConfig.chainId, rpcConfig, blockLoader, logger, undefined);
    var eventBatchPromises = match.eventBatchPromises;
    for(var i = 0 ,i_finish = eventBatchPromises.length; i < i_finish; ++i){
      var match$1 = Caml_array.get(eventBatchPromises, i);
      var queueItem_timestamp = await match$1.timestampPromise;
      var queueItem_chainId = match$1.chainId;
      var queueItem_blockNumber = match$1.blockNumber;
      var queueItem_logIndex = match$1.logIndex;
      var queueItem_event = await match$1.eventPromise;
      var queueItem = {
        timestamp: queueItem_timestamp,
        chainId: queueItem_chainId,
        blockNumber: queueItem_blockNumber,
        logIndex: queueItem_logIndex,
        event: queueItem_event
      };
      await ChainEventQueue.awaitQueueSpaceAndPushItem(fetchedEventQueue, queueItem);
      SDSL.Queue.popForEach(self.newRangeQueriedCallBacks, (function (callback) {
              Curry._1(callback, undefined);
            }));
    }
    fromBlockRef.contents = targetBlock + 1 | 0;
    self.currentBlockInterval = Caml.int_min(match.finalExecutedBlockInterval + sc.accelerationAdditive | 0, sc.intervalCeiling);
    self.latestFetchedBlockTimestamp = await toBlockTimestampPromise;
    SDSL.Queue.popForEach(self.newRangeQueriedCallBacks, (function (callback) {
            Curry._1(callback, undefined);
          }));
    var nextIntervalEnd = (fromBlockRef.contents + self.currentBlockInterval | 0) - 1 | 0;
    if (currentBlock.contents <= nextIntervalEnd) {
      Logging.childInfo(logger, "We will finish processing known blocks in the next block. Checking for a newer block than " + String(currentBlock.contents) + "");
      currentBlock.contents = await getCurrentBlockFromRPC(undefined);
      DbFunctions.ChainMetadata.setChainMetadataRow(chainConfig.chainId, startBlock, currentBlock.contents);
      Logging.childInfo(logger, "getCurrentBlockFromRPC() => " + String(currentBlock.contents) + "");
    }
    
  };
}

async function startFetchingEvents(self, logger, fetchedEventQueue) {
  var chainConfig = self.chainConfig;
  var contractAddressMapping = self.contractAddressMapping;
  var latestProcessedBlock = await DbFunctions.EventSyncState.getLatestProcessedBlockNumber(chainConfig.chainId);
  var startBlock = Belt_Option.mapWithDefault(latestProcessedBlock, chainConfig.startBlock, (function (latestProcessedBlock) {
          return latestProcessedBlock + 1 | 0;
        }));
  Logging.childTrace(logger, {
        msg: "Starting fetching events for chain.",
        startBlock: startBlock,
        latestProcessedBlock: latestProcessedBlock
      });
  var dynamicContracts = await DbFunctions.DynamicContractRegistry.readDynamicContractsOnChainIdAtOrBeforeBlock(DbFunctions.sql, chainConfig.chainId, startBlock);
  Belt_Array.forEach(dynamicContracts, (function (param) {
          ContractAddressingMap.addAddress(contractAddressMapping, param.contract_type, param.contract_address);
        }));
  await startWorker(self, startBlock, logger, fetchedEventQueue);
  return Curry._1(self.hasStoppedFetchingCallBack, undefined);
}

async function fetchArbitraryEvents(self, dynamicContracts, fromBlock, fromLogIndex, toBlock, logger) {
  var currentBlockInterval = self.currentBlockInterval;
  var contractInterfaceManager = ContractInterfaceManager.combineInterfaceManagers(Belt_Array.map(dynamicContracts, (function (param) {
              var chainId = param.chain_id;
              var c = Js_dict.get(Config.config, String(chainId));
              var chainConfig;
              if (c !== undefined) {
                chainConfig = c;
              } else {
                var exn = {
                  RE_EXN_ID: ChainWorkerTypes.UndefinedChainConfig,
                  _1: chainId
                };
                Logging.childErrorWithExn(logger, exn, "Could not find chain config for given ChainId");
                throw exn;
              }
              return ContractInterfaceManager.makeFromSingleContract(chainConfig, param.contract_address, param.contract_type);
            })));
  var match = await EventFetching.getContractEventsOnFilters(contractInterfaceManager, fromBlock, toBlock, currentBlockInterval, fromLogIndex, self.chainConfig.chainId, self.rpcConfig, self.blockLoader, logger, undefined);
  return await Promise.all(Belt_Array.map(match.eventBatchPromises, (async function (param) {
                    return {
                            timestamp: await param.timestampPromise,
                            chainId: param.chainId,
                            blockNumber: param.blockNumber,
                            logIndex: param.logIndex,
                            event: await param.eventPromise
                          };
                  })));
}

function getContractAddressMapping(self) {
  return self.contractAddressMapping;
}

async function addDynamicContractAndFetchMissingEvents(self, dynamicContracts, fromBlock, fromLogIndex, logger) {
  var currentlyFetchingToBlock = self.currentlyFetchingToBlock;
  var contractAddressMapping = self.contractAddressMapping;
  var unaddedDynamicContracts = Belt_Array.keep(dynamicContracts, (function (param) {
          return ContractAddressingMap.addAddressIfNotExists(contractAddressMapping, param.contract_type, param.contract_address);
        }));
  return await fetchArbitraryEvents(self, unaddedDynamicContracts, fromBlock, fromLogIndex, currentlyFetchingToBlock, logger);
}

function addNewRangeQueriedCallback(self) {
  return ChainEventQueue.insertCallbackAwaitPromise(self.newRangeQueriedCallBacks);
}

function getLatestFetchedBlockTimestamp(self) {
  return self.latestFetchedBlockTimestamp;
}

exports.stopFetchingEvents = stopFetchingEvents;
exports.make = make;
exports.startWorker = startWorker;
exports.startFetchingEvents = startFetchingEvents;
exports.fetchArbitraryEvents = fetchArbitraryEvents;
exports.getContractAddressMapping = getContractAddressMapping;
exports.addDynamicContractAndFetchMissingEvents = addDynamicContractAndFetchMissingEvents;
exports.addNewRangeQueriedCallback = addNewRangeQueriedCallback;
exports.getLatestFetchedBlockTimestamp = getLatestFetchedBlockTimestamp;
/* SDSL Not a pure module */
