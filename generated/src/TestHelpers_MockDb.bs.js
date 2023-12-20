// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var IO = require("./IO.bs.js");
var Curry = require("rescript/lib/js/curry.js");
var Belt_Array = require("rescript/lib/js/belt_Array.js");

var deleteDictKey = (function(dict, key) {
      delete dict[key]
    });

function makeStoreOperator(storeStateMod, inMemoryStore, makeMockDb, getStore, getKey) {
  var values = storeStateMod.values;
  var set = storeStateMod.set;
  var get = Curry._1(storeStateMod.get, Curry._1(getStore, inMemoryStore));
  var getAll = function (param) {
    return Belt_Array.map(Curry._1(values, Curry._1(getStore, inMemoryStore)), (function (row) {
                  return row.entity;
                }));
  };
  var set$1 = function (entity) {
    var cloned = IO.InMemoryStore.clone(inMemoryStore);
    Curry._4(set, Curry._1(getStore, cloned), Curry._1(getKey, entity), /* Set */1, entity);
    return Curry._1(makeMockDb, cloned);
  };
  var $$delete = function (key) {
    var cloned = IO.InMemoryStore.clone(inMemoryStore);
    var store = Curry._1(getStore, cloned);
    deleteDictKey(store.dict, Curry._1(store.hasher, key));
    return Curry._1(makeMockDb, cloned);
  };
  return {
          getAll: getAll,
          get: get,
          set: set$1,
          delete: $$delete
        };
}

function makeWithInMemoryStore(inMemoryStore) {
  var $$let = IO.InMemoryStore.RawEvents;
  var rawEvents = makeStoreOperator({
        get: $$let.get,
        values: $$let.values,
        set: $$let.set
      }, inMemoryStore, makeWithInMemoryStore, (function (db) {
          return db.rawEvents;
        }), (function (param) {
          return {
                  chainId: param.chain_id,
                  eventId: param.event_id
                };
        }));
  var $$let$1 = IO.InMemoryStore.EventSyncState;
  var eventSyncState = makeStoreOperator({
        get: $$let$1.get,
        values: $$let$1.values,
        set: $$let$1.set
      }, inMemoryStore, makeWithInMemoryStore, (function (db) {
          return db.eventSyncState;
        }), (function (param) {
          return param.chain_id;
        }));
  var $$let$2 = IO.InMemoryStore.DynamicContractRegistry;
  var dynamicContractRegistry = makeStoreOperator({
        get: $$let$2.get,
        values: $$let$2.values,
        set: $$let$2.set
      }, inMemoryStore, makeWithInMemoryStore, (function (db) {
          return db.dynamicContractRegistry;
        }), (function (param) {
          return {
                  chainId: param.chain_id,
                  contractAddress: param.contract_address
                };
        }));
  var $$let$3 = IO.InMemoryStore.EventsSummary;
  var $$let$4 = IO.InMemoryStore.RewardFxdxVault_AddReward;
  var $$let$5 = IO.InMemoryStore.RewardFxdxVault_SendReward;
  var $$let$6 = IO.InMemoryStore.RewardFxdxVault_TotalReserves;
  var $$let$7 = IO.InMemoryStore.StakedFxdxVault_Stake;
  var $$let$8 = IO.InMemoryStore.StakedFxdxVault_TotalReserves;
  var $$let$9 = IO.InMemoryStore.StakedFxdxVault_Unstake;
  var entities_EventsSummary = makeStoreOperator({
        get: $$let$3.get,
        values: $$let$3.values,
        set: $$let$3.set
      }, inMemoryStore, makeWithInMemoryStore, (function (db) {
          return db.eventsSummary;
        }), (function (param) {
          return param.id;
        }));
  var entities_RewardFxdxVault_AddReward = makeStoreOperator({
        get: $$let$4.get,
        values: $$let$4.values,
        set: $$let$4.set
      }, inMemoryStore, makeWithInMemoryStore, (function (db) {
          return db.rewardFxdxVault_AddReward;
        }), (function (param) {
          return param.id;
        }));
  var entities_RewardFxdxVault_SendReward = makeStoreOperator({
        get: $$let$5.get,
        values: $$let$5.values,
        set: $$let$5.set
      }, inMemoryStore, makeWithInMemoryStore, (function (db) {
          return db.rewardFxdxVault_SendReward;
        }), (function (param) {
          return param.id;
        }));
  var entities_RewardFxdxVault_TotalReserves = makeStoreOperator({
        get: $$let$6.get,
        values: $$let$6.values,
        set: $$let$6.set
      }, inMemoryStore, makeWithInMemoryStore, (function (db) {
          return db.rewardFxdxVault_TotalReserves;
        }), (function (param) {
          return param.id;
        }));
  var entities_StakedFxdxVault_Stake = makeStoreOperator({
        get: $$let$7.get,
        values: $$let$7.values,
        set: $$let$7.set
      }, inMemoryStore, makeWithInMemoryStore, (function (db) {
          return db.stakedFxdxVault_Stake;
        }), (function (param) {
          return param.id;
        }));
  var entities_StakedFxdxVault_TotalReserves = makeStoreOperator({
        get: $$let$8.get,
        values: $$let$8.values,
        set: $$let$8.set
      }, inMemoryStore, makeWithInMemoryStore, (function (db) {
          return db.stakedFxdxVault_TotalReserves;
        }), (function (param) {
          return param.id;
        }));
  var entities_StakedFxdxVault_Unstake = makeStoreOperator({
        get: $$let$9.get,
        values: $$let$9.values,
        set: $$let$9.set
      }, inMemoryStore, makeWithInMemoryStore, (function (db) {
          return db.stakedFxdxVault_Unstake;
        }), (function (param) {
          return param.id;
        }));
  var entities = {
    EventsSummary: entities_EventsSummary,
    RewardFxdxVault_AddReward: entities_RewardFxdxVault_AddReward,
    RewardFxdxVault_SendReward: entities_RewardFxdxVault_SendReward,
    RewardFxdxVault_TotalReserves: entities_RewardFxdxVault_TotalReserves,
    StakedFxdxVault_Stake: entities_StakedFxdxVault_Stake,
    StakedFxdxVault_TotalReserves: entities_StakedFxdxVault_TotalReserves,
    StakedFxdxVault_Unstake: entities_StakedFxdxVault_Unstake
  };
  return {
          __dbInternal__: inMemoryStore,
          entities: entities,
          rawEvents: rawEvents,
          eventSyncState: eventSyncState,
          dynamicContractRegistry: dynamicContractRegistry
        };
}

