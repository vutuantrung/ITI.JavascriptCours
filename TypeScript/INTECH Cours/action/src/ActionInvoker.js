"use strict";
/**
 * Responsible of action invocation and execution
 */
var ActionInvoker = (function () {
    function ActionInvoker(_resolver) {
        this._resolver = _resolver;
    }
    /**
     * Invoke the specified action name
     * @param actionName The action to invoke
     * @param parameters The action parameters
     * @return A promise that will wrap the action execution result
     */
    ActionInvoker.prototype.invoke = function (actionName, parameters) {
        // find the action inside the ActionResolver
        var action = this._resolver.resolve(actionName);
        // execute the action with the given parameters
        var valuePromise = action.execute(parameters);
        // return the result
        return valuePromise;
    };
    return ActionInvoker;
}());
exports.ActionInvoker = ActionInvoker;
//# sourceMappingURL=ActionInvoker.js.map