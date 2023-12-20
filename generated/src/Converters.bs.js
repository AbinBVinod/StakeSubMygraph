// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var Spice = require("@greenlabs/ppx-spice/src/rescript/Spice.bs.js");
var Types = require("./Types.bs.js");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var Belt_Result = require("rescript/lib/js/belt_Result.js");
var Caml_exceptions = require("rescript/lib/js/caml_exceptions.js");
var Caml_js_exceptions = require("rescript/lib/js/caml_js_exceptions.js");
var ContractInterfaceManager = require("./ContractInterfaceManager.bs.js");

var UndefinedEvent = /* @__PURE__ */Caml_exceptions.create("Converters.UndefinedEvent");

function eventStringToEvent(eventName, contractName) {
  switch (eventName) {
    case "AddReward" :
        if (contractName === "RewardFxdxVault") {
          return /* RewardFxdxVault_AddReward */0;
        }
        throw {
              RE_EXN_ID: UndefinedEvent,
              _1: eventName,
              Error: new Error()
            };
    case "SendReward" :
        if (contractName === "RewardFxdxVault") {
          return /* RewardFxdxVault_SendReward */1;
        }
        throw {
              RE_EXN_ID: UndefinedEvent,
              _1: eventName,
              Error: new Error()
            };
    case "Stake" :
        if (contractName === "StakedFxdxVault") {
          return /* StakedFxdxVault_Stake */3;
        }
        throw {
              RE_EXN_ID: UndefinedEvent,
              _1: eventName,
              Error: new Error()
            };
    case "TotalReserves" :
        switch (contractName) {
          case "RewardFxdxVault" :
              return /* RewardFxdxVault_TotalReserves */2;
          case "StakedFxdxVault" :
              return /* StakedFxdxVault_TotalReserves */4;
          default:
            throw {
                  RE_EXN_ID: UndefinedEvent,
                  _1: eventName,
                  Error: new Error()
                };
        }
    case "Unstake" :
        if (contractName === "StakedFxdxVault") {
          return /* StakedFxdxVault_Unstake */5;
        }
        throw {
              RE_EXN_ID: UndefinedEvent,
              _1: eventName,
              Error: new Error()
            };
    default:
      throw {
            RE_EXN_ID: UndefinedEvent,
            _1: eventName,
            Error: new Error()
          };
  }
}

function convertAddRewardViemDecodedEvent(prim) {
  return prim;
}

function convertAddRewardLogDescription(log) {
  var args = log.args;
  return {
          args: {
            rewardId: args[0],
            stakeId: args[1],
            rewardAmount: args[2],
            duration: args[3],
            timestamp: args[4],
            account: args[5],
            isClaimed: args[6]
          },
          name: log.name,
          signature: log.signature,
          topic: log.topic
        };
}

function convertAddRewardLog(logDescription, log, blockTimestamp) {
  var params_rewardId = logDescription.args.rewardId;
  var params_stakeId = logDescription.args.stakeId;
  var params_rewardAmount = logDescription.args.rewardAmount;
  var params_duration = logDescription.args.duration;
  var params_timestamp = logDescription.args.timestamp;
  var params_account = logDescription.args.account;
  var params_isClaimed = logDescription.args.isClaimed;
  var params = {
    rewardId: params_rewardId,
    stakeId: params_stakeId,
    rewardAmount: params_rewardAmount,
    duration: params_duration,
    timestamp: params_timestamp,
    account: params_account,
    isClaimed: params_isClaimed
  };
  var addRewardLog_blockNumber = log.blockNumber;
  var addRewardLog_blockHash = log.blockHash;
  var addRewardLog_srcAddress = log.address;
  var addRewardLog_transactionHash = log.transactionHash;
  var addRewardLog_transactionIndex = log.transactionIndex;
  var addRewardLog_logIndex = log.index;
  var addRewardLog = {
    params: params,
    blockNumber: addRewardLog_blockNumber,
    blockTimestamp: blockTimestamp,
    blockHash: addRewardLog_blockHash,
    srcAddress: addRewardLog_srcAddress,
    transactionHash: addRewardLog_transactionHash,
    transactionIndex: addRewardLog_transactionIndex,
    logIndex: addRewardLog_logIndex
  };
  return {
          TAG: /* RewardFxdxVaultContract_AddReward */0,
          _0: addRewardLog
        };
}

