"use strict";
require("reflect-metadata");
var ActionExecutor_1 = require("./ActionExecutor");
/**
 * Responsible to register and retrieve IActionExecutor
 */
var ActionResolver = (function () {
    function ActionResolver(_activator) {
        this._activator = _activator;
        this._executors = new Map();
    }
    /**
     * Register a new action executor by adding it to the map
     * @param executor The executor class to register
     */
    ActionResolver.prototype.registerExecutor = function (executor) {
        // read the previously stored metadata from the executor class
        // associate the executor with the action name throught the _executors map.
        console.log(executor);
        console.log(executor[ActionExecutor_1.METADATA_KEY].actionName);
        console.log(executor[ActionExecutor_1.METADATA_KEY]);
        if (!this._executors.has(executor[ActionExecutor_1.METADATA_KEY].actionName)) {
            var metadataStored = executor[ActionExecutor_1.METADATA_KEY];
            this._executors.set(executor[ActionExecutor_1.METADATA_KEY].actionName, metadataStored);
        }
    };
    /**
     * Get the executor for the given action
     * @param actionName The action name to resolve
     * @return Return the @link{IActionExecutor} associated with the action
     */
    ActionResolver.prototype.resolve = function (actionName) {
        if (!this._executors.has(actionName)) {
            throw "No executor found for the action " + actionName;
        }
        // find the IActionExecutor instance inside the map
        var instance = this._executors.get(actionName).instance;
        return instance;
    };
    return ActionResolver;
}());
exports.ActionResolver = ActionResolver;
//# sourceMappingURL=Resolver.js.map