function createMockDb(param) {
  return makeWithInMemoryStore(IO.InMemoryStore.make(undefined));
}

function getInternalDb(self) {
  return self.__dbInternal__;
}

function cloneMockDb(self) {
  return makeWithInMemoryStore(IO.InMemoryStore.clone(self.__dbInternal__));
}

function makeMockDbEntityExecuter(idsToLoad, dbReadFn, inMemStoreSetFn, store, getEntiyId) {
  var dbReadFn$1 = function (idsArr) {
    return Belt_Array.keepMap(idsArr, Curry.__1(dbReadFn));
  };
  return IO.makeEntityExecuterComposer(idsToLoad, dbReadFn$1, inMemStoreSetFn, store, getEntiyId, undefined, (function (res, fn) {
                Curry._1(fn, res);
              }));
}

function executeMockDbLoadLayer(mockDb, loadLayer, inMemoryStore) {
  var entityExecutors = [
    makeMockDbEntityExecuter(loadLayer.eventsSummaryIdsToLoad, mockDb.entities.EventsSummary.get, IO.InMemoryStore.EventsSummary.set, inMemoryStore.eventsSummary, (function (entity) {
            return entity.id;
          })),
    makeMockDbEntityExecuter(loadLayer.rewardFxdxVault_AddRewardIdsToLoad, mockDb.entities.RewardFxdxVault_AddReward.get, IO.InMemoryStore.RewardFxdxVault_AddReward.set, inMemoryStore.rewardFxdxVault_AddReward, (function (entity) {
            return entity.id;
          })),
    makeMockDbEntityExecuter(loadLayer.rewardFxdxVault_SendRewardIdsToLoad, mockDb.entities.RewardFxdxVault_SendReward.get, IO.InMemoryStore.RewardFxdxVault_SendReward.set, inMemoryStore.rewardFxdxVault_SendReward, (function (entity) {
            return entity.id;
          })),
    makeMockDbEntityExecuter(loadLayer.rewardFxdxVault_TotalReservesIdsToLoad, mockDb.entities.RewardFxdxVault_TotalReserves.get, IO.InMemoryStore.RewardFxdxVault_TotalReserves.set, inMemoryStore.rewardFxdxVault_TotalReserves, (function (entity) {
            return entity.id;
          })),
    makeMockDbEntityExecuter(loadLayer.stakedFxdxVault_StakeIdsToLoad, mockDb.entities.StakedFxdxVault_Stake.get, IO.InMemoryStore.StakedFxdxVault_Stake.set, inMemoryStore.stakedFxdxVault_Stake, (function (entity) {
            return entity.id;
          })),
    makeMockDbEntityExecuter(loadLayer.stakedFxdxVault_TotalReservesIdsToLoad, mockDb.entities.StakedFxdxVault_TotalReserves.get, IO.InMemoryStore.StakedFxdxVault_TotalReserves.set, inMemoryStore.stakedFxdxVault_TotalReserves, (function (entity) {
            return entity.id;
          })),
    makeMockDbEntityExecuter(loadLayer.stakedFxdxVault_UnstakeIdsToLoad, mockDb.entities.StakedFxdxVault_Unstake.get, IO.InMemoryStore.StakedFxdxVault_Unstake.set, inMemoryStore.stakedFxdxVault_Unstake, (function (entity) {
            return entity.id;
          }))
  ];
  var handleResponses = function (param) {
    return IO.getNextLayer(loadLayer);
  };
  return IO.executeLoadLayerComposer(entityExecutors, handleResponses);
}