function convertAddRewardLogViem(decodedEvent, log, blockTimestamp) {
  var params_rewardId = decodedEvent.args.rewardId;
  var params_stakeId = decodedEvent.args.stakeId;
  var params_rewardAmount = decodedEvent.args.rewardAmount;
  var params_duration = decodedEvent.args.duration;
  var params_timestamp = decodedEvent.args.timestamp;
  var params_account = decodedEvent.args.account;
  var params_isClaimed = decodedEvent.args.isClaimed;
  var params = {
    rewardId: params_rewardId,
    stakeId: params_stakeId,
    rewardAmount: params_rewardAmount,
    duration: params_duration,
    timestamp: params_timestamp,
    account: params_account,
    isClaimed: params_isClaimed
  };
  var addRewardLog_blockNumber = log.blockNumber;
  var addRewardLog_blockHash = log.blockHash;
  var addRewardLog_srcAddress = log.address;
  var addRewardLog_transactionHash = log.transactionHash;
  var addRewardLog_transactionIndex = log.transactionIndex;
  var addRewardLog_logIndex = log.index;
  var addRewardLog = {
    params: params,
    blockNumber: addRewardLog_blockNumber,
    blockTimestamp: blockTimestamp,
    blockHash: addRewardLog_blockHash,
    srcAddress: addRewardLog_srcAddress,
    transactionHash: addRewardLog_transactionHash,
    transactionIndex: addRewardLog_transactionIndex,
    logIndex: addRewardLog_logIndex
  };
  return {
          TAG: /* RewardFxdxVaultContract_AddReward */0,
          _0: addRewardLog
        };
}

function convertSendRewardViemDecodedEvent(prim) {
  return prim;
}

function convertSendRewardLogDescription(log) {
  var args = log.args;
  return {
          args: {
            rewardId: args[0],
            stakeId: args[1],
            rewardAmount: args[2],
            duration: args[3],
            timestamp: args[4],
            account: args[5],
            isClaimed: args[6]
          },
          name: log.name,
          signature: log.signature,
          topic: log.topic
        };
}

function convertSendRewardLog(logDescription, log, blockTimestamp) {
  var params_rewardId = logDescription.args.rewardId;
  var params_stakeId = logDescription.args.stakeId;
  var params_rewardAmount = logDescription.args.rewardAmount;
  var params_duration = logDescription.args.duration;
  var params_timestamp = logDescription.args.timestamp;
  var params_account = logDescription.args.account;
  var params_isClaimed = logDescription.args.isClaimed;
  var params = {
    rewardId: params_rewardId,
    stakeId: params_stakeId,
    rewardAmount: params_rewardAmount,
    duration: params_duration,
    timestamp: params_timestamp,
    account: params_account,
    isClaimed: params_isClaimed
  };
  var sendRewardLog_blockNumber = log.blockNumber;
  var sendRewardLog_blockHash = log.blockHash;
  var sendRewardLog_srcAddress = log.address;
  var sendRewardLog_transactionHash = log.transactionHash;
  var sendRewardLog_transactionIndex = log.transactionIndex;
  var sendRewardLog_logIndex = log.index;
  var sendRewardLog = {
    params: params,
    blockNumber: sendRewardLog_blockNumber,
    blockTimestamp: blockTimestamp,
    blockHash: sendRewardLog_blockHash,
    srcAddress: sendRewardLog_srcAddress,
    transactionHash: sendRewardLog_transactionHash,
    transactionIndex: sendRewardLog_transactionIndex,
    logIndex: sendRewardLog_logIndex
  };
  return {
          TAG: /* RewardFxdxVaultContract_SendReward */1,
          _0: sendRewardLog
        };
}

