import "reflect-metadata";

import { Activator } from './Activator';
import { IActionExecutor, ActionMetadata, METADATA_KEY } from './ActionExecutor';

/**
 * Held the executor class and a singleton instance.
 * Use the Activator to create a new IActionExecutor instance
 */
export interface ExecutorInfo {
    type: Function;
    instance?: IActionExecutor;
}

/**
 * Responsible to register and retrieve IActionExecutor
 */
export class ActionResolver {
    private _executors: Map<string, ExecutorInfo>;

    constructor(private _activator: Activator) {
        this._executors = new Map<string, ExecutorInfo>();
    }

    /**
     * Register a new action executor by adding it to the map
     * @param executor The executor class to register
     */
    registerExecutor(executor: Function) {
        // read the previously stored metadata from the executor class
        // associate the executor with the action name throught the _executors map.
        console.log(executor);
        console.log(executor[METADATA_KEY].actionName);
        console.log(executor[METADATA_KEY])
        if(!this._executors.has(executor[METADATA_KEY].actionName)){
            let metadataStored = executor[METADATA_KEY];
            this._executors.set(executor[METADATA_KEY].actionName, metadataStored);
        }
    }

    /**
     * Get the executor for the given action
     * @param actionName The action name to resolve
     * @return Return the @link{IActionExecutor} associated with the action
     */
    resolve(actionName: string): IActionExecutor {
        if (!this._executors.has(actionName)) {
            throw `No executor found for the action ${actionName}`;
        }
        // find the IActionExecutor instance inside the map
        let instance = this._executors.get(actionName).instance;
        return instance;
    }
}
