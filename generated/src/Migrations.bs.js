// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Config = require("./Config.bs.js");
var Logging = require("./Logging.bs.js");
var $$Promise = require("@ryyppy/rescript-promise/src/Promise.bs.js");
var Process = require("process");
var Postgres = require("postgres");
var TrackTables = require("./TrackTables.bs.js");

var sql = Postgres(Config.db);

async function createEventSyncStateTable(param) {
  await (sql`
      CREATE TABLE IF NOT EXISTS public.event_sync_state (
        chain_id INTEGER NOT NULL,
        block_number INTEGER NOT NULL,
        log_index INTEGER NOT NULL,
        transaction_index INTEGER NOT NULL,
        block_timestamp INTEGER NOT NULL,
        PRIMARY KEY (chain_id)
      );
      `);
}

async function dropEventSyncStateTable(param) {
  await (sql`
      DROP TABLE IF EXISTS public.event_sync_state;
    `);
}

var EventSyncState = {
  createEventSyncStateTable: createEventSyncStateTable,
  dropEventSyncStateTable: dropEventSyncStateTable
};

async function createChainMetadataTable(param) {
  await (sql`
      CREATE TABLE IF NOT EXISTS public.chain_metadata (
        chain_id INTEGER NOT NULL,
        start_block INTEGER NOT NULL,
        block_height INTEGER NOT NULL,
        PRIMARY KEY (chain_id)
      );
      `);
}

async function dropChainMetadataTable(param) {
  await (sql`
      DROP TABLE IF EXISTS public.chain_metadata;
    `);
}

var ChainMetadata = {
  createChainMetadataTable: createChainMetadataTable,
  dropChainMetadataTable: dropChainMetadataTable
};

async function createPersistedStateTable(param) {
  await (sql`
      CREATE TABLE IF NOT EXISTS public.persisted_state (
        id SERIAL PRIMARY KEY,
        envio_version TEXT NOT NULL, 
        config_hash TEXT NOT NULL,
        schema_hash TEXT NOT NULL,
        handler_files_hash TEXT NOT NULL,
        abi_files_hash TEXT NOT NULL
      );
      `);
}

async function dropPersistedStateTable(param) {
  await (sql`
      DROP TABLE IF EXISTS public.persisted_state;
    `);
}

var PersistedState = {
  createPersistedStateTable: createPersistedStateTable,
  dropPersistedStateTable: dropPersistedStateTable
};

async function createEventTypeEnum(param) {
  await (sql`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'event_type') THEN
          CREATE TYPE EVENT_TYPE AS ENUM(
          'RewardFxdxVault_AddReward',
          'RewardFxdxVault_SendReward',
          'RewardFxdxVault_TotalReserves',
          'StakedFxdxVault_Stake',
          'StakedFxdxVault_TotalReserves',
          'StakedFxdxVault_Unstake'
          );
        END IF;
      END $$;
      `);
}

async function createRawEventsTable(param) {
  await createEventTypeEnum(undefined);
  await (sql`
      CREATE TABLE IF NOT EXISTS public.raw_events (
        chain_id INTEGER NOT NULL,
        event_id NUMERIC NOT NULL,
        block_number INTEGER NOT NULL,
        log_index INTEGER NOT NULL,
        transaction_index INTEGER NOT NULL,
        transaction_hash TEXT NOT NULL,
        src_address TEXT NOT NULL,
        block_hash TEXT NOT NULL,
        block_timestamp INTEGER NOT NULL,
        event_type EVENT_TYPE NOT NULL,
        params JSON NOT NULL,
        db_write_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (chain_id, event_id)
      );
      `);
}

async function dropRawEventsTable(param) {
  await (sql`
      DROP TABLE IF EXISTS public.raw_events;
    `);
  await (sql`
      DROP TYPE IF EXISTS EVENT_TYPE CASCADE;
    `);
}

var RawEventsTable = {
  createEventTypeEnum: createEventTypeEnum,
  createRawEventsTable: createRawEventsTable,
  dropRawEventsTable: dropRawEventsTable
};

async function createDynamicContractRegistryTable(param) {
  await (sql`
      DO $$ BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'contract_type') THEN
          CREATE TYPE CONTRACT_TYPE AS ENUM (
          'RewardFxdxVault',
          'StakedFxdxVault'
          );
        END IF;
      END $$;
      `);
  await (sql`
      CREATE TABLE IF NOT EXISTS public.dynamic_contract_registry (
        chain_id INTEGER NOT NULL,
        event_id NUMERIC NOT NULL,
        contract_address TEXT NOT NULL,
        contract_type CONTRACT_TYPE NOT NULL,
        PRIMARY KEY (chain_id, contract_address)
      );
      `);
}