function convertSendRewardLogViem(decodedEvent, log, blockTimestamp) {
  var params_rewardId = decodedEvent.args.rewardId;
  var params_stakeId = decodedEvent.args.stakeId;
  var params_rewardAmount = decodedEvent.args.rewardAmount;
  var params_duration = decodedEvent.args.duration;
  var params_timestamp = decodedEvent.args.timestamp;
  var params_account = decodedEvent.args.account;
  var params_isClaimed = decodedEvent.args.isClaimed;
  var params = {
    rewardId: params_rewardId,
    stakeId: params_stakeId,
    rewardAmount: params_rewardAmount,
    duration: params_duration,
    timestamp: params_timestamp,
    account: params_account,
    isClaimed: params_isClaimed
  };
  var sendRewardLog_blockNumber = log.blockNumber;
  var sendRewardLog_blockHash = log.blockHash;
  var sendRewardLog_srcAddress = log.address;
  var sendRewardLog_transactionHash = log.transactionHash;
  var sendRewardLog_transactionIndex = log.transactionIndex;
  var sendRewardLog_logIndex = log.index;
  var sendRewardLog = {
    params: params,
    blockNumber: sendRewardLog_blockNumber,
    blockTimestamp: blockTimestamp,
    blockHash: sendRewardLog_blockHash,
    srcAddress: sendRewardLog_srcAddress,
    transactionHash: sendRewardLog_transactionHash,
    transactionIndex: sendRewardLog_transactionIndex,
    logIndex: sendRewardLog_logIndex
  };
  return {
          TAG: /* RewardFxdxVaultContract_SendReward */1,
          _0: sendRewardLog
        };
}

function convertTotalReservesViemDecodedEvent(prim) {
  return prim;
}

function convertTotalReservesLogDescription(log) {
  var args = log.args;
  return {
          args: {
            vault: args[0],
            rewardReserves: args[1]
          },
          name: log.name,
          signature: log.signature,
          topic: log.topic
        };
}

function convertTotalReservesLog(logDescription, log, blockTimestamp) {
  var params_vault = logDescription.args.vault;
  var params_rewardReserves = logDescription.args.rewardReserves;
  var params = {
    vault: params_vault,
    rewardReserves: params_rewardReserves
  };
  var totalReservesLog_blockNumber = log.blockNumber;
  var totalReservesLog_blockHash = log.blockHash;
  var totalReservesLog_srcAddress = log.address;
  var totalReservesLog_transactionHash = log.transactionHash;
  var totalReservesLog_transactionIndex = log.transactionIndex;
  var totalReservesLog_logIndex = log.index;
  var totalReservesLog = {
    params: params,
    blockNumber: totalReservesLog_blockNumber,
    blockTimestamp: blockTimestamp,
    blockHash: totalReservesLog_blockHash,
    srcAddress: totalReservesLog_srcAddress,
    transactionHash: totalReservesLog_transactionHash,
    transactionIndex: totalReservesLog_transactionIndex,
    logIndex: totalReservesLog_logIndex
  };
  return {
          TAG: /* RewardFxdxVaultContract_TotalReserves */2,
          _0: totalReservesLog
        };
}

function convertTotalReservesLogViem(decodedEvent, log, blockTimestamp) {
  var params_vault = decodedEvent.args.vault;
  var params_rewardReserves = decodedEvent.args.rewardReserves;
  var params = {
    vault: params_vault,
    rewardReserves: params_rewardReserves
  };
  var totalReservesLog_blockNumber = log.blockNumber;
  var totalReservesLog_blockHash = log.blockHash;
  var totalReservesLog_srcAddress = log.address;
  var totalReservesLog_transactionHash = log.transactionHash;
  var totalReservesLog_transactionIndex = log.transactionIndex;
  var totalReservesLog_logIndex = log.index;
  var totalReservesLog = {
    params: params,
    blockNumber: totalReservesLog_blockNumber,
    blockTimestamp: blockTimestamp,
    blockHash: totalReservesLog_blockHash,
    srcAddress: totalReservesLog_srcAddress,
    transactionHash: totalReservesLog_transactionHash,
    transactionIndex: totalReservesLog_transactionIndex,
    logIndex: totalReservesLog_logIndex
  };
  return {
          TAG: /* RewardFxdxVaultContract_TotalReserves */2,
          _0: totalReservesLog
        };
}

