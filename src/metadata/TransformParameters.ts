import { TransformationType } from "../TransformOperationExecutor";
import { ClassTransformOptions } from "../ClassTransformOptions";

export interface TransformFnParams {
    value: any;
    key: string;
    obj: any;
    targetType: Function;
    transformationType: TransformationType;
    options: ClassTransformOptions;
}
