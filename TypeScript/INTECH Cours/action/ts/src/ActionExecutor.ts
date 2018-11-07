import "reflect-metadata";

export interface ActionMetadata {
    actionName: string;
}

export const METADATA_KEY = Symbol("ActionExecutorMeta");

/**
 * Action executor decorator.
 * Take metadatas as parameter and store them on the targeted class  
 * This must be used on every executor class that implements IActionExecutor interface
 * @param metadata The metadata to associate with the ActionExecutor class
 */
export function ActionExecutor<TFunction extends Function>(metadata: ActionMetadata): Function {
    return function (constructor: Function) {
        // use the METADATA_KEY to "hide" the metadata on the constructor
        constructor[METADATA_KEY] = metadata;
    };
}

/**
 * All ActionExector need to satisify the IActionExecutor interface in order to be excecuted
 */
export interface IActionExecutor {
    execute(parameters: any): Promise<any>;
}