async function dropDynamicContractRegistryTable(param) {
  await (sql`
      DROP TABLE IF EXISTS public.dynamic_contract_registry;
    `);
  await (sql`
      DROP TYPE IF EXISTS EVENT_TYPE CASCADE;
    `);
}

var DynamicContractRegistryTable = {
  createDynamicContractRegistryTable: createDynamicContractRegistryTable,
  dropDynamicContractRegistryTable: dropDynamicContractRegistryTable
};

async function createEventsSummaryTable(param) {
  return await (sql`
      CREATE TABLE \"public\".\"EventsSummary\" (\"id\" text NOT NULL,\"rewardFxdxVault_AddRewardCount\" numeric NOT NULL,\"rewardFxdxVault_SendRewardCount\" numeric NOT NULL,\"rewardFxdxVault_TotalReservesCount\" numeric NOT NULL,\"stakedFxdxVault_StakeCount\" numeric NOT NULL,\"stakedFxdxVault_TotalReservesCount\" numeric NOT NULL,\"stakedFxdxVault_UnstakeCount\" numeric NOT NULL, 
        db_write_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        PRIMARY KEY (\"id\"));`);
}

async function deleteEventsSummaryTable(param) {
  return await (sql`DROP TABLE IF EXISTS \"public\".\"EventsSummary\";`);
}

var EventsSummary = {
  createEventsSummaryTable: createEventsSummaryTable,
  deleteEventsSummaryTable: deleteEventsSummaryTable
};

async function createRewardFxdxVault_AddRewardTable(param) {
  return await (sql`
      CREATE TABLE \"public\".\"RewardFxdxVault_AddReward\" (\"id\" text NOT NULL,\"rewardId\" numeric NOT NULL,\"stakeId\" numeric NOT NULL,\"rewardAmount\" numeric NOT NULL,\"duration\" numeric NOT NULL,\"timestamp\" numeric NOT NULL,\"account\" text NOT NULL,\"isClaimed\" boolean NOT NULL,\"eventsSummary\" text NOT NULL, 
        db_write_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        PRIMARY KEY (\"id\"));`);
}

async function deleteRewardFxdxVault_AddRewardTable(param) {
  return await (sql`DROP TABLE IF EXISTS \"public\".\"RewardFxdxVault_AddReward\";`);
}

var RewardFxdxVault_AddReward = {
  createRewardFxdxVault_AddRewardTable: createRewardFxdxVault_AddRewardTable,
  deleteRewardFxdxVault_AddRewardTable: deleteRewardFxdxVault_AddRewardTable
};

async function createRewardFxdxVault_SendRewardTable(param) {
  return await (sql`
      CREATE TABLE \"public\".\"RewardFxdxVault_SendReward\" (\"id\" text NOT NULL,\"rewardId\" numeric NOT NULL,\"stakeId\" numeric NOT NULL,\"rewardAmount\" numeric NOT NULL,\"duration\" numeric NOT NULL,\"timestamp\" numeric NOT NULL,\"account\" text NOT NULL,\"isClaimed\" boolean NOT NULL,\"eventsSummary\" text NOT NULL, 
        db_write_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        PRIMARY KEY (\"id\"));`);
}

async function deleteRewardFxdxVault_SendRewardTable(param) {
  return await (sql`DROP TABLE IF EXISTS \"public\".\"RewardFxdxVault_SendReward\";`);
}

var RewardFxdxVault_SendReward = {
  createRewardFxdxVault_SendRewardTable: createRewardFxdxVault_SendRewardTable,
  deleteRewardFxdxVault_SendRewardTable: deleteRewardFxdxVault_SendRewardTable
};

async function createRewardFxdxVault_TotalReservesTable(param) {
  return await (sql`
      CREATE TABLE \"public\".\"RewardFxdxVault_TotalReserves\" (\"id\" text NOT NULL,\"vault\" text NOT NULL,\"rewardReserves\" numeric NOT NULL,\"eventsSummary\" text NOT NULL, 
        db_write_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        PRIMARY KEY (\"id\"));`);
}

async function deleteRewardFxdxVault_TotalReservesTable(param) {
  return await (sql`DROP TABLE IF EXISTS \"public\".\"RewardFxdxVault_TotalReserves\";`);
}

var RewardFxdxVault_TotalReserves = {
  createRewardFxdxVault_TotalReservesTable: createRewardFxdxVault_TotalReservesTable,
  deleteRewardFxdxVault_TotalReservesTable: deleteRewardFxdxVault_TotalReservesTable
};

async function createStakedFxdxVault_StakeTable(param) {
  return await (sql`
      CREATE TABLE \"public\".\"StakedFxdxVault_Stake\" (\"id\" text NOT NULL,\"stakeId\" numeric NOT NULL,\"amount\" numeric NOT NULL,\"duration\" numeric NOT NULL,\"rewardInterestRate\" numeric NOT NULL,\"timestamp\" numeric NOT NULL,\"account\" text NOT NULL,\"unstaked\" boolean NOT NULL,\"eventsSummary\" text NOT NULL, 
        db_write_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        PRIMARY KEY (\"id\"));`);
}

