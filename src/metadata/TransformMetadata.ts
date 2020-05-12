import {TransformOptions} from "./ExposeExcludeOptions";
import {TransformationType} from "../TransformOperationExecutor";
import {ClassTransformOptions} from "../ClassTransformOptions";

export class TransformMetadata {

    constructor(public target: Function,
                public propertyName: string,
                public transformFn: (value: any, key: string, obj: any, transformationType: TransformationType, options: ClassTransformOptions) => any,
                public options: TransformOptions) {
    }

}