var RewardFxdxVault = {
  convertAddRewardViemDecodedEvent: convertAddRewardViemDecodedEvent,
  convertAddRewardLogDescription: convertAddRewardLogDescription,
  convertAddRewardLog: convertAddRewardLog,
  convertAddRewardLogViem: convertAddRewardLogViem,
  convertSendRewardViemDecodedEvent: convertSendRewardViemDecodedEvent,
  convertSendRewardLogDescription: convertSendRewardLogDescription,
  convertSendRewardLog: convertSendRewardLog,
  convertSendRewardLogViem: convertSendRewardLogViem,
  convertTotalReservesViemDecodedEvent: convertTotalReservesViemDecodedEvent,
  convertTotalReservesLogDescription: convertTotalReservesLogDescription,
  convertTotalReservesLog: convertTotalReservesLog,
  convertTotalReservesLogViem: convertTotalReservesLogViem
};

function convertStakeViemDecodedEvent(prim) {
  return prim;
}

function convertStakeLogDescription(log) {
  var args = log.args;
  return {
          args: {
            stakeId: args[0],
            amount: args[1],
            duration: args[2],
            rewardInterestRate: args[3],
            timestamp: args[4],
            account: args[5],
            unstaked: args[6]
          },
          name: log.name,
          signature: log.signature,
          topic: log.topic
        };
}

function convertStakeLog(logDescription, log, blockTimestamp) {
  var params_stakeId = logDescription.args.stakeId;
  var params_amount = logDescription.args.amount;
  var params_duration = logDescription.args.duration;
  var params_rewardInterestRate = logDescription.args.rewardInterestRate;
  var params_timestamp = logDescription.args.timestamp;
  var params_account = logDescription.args.account;
  var params_unstaked = logDescription.args.unstaked;
  var params = {
    stakeId: params_stakeId,
    amount: params_amount,
    duration: params_duration,
    rewardInterestRate: params_rewardInterestRate,
    timestamp: params_timestamp,
    account: params_account,
    unstaked: params_unstaked
  };
  var stakeLog_blockNumber = log.blockNumber;
  var stakeLog_blockHash = log.blockHash;
  var stakeLog_srcAddress = log.address;
  var stakeLog_transactionHash = log.transactionHash;
  var stakeLog_transactionIndex = log.transactionIndex;
  var stakeLog_logIndex = log.index;
  var stakeLog = {
    params: params,
    blockNumber: stakeLog_blockNumber,
    blockTimestamp: blockTimestamp,
    blockHash: stakeLog_blockHash,
    srcAddress: stakeLog_srcAddress,
    transactionHash: stakeLog_transactionHash,
    transactionIndex: stakeLog_transactionIndex,
    logIndex: stakeLog_logIndex
  };
  return {
          TAG: /* StakedFxdxVaultContract_Stake */3,
          _0: stakeLog
        };
}

function convertStakeLogViem(decodedEvent, log, blockTimestamp) {
  var params_stakeId = decodedEvent.args.stakeId;
  var params_amount = decodedEvent.args.amount;
  var params_duration = decodedEvent.args.duration;
  var params_rewardInterestRate = decodedEvent.args.rewardInterestRate;
  var params_timestamp = decodedEvent.args.timestamp;
  var params_account = decodedEvent.args.account;
  var params_unstaked = decodedEvent.args.unstaked;
  var params = {
    stakeId: params_stakeId,
    amount: params_amount,
    duration: params_duration,
    rewardInterestRate: params_rewardInterestRate,
    timestamp: params_timestamp,
    account: params_account,
    unstaked: params_unstaked
  };
  var stakeLog_blockNumber = log.blockNumber;
  var stakeLog_blockHash = log.blockHash;
  var stakeLog_srcAddress = log.address;
  var stakeLog_transactionHash = log.transactionHash;
  var stakeLog_transactionIndex = log.transactionIndex;
  var stakeLog_logIndex = log.index;
  var stakeLog = {
    params: params,
    blockNumber: stakeLog_blockNumber,
    blockTimestamp: blockTimestamp,
    blockHash: stakeLog_blockHash,
    srcAddress: stakeLog_srcAddress,
    transactionHash: stakeLog_transactionHash,
    transactionIndex: stakeLog_transactionIndex,
    logIndex: stakeLog_logIndex
  };
  return {
          TAG: /* StakedFxdxVaultContract_Stake */3,
          _0: stakeLog
        };
}

