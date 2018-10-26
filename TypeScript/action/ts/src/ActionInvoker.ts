import { ActionResolver } from './Resolver';

/**
 * Responsible of action invocation and execution
 */
export class ActionInvoker {
    constructor(
        private _resolver: ActionResolver
    ) { }

    /**
     * Invoke the specified action name
     * @param actionName The action to invoke
     * @param parameters The action parameters
     * @return A promise that will wrap the action execution result
     */
    invoke(actionName: string, parameters: any): Promise<any> {
        // find the action inside the ActionResolver
        let action = this._resolver.resolve(actionName);
        // execute the action with the given parameters
        let valuePromise = action.execute(parameters);
        // return the result
        return valuePromise;
    }
}