async function deleteStakedFxdxVault_StakeTable(param) {
  return await (sql`DROP TABLE IF EXISTS \"public\".\"StakedFxdxVault_Stake\";`);
}

var StakedFxdxVault_Stake = {
  createStakedFxdxVault_StakeTable: createStakedFxdxVault_StakeTable,
  deleteStakedFxdxVault_StakeTable: deleteStakedFxdxVault_StakeTable
};

async function createStakedFxdxVault_TotalReservesTable(param) {
  return await (sql`
      CREATE TABLE \"public\".\"StakedFxdxVault_TotalReserves\" (\"id\" text NOT NULL,\"vault\" text NOT NULL,\"reserves\" numeric NOT NULL,\"eventsSummary\" text NOT NULL, 
        db_write_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        PRIMARY KEY (\"id\"));`);
}

async function deleteStakedFxdxVault_TotalReservesTable(param) {
  return await (sql`DROP TABLE IF EXISTS \"public\".\"StakedFxdxVault_TotalReserves\";`);
}

var StakedFxdxVault_TotalReserves = {
  createStakedFxdxVault_TotalReservesTable: createStakedFxdxVault_TotalReservesTable,
  deleteStakedFxdxVault_TotalReservesTable: deleteStakedFxdxVault_TotalReservesTable
};

async function createStakedFxdxVault_UnstakeTable(param) {
  return await (sql`
      CREATE TABLE \"public\".\"StakedFxdxVault_Unstake\" (\"id\" text NOT NULL,\"stakeId\" numeric NOT NULL,\"amount\" numeric NOT NULL,\"duration\" numeric NOT NULL,\"rewardInterestRate\" numeric NOT NULL,\"timestamp\" numeric NOT NULL,\"account\" text NOT NULL,\"unstaked\" boolean NOT NULL,\"eventsSummary\" text NOT NULL, 
        db_write_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        PRIMARY KEY (\"id\"));`);
}

async function deleteStakedFxdxVault_UnstakeTable(param) {
  return await (sql`DROP TABLE IF EXISTS \"public\".\"StakedFxdxVault_Unstake\";`);
}

var StakedFxdxVault_Unstake = {
  createStakedFxdxVault_UnstakeTable: createStakedFxdxVault_UnstakeTable,
  deleteStakedFxdxVault_UnstakeTable: deleteStakedFxdxVault_UnstakeTable
};

async function deleteAllTables(param) {
  Logging.trace("Dropping all tables");
  return await (sql.unsafe`DROP SCHEMA public CASCADE;CREATE SCHEMA public;GRANT ALL ON SCHEMA public TO postgres;GRANT ALL ON SCHEMA public TO public;`);
}

async function deleteAllTablesExceptRawEventsAndDynamicContractRegistry(param) {
  return await (sql.unsafe`
    DO $$ 
    DECLARE
        table_name_var text;
    BEGIN
        FOR table_name_var IN (SELECT table_name
                           FROM information_schema.tables
                           WHERE table_schema = 'public'
                           AND table_name != 'raw_events'
                           AND table_name != 'dynamic_contract_registry') 
        LOOP
            EXECUTE 'DROP TABLE IF EXISTS ' || table_name_var || ' CASCADE';
        END LOOP;
    END $$;
  `);
}