function convertTotalReservesViemDecodedEvent$1(prim) {
  return prim;
}

function convertTotalReservesLogDescription$1(log) {
  var args = log.args;
  return {
          args: {
            vault: args[0],
            reserves: args[1]
          },
          name: log.name,
          signature: log.signature,
          topic: log.topic
        };
}

function convertTotalReservesLog$1(logDescription, log, blockTimestamp) {
  var params_vault = logDescription.args.vault;
  var params_reserves = logDescription.args.reserves;
  var params = {
    vault: params_vault,
    reserves: params_reserves
  };
  var totalReservesLog_blockNumber = log.blockNumber;
  var totalReservesLog_blockHash = log.blockHash;
  var totalReservesLog_srcAddress = log.address;
  var totalReservesLog_transactionHash = log.transactionHash;
  var totalReservesLog_transactionIndex = log.transactionIndex;
  var totalReservesLog_logIndex = log.index;
  var totalReservesLog = {
    params: params,
    blockNumber: totalReservesLog_blockNumber,
    blockTimestamp: blockTimestamp,
    blockHash: totalReservesLog_blockHash,
    srcAddress: totalReservesLog_srcAddress,
    transactionHash: totalReservesLog_transactionHash,
    transactionIndex: totalReservesLog_transactionIndex,
    logIndex: totalReservesLog_logIndex
  };
  return {
          TAG: /* StakedFxdxVaultContract_TotalReserves */4,
          _0: totalReservesLog
        };
}

function convertTotalReservesLogViem$1(decodedEvent, log, blockTimestamp) {
  var params_vault = decodedEvent.args.vault;
  var params_reserves = decodedEvent.args.reserves;
  var params = {
    vault: params_vault,
    reserves: params_reserves
  };
  var totalReservesLog_blockNumber = log.blockNumber;
  var totalReservesLog_blockHash = log.blockHash;
  var totalReservesLog_srcAddress = log.address;
  var totalReservesLog_transactionHash = log.transactionHash;
  var totalReservesLog_transactionIndex = log.transactionIndex;
  var totalReservesLog_logIndex = log.index;
  var totalReservesLog = {
    params: params,
    blockNumber: totalReservesLog_blockNumber,
    blockTimestamp: blockTimestamp,
    blockHash: totalReservesLog_blockHash,
    srcAddress: totalReservesLog_srcAddress,
    transactionHash: totalReservesLog_transactionHash,
    transactionIndex: totalReservesLog_transactionIndex,
    logIndex: totalReservesLog_logIndex
  };
  return {
          TAG: /* StakedFxdxVaultContract_TotalReserves */4,
          _0: totalReservesLog
        };
}

function convertUnstakeViemDecodedEvent(prim) {
  return prim;
}

function convertUnstakeLogDescription(log) {
  var args = log.args;
  return {
          args: {
            stakeId: args[0],
            amount: args[1],
            duration: args[2],
            rewardInterestRate: args[3],
            timestamp: args[4],
            account: args[5],
            unstaked: args[6]
          },
          name: log.name,
          signature: log.signature,
          topic: log.topic
        };
}