function loadEntitiesToInMemStore(mockDb, entityBatch, inMemoryStore) {
  var executeLoadLayerFn = function (param, param$1) {
    return executeMockDbLoadLayer(mockDb, param, param$1);
  };
  var then = function (res, fn) {
    return Curry._1(fn, res);
  };
  IO.loadEntitiesToInMemStoreComposer(entityBatch, inMemoryStore, executeLoadLayerFn, then, undefined);
}

function executeRows(mockDb, inMemoryStore, getStore, getRows, getKey, setFunction) {
  Belt_Array.forEach(Curry._1(getRows, Curry._1(getStore, inMemoryStore)), (function (row) {
          var store = Curry._1(getStore, mockDb.__dbInternal__);
          var match = row.dbOp;
          switch (match) {
            case /* Read */0 :
                return ;
            case /* Set */1 :
                return Curry._4(setFunction, store, Curry._1(getKey, row.entity), /* Read */0, row.entity);
            case /* Delete */2 :
                return deleteDictKey(store.dict, Curry._1(store.hasher, Curry._1(getKey, row.entity)));
            
          }
        }));
}

function writeFromMemoryStore(mockDb, inMemoryStore) {
  executeRows(mockDb, inMemoryStore, (function (inMemStore) {
          return inMemStore.rawEvents;
        }), IO.InMemoryStore.RawEvents.values, (function (entity) {
          return {
                  chainId: entity.chain_id,
                  eventId: entity.event_id
                };
        }), IO.InMemoryStore.RawEvents.set);
  executeRows(mockDb, inMemoryStore, (function (inMemStore) {
          return inMemStore.eventSyncState;
        }), IO.InMemoryStore.EventSyncState.values, (function (entity) {
          return entity.chain_id;
        }), IO.InMemoryStore.EventSyncState.set);
  executeRows(mockDb, inMemoryStore, (function (inMemStore) {
          return inMemStore.dynamicContractRegistry;
        }), IO.InMemoryStore.DynamicContractRegistry.values, (function (entity) {
          return {
                  chainId: entity.chain_id,
                  contractAddress: entity.contract_address
                };
        }), IO.InMemoryStore.DynamicContractRegistry.set);
  executeRows(mockDb, inMemoryStore, (function (self) {
          return self.eventsSummary;
        }), IO.InMemoryStore.EventsSummary.values, (function (entity) {
          return entity.id;
        }), IO.InMemoryStore.EventsSummary.set);
  executeRows(mockDb, inMemoryStore, (function (self) {
          return self.rewardFxdxVault_AddReward;
        }), IO.InMemoryStore.RewardFxdxVault_AddReward.values, (function (entity) {
          return entity.id;
        }), IO.InMemoryStore.RewardFxdxVault_AddReward.set);
  executeRows(mockDb, inMemoryStore, (function (self) {
          return self.rewardFxdxVault_SendReward;
        }), IO.InMemoryStore.RewardFxdxVault_SendReward.values, (function (entity) {
          return entity.id;
        }), IO.InMemoryStore.RewardFxdxVault_SendReward.set);
  executeRows(mockDb, inMemoryStore, (function (self) {
          return self.rewardFxdxVault_TotalReserves;
        }), IO.InMemoryStore.RewardFxdxVault_TotalReserves.values, (function (entity) {
          return entity.id;
        }), IO.InMemoryStore.RewardFxdxVault_TotalReserves.set);
  executeRows(mockDb, inMemoryStore, (function (self) {
          return self.stakedFxdxVault_Stake;
        }), IO.InMemoryStore.StakedFxdxVault_Stake.values, (function (entity) {
          return entity.id;
        }), IO.InMemoryStore.StakedFxdxVault_Stake.set);
  executeRows(mockDb, inMemoryStore, (function (self) {
          return self.stakedFxdxVault_TotalReserves;
        }), IO.InMemoryStore.StakedFxdxVault_TotalReserves.values, (function (entity) {
          return entity.id;
        }), IO.InMemoryStore.StakedFxdxVault_TotalReserves.set);
  executeRows(mockDb, inMemoryStore, (function (self) {
          return self.stakedFxdxVault_Unstake;
        }), IO.InMemoryStore.StakedFxdxVault_Unstake.values, (function (entity) {
          return entity.id;
        }), IO.InMemoryStore.StakedFxdxVault_Unstake.set);
}

exports.deleteDictKey = deleteDictKey;
exports.makeStoreOperator = makeStoreOperator;
exports.makeWithInMemoryStore = makeWithInMemoryStore;
exports.createMockDb = createMockDb;
exports.getInternalDb = getInternalDb;
exports.cloneMockDb = cloneMockDb;
exports.makeMockDbEntityExecuter = makeMockDbEntityExecuter;
exports.executeMockDbLoadLayer = executeMockDbLoadLayer;
exports.loadEntitiesToInMemStore = loadEntitiesToInMemStore;
exports.executeRows = executeRows;
exports.writeFromMemoryStore = writeFromMemoryStore;
/* IO Not a pure module */
