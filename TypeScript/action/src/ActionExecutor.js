"use strict";
require("reflect-metadata");
exports.METADATA_KEY = Symbol("ActionExecutorMeta");
/**
 * Action executor decorator.
 * Take metadatas as parameter and store theme on the targeted class
 * This must be used on every executor class that implements IActionExecutor interface
 * @param metadata The metadata to associate with the ActionExecutor class
 */
function ActionExecutor(metadata) {
    return function (constructor) {
        // use the METADATA_KEY to "hide" the metadata on the constructor
        constructor[exports.METADATA_KEY] = metadata;
    };
}
exports.ActionExecutor = ActionExecutor;
//# sourceMappingURL=ActionExecutor.js.map