function convertUnstakeLog(logDescription, log, blockTimestamp) {
  var params_stakeId = logDescription.args.stakeId;
  var params_amount = logDescription.args.amount;
  var params_duration = logDescription.args.duration;
  var params_rewardInterestRate = logDescription.args.rewardInterestRate;
  var params_timestamp = logDescription.args.timestamp;
  var params_account = logDescription.args.account;
  var params_unstaked = logDescription.args.unstaked;
  var params = {
    stakeId: params_stakeId,
    amount: params_amount,
    duration: params_duration,
    rewardInterestRate: params_rewardInterestRate,
    timestamp: params_timestamp,
    account: params_account,
    unstaked: params_unstaked
  };
  var unstakeLog_blockNumber = log.blockNumber;
  var unstakeLog_blockHash = log.blockHash;
  var unstakeLog_srcAddress = log.address;
  var unstakeLog_transactionHash = log.transactionHash;
  var unstakeLog_transactionIndex = log.transactionIndex;
  var unstakeLog_logIndex = log.index;
  var unstakeLog = {
    params: params,
    blockNumber: unstakeLog_blockNumber,
    blockTimestamp: blockTimestamp,
    blockHash: unstakeLog_blockHash,
    srcAddress: unstakeLog_srcAddress,
    transactionHash: unstakeLog_transactionHash,
    transactionIndex: unstakeLog_transactionIndex,
    logIndex: unstakeLog_logIndex
  };
  return {
          TAG: /* StakedFxdxVaultContract_Unstake */5,
          _0: unstakeLog
        };
}

function convertUnstakeLogViem(decodedEvent, log, blockTimestamp) {
  var params_stakeId = decodedEvent.args.stakeId;
  var params_amount = decodedEvent.args.amount;
  var params_duration = decodedEvent.args.duration;
  var params_rewardInterestRate = decodedEvent.args.rewardInterestRate;
  var params_timestamp = decodedEvent.args.timestamp;
  var params_account = decodedEvent.args.account;
  var params_unstaked = decodedEvent.args.unstaked;
  var params = {
    stakeId: params_stakeId,
    amount: params_amount,
    duration: params_duration,
    rewardInterestRate: params_rewardInterestRate,
    timestamp: params_timestamp,
    account: params_account,
    unstaked: params_unstaked
  };
  var unstakeLog_blockNumber = log.blockNumber;
  var unstakeLog_blockHash = log.blockHash;
  var unstakeLog_srcAddress = log.address;
  var unstakeLog_transactionHash = log.transactionHash;
  var unstakeLog_transactionIndex = log.transactionIndex;
  var unstakeLog_logIndex = log.index;
  var unstakeLog = {
    params: params,
    blockNumber: unstakeLog_blockNumber,
    blockTimestamp: blockTimestamp,
    blockHash: unstakeLog_blockHash,
    srcAddress: unstakeLog_srcAddress,
    transactionHash: unstakeLog_transactionHash,
    transactionIndex: unstakeLog_transactionIndex,
    logIndex: unstakeLog_logIndex
  };
  return {
          TAG: /* StakedFxdxVaultContract_Unstake */5,
          _0: unstakeLog
        };
}

var StakedFxdxVault = {
  convertStakeViemDecodedEvent: convertStakeViemDecodedEvent,
  convertStakeLogDescription: convertStakeLogDescription,
  convertStakeLog: convertStakeLog,
  convertStakeLogViem: convertStakeLogViem,
  convertTotalReservesViemDecodedEvent: convertTotalReservesViemDecodedEvent$1,
  convertTotalReservesLogDescription: convertTotalReservesLogDescription$1,
  convertTotalReservesLog: convertTotalReservesLog$1,
  convertTotalReservesLogViem: convertTotalReservesLogViem$1,
  convertUnstakeViemDecodedEvent: convertUnstakeViemDecodedEvent,
  convertUnstakeLogDescription: convertUnstakeLogDescription,
  convertUnstakeLog: convertUnstakeLog,
  convertUnstakeLogViem: convertUnstakeLogViem
};

var ParseEventErrorExn = /* @__PURE__ */Caml_exceptions.create("Converters.ParseEventErrorExn");

