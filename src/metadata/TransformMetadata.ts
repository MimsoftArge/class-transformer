import {TransformOptions} from "./ExposeExcludeOptions";
import {TransformFnParams} from "./TransformParameters";

export class TransformMetadata {

    constructor(public target: Function,
                public propertyName: string,
                public transformFn: (params: TransformFnParams) => any,
                public options: TransformOptions) {
    }

}
