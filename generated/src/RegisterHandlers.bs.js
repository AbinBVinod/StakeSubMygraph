// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Logging = require("./Logging.bs.js");
var Caml_js_exceptions = require("rescript/lib/js/caml_js_exceptions.js");

function registerRewardFxdxVaultHandlers(param) {
  try {
    ((require("../../src/EventHandlers.js")));
    return ;
  }
  catch (raw_err){
    var err = Caml_js_exceptions.internalToOCamlException(raw_err);
    Logging.error("EE500: There was an issue importing the handler file for RewardFxdxVault. Expected file at ../../src/EventHandlers.js");
    console.log(err);
    return ;
  }
}

function registerStakedFxdxVaultHandlers(param) {
  try {
    ((require("../../src/EventHandlers.js")));
    return ;
  }
  catch (raw_err){
    var err = Caml_js_exceptions.internalToOCamlException(raw_err);
    Logging.error("EE500: There was an issue importing the handler file for StakedFxdxVault. Expected file at ../../src/EventHandlers.js");
    console.log(err);
    return ;
  }
}

function registerAllHandlers(param) {
  registerRewardFxdxVaultHandlers(undefined);
  registerStakedFxdxVaultHandlers(undefined);
}

exports.registerRewardFxdxVaultHandlers = registerRewardFxdxVaultHandlers;
exports.registerStakedFxdxVaultHandlers = registerStakedFxdxVaultHandlers;
exports.registerAllHandlers = registerAllHandlers;
/* Logging Not a pure module */