function parseEventEthers(log, blockTimestamp, contractInterfaceManager) {
  var logDescriptionResult = ContractInterfaceManager.parseLogEthers(contractInterfaceManager, log);
  if (logDescriptionResult.TAG === /* Ok */0) {
    var logDescription = logDescriptionResult._0;
    var contractName = ContractInterfaceManager.getContractNameFromAddress(contractInterfaceManager, log.address);
    if (contractName === undefined) {
      return {
              TAG: /* Error */1,
              _0: {
                TAG: /* UnregisteredContract */1,
                _0: log.address
              }
            };
    }
    var match = eventStringToEvent(logDescription.name, contractName);
    var $$event;
    switch (match) {
      case /* RewardFxdxVault_AddReward */0 :
          $$event = convertAddRewardLog(convertAddRewardLogDescription(logDescription), log, blockTimestamp);
          break;
      case /* RewardFxdxVault_SendReward */1 :
          $$event = convertSendRewardLog(convertSendRewardLogDescription(logDescription), log, blockTimestamp);
          break;
      case /* RewardFxdxVault_TotalReserves */2 :
          $$event = convertTotalReservesLog(convertTotalReservesLogDescription(logDescription), log, blockTimestamp);
          break;
      case /* StakedFxdxVault_Stake */3 :
          $$event = convertStakeLog(convertStakeLogDescription(logDescription), log, blockTimestamp);
          break;
      case /* StakedFxdxVault_TotalReserves */4 :
          $$event = convertTotalReservesLog$1(convertTotalReservesLogDescription$1(logDescription), log, blockTimestamp);
          break;
      case /* StakedFxdxVault_Unstake */5 :
          $$event = convertUnstakeLog(convertUnstakeLogDescription(logDescription), log, blockTimestamp);
          break;
      
    }
    return {
            TAG: /* Ok */0,
            _0: $$event
          };
  }
  var e = logDescriptionResult._0;
  var tmp;
  tmp = e.TAG === /* ParseError */0 ? ({
        TAG: /* ParseError */0,
        _0: e._0
      }) : ({
        TAG: /* UnregisteredContract */1,
        _0: e._0
      });
  return {
          TAG: /* Error */1,
          _0: tmp
        };
}

function parseEvent(log, blockTimestamp, contractInterfaceManager) {
  var decodedEventResult = ContractInterfaceManager.parseLogViem(contractInterfaceManager, log);
  if (decodedEventResult.TAG === /* Ok */0) {
    var decodedEvent = decodedEventResult._0;
    var contractName = ContractInterfaceManager.getContractNameFromAddress(contractInterfaceManager, log.address);
    if (contractName === undefined) {
      return {
              TAG: /* Error */1,
              _0: {
                TAG: /* UnregisteredContract */1,
                _0: log.address
              }
            };
    }
    var match = eventStringToEvent(decodedEvent.eventName, contractName);
    var $$event;
    switch (match) {
      case /* RewardFxdxVault_AddReward */0 :
          $$event = convertAddRewardLogViem(decodedEvent, log, blockTimestamp);
          break;
      case /* RewardFxdxVault_SendReward */1 :
          $$event = convertSendRewardLogViem(decodedEvent, log, blockTimestamp);
          break;
      case /* RewardFxdxVault_TotalReserves */2 :
          $$event = convertTotalReservesLogViem(decodedEvent, log, blockTimestamp);
          break;
      case /* StakedFxdxVault_Stake */3 :
          $$event = convertStakeLogViem(decodedEvent, log, blockTimestamp);
          break;
      case /* StakedFxdxVault_TotalReserves */4 :
          $$event = convertTotalReservesLogViem$1(decodedEvent, log, blockTimestamp);
          break;
      case /* StakedFxdxVault_Unstake */5 :
          $$event = convertUnstakeLogViem(decodedEvent, log, blockTimestamp);
          break;
      
    }
    return {
            TAG: /* Ok */0,
            _0: $$event
          };
  }
  var e = decodedEventResult._0;
  var tmp;
  tmp = e.TAG === /* ParseError */0 ? ({
        TAG: /* ParseError */0,
        _0: e._0
      }) : ({
        TAG: /* UnregisteredContract */1,
        _0: e._0
      });
  return {
          TAG: /* Error */1,
          _0: tmp
        };
}