async function runUpMigrations(shouldExit) {
  var exitCode = {
    contents: /* Success */0
  };
  await $$Promise.$$catch(createPersistedStateTable(undefined), (function (err) {
          exitCode.contents = /* Failure */1;
          return Promise.resolve(Logging.errorWithExn(err, "EE800: Error creating persisted_state table"));
        }));
  await $$Promise.$$catch(createEventSyncStateTable(undefined), (function (err) {
          exitCode.contents = /* Failure */1;
          return Promise.resolve(Logging.errorWithExn(err, "EE800: Error creating event_sync_state table"));
        }));
  await $$Promise.$$catch(createChainMetadataTable(undefined), (function (err) {
          exitCode.contents = /* Failure */1;
          return Promise.resolve(Logging.errorWithExn(err, "EE800: Error creating chain_metadata table"));
        }));
  await $$Promise.$$catch(createRawEventsTable(undefined), (function (err) {
          exitCode.contents = /* Failure */1;
          return Promise.resolve(Logging.errorWithExn(err, "EE800: Error creating raw_events table"));
        }));
  await $$Promise.$$catch(createDynamicContractRegistryTable(undefined), (function (err) {
          exitCode.contents = /* Failure */1;
          return Promise.resolve(Logging.errorWithExn(err, "EE801: Error creating dynamic_contracts table"));
        }));
  await $$Promise.$$catch(createEventsSummaryTable(undefined), (function (err) {
          exitCode.contents = /* Failure */1;
          return Promise.resolve(Logging.errorWithExn(err, "EE802: Error creating EventsSummary table"));
        }));
  await $$Promise.$$catch(createRewardFxdxVault_AddRewardTable(undefined), (function (err) {
          exitCode.contents = /* Failure */1;
          return Promise.resolve(Logging.errorWithExn(err, "EE802: Error creating RewardFxdxVault_AddReward table"));
        }));
  await $$Promise.$$catch(createRewardFxdxVault_SendRewardTable(undefined), (function (err) {
          exitCode.contents = /* Failure */1;
          return Promise.resolve(Logging.errorWithExn(err, "EE802: Error creating RewardFxdxVault_SendReward table"));
        }));
  await $$Promise.$$catch(createRewardFxdxVault_TotalReservesTable(undefined), (function (err) {
          exitCode.contents = /* Failure */1;
          return Promise.resolve(Logging.errorWithExn(err, "EE802: Error creating RewardFxdxVault_TotalReserves table"));
        }));
  await $$Promise.$$catch(createStakedFxdxVault_StakeTable(undefined), (function (err) {
          exitCode.contents = /* Failure */1;
          return Promise.resolve(Logging.errorWithExn(err, "EE802: Error creating StakedFxdxVault_Stake table"));
        }));
  await $$Promise.$$catch(createStakedFxdxVault_TotalReservesTable(undefined), (function (err) {
          exitCode.contents = /* Failure */1;
          return Promise.resolve(Logging.errorWithExn(err, "EE802: Error creating StakedFxdxVault_TotalReserves table"));
        }));
  await $$Promise.$$catch(createStakedFxdxVault_UnstakeTable(undefined), (function (err) {
          exitCode.contents = /* Failure */1;
          return Promise.resolve(Logging.errorWithExn(err, "EE802: Error creating StakedFxdxVault_Unstake table"));
        }));
  await $$Promise.$$catch(TrackTables.trackAllTables(undefined), (function (err) {
          return Promise.resolve(Logging.errorWithExn(err, "EE803: Error tracking tables"));
        }));
  if (shouldExit) {
    Process.exit(exitCode.contents);
  }
  return exitCode.contents;
}

async function runDownMigrations(shouldExit, shouldDropRawEvents) {
  var exitCode = {
    contents: /* Success */0
  };
  if (shouldDropRawEvents) {
    await $$Promise.$$catch(deleteAllTables(undefined), (function (err) {
            exitCode.contents = /* Failure */1;
            return Promise.resolve(Logging.errorWithExn(err, "EE804: Error dropping entity tables"));
          }));
  } else {
    await $$Promise.$$catch(deleteAllTablesExceptRawEventsAndDynamicContractRegistry(undefined), (function (err) {
            exitCode.contents = /* Failure */1;
            return Promise.resolve(Logging.errorWithExn(err, "EE805: Error dropping entity tables except for raw events"));
          }));
  }
  if (shouldExit) {
    Process.exit(exitCode.contents);
  }
  return exitCode.contents;
}

async function setupDb(shouldDropRawEvents) {
  Logging.info("Provisioning Database");
  var exitCodeDown = await runDownMigrations(false, shouldDropRawEvents);
  var exitCodeUp = await runUpMigrations(false);
  var exitCode = exitCodeDown || exitCodeUp ? /* Failure */1 : /* Success */0;
  Process.exit(exitCode);
}

exports.sql = sql;
exports.EventSyncState = EventSyncState;
exports.ChainMetadata = ChainMetadata;
exports.PersistedState = PersistedState;
exports.RawEventsTable = RawEventsTable;
exports.DynamicContractRegistryTable = DynamicContractRegistryTable;
exports.EventsSummary = EventsSummary;
exports.RewardFxdxVault_AddReward = RewardFxdxVault_AddReward;
exports.RewardFxdxVault_SendReward = RewardFxdxVault_SendReward;
exports.RewardFxdxVault_TotalReserves = RewardFxdxVault_TotalReserves;
exports.StakedFxdxVault_Stake = StakedFxdxVault_Stake;
exports.StakedFxdxVault_TotalReserves = StakedFxdxVault_TotalReserves;
exports.StakedFxdxVault_Unstake = StakedFxdxVault_Unstake;
exports.deleteAllTables = deleteAllTables;
exports.deleteAllTablesExceptRawEventsAndDynamicContractRegistry = deleteAllTablesExceptRawEventsAndDynamicContractRegistry;
exports.runUpMigrations = runUpMigrations;
exports.runDownMigrations = runDownMigrations;
exports.setupDb = setupDb;
/* sql Not a pure module */
