/**
 * @author     Zamatica
 * @file       transform.ts
 */

import { Any } from "../util/object";

export type TransformOperatorsFunction<Type, DataType, ReturnType> = (value: DataType, index: number, thisArg: Type | undefined) => ReturnType;

export type TransformReduceOperatorsFunction<Type, DataType, ReturnType> = (accumulator: DataType, currentvalue: DataType, index: number, thisArg: Type | undefined) => ReturnType;

export interface TransformOperators<Type, DataType = Any> {
    filter(fn: TransformOperatorsFunction<Type, DataType, boolean>, thisArg: Type | undefined): Type;

    reduce(fn: TransformReduceOperatorsFunction<Type, DataType, DataType>, initialValue: DataType | undefined): Any;

    map(fn: TransformOperatorsFunction<Type, DataType, Any>, thisArg: Type | undefined): Type;
}