function decodeRawEventWith(rawEvent, decoder, variantAccessor) {
  var tmp;
  var exit = 0;
  var v;
  try {
    v = JSON.parse(rawEvent.params);
    exit = 1;
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    var message = Belt_Option.getWithDefault(Belt_Option.flatMap(Caml_js_exceptions.as_js_exn(exn), (function (jsexn) {
                return jsexn.message;
              })), "No message on exn");
    tmp = Spice.error(undefined, "Failed at JSON.parse. Error: " + message + "", rawEvent.params);
  }
  if (exit === 1) {
    tmp = {
      TAG: /* Ok */0,
      _0: v
    };
  }
  return Belt_Result.map(Belt_Result.flatMap(tmp, Curry.__1(decoder)), (function (params) {
                var $$event = Curry._1(variantAccessor, {
                      params: params,
                      blockNumber: rawEvent.block_number,
                      blockTimestamp: rawEvent.block_timestamp,
                      blockHash: rawEvent.block_hash,
                      srcAddress: rawEvent.src_address,
                      transactionHash: rawEvent.transaction_hash,
                      transactionIndex: rawEvent.transaction_index,
                      logIndex: rawEvent.log_index
                    });
                return {
                        timestamp: rawEvent.block_timestamp,
                        chainId: rawEvent.chain_id,
                        blockNumber: rawEvent.block_number,
                        logIndex: rawEvent.log_index,
                        event: $$event
                      };
              }));
}

function parseRawEvent(rawEvent) {
  return Belt_Result.flatMap(Types.eventName_decode(rawEvent.event_type), (function (eventName) {
                switch (eventName) {
                  case /* RewardFxdxVault_AddReward */0 :
                      return decodeRawEventWith(rawEvent, Types.RewardFxdxVaultContract.AddRewardEvent.eventArgs_decode, Types.rewardFxdxVaultContract_AddReward);
                  case /* RewardFxdxVault_SendReward */1 :
                      return decodeRawEventWith(rawEvent, Types.RewardFxdxVaultContract.SendRewardEvent.eventArgs_decode, Types.rewardFxdxVaultContract_SendReward);
                  case /* RewardFxdxVault_TotalReserves */2 :
                      return decodeRawEventWith(rawEvent, Types.RewardFxdxVaultContract.TotalReservesEvent.eventArgs_decode, Types.rewardFxdxVaultContract_TotalReserves);
                  case /* StakedFxdxVault_Stake */3 :
                      return decodeRawEventWith(rawEvent, Types.StakedFxdxVaultContract.StakeEvent.eventArgs_decode, Types.stakedFxdxVaultContract_Stake);
                  case /* StakedFxdxVault_TotalReserves */4 :
                      return decodeRawEventWith(rawEvent, Types.StakedFxdxVaultContract.TotalReservesEvent.eventArgs_decode, Types.stakedFxdxVaultContract_TotalReserves);
                  case /* StakedFxdxVault_Unstake */5 :
                      return decodeRawEventWith(rawEvent, Types.StakedFxdxVaultContract.UnstakeEvent.eventArgs_decode, Types.stakedFxdxVaultContract_Unstake);
                  
                }
              }));
}

exports.UndefinedEvent = UndefinedEvent;
exports.eventStringToEvent = eventStringToEvent;
exports.RewardFxdxVault = RewardFxdxVault;
exports.StakedFxdxVault = StakedFxdxVault;
exports.ParseEventErrorExn = ParseEventErrorExn;
exports.parseEventEthers = parseEventEthers;
exports.parseEvent = parseEvent;
exports.decodeRawEventWith = decodeRawEventWith;
exports.parseRawEvent = parseRawEvent;
/* Types Not a pure module */
