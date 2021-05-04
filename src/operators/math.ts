/**
 * @author     Zamatica
 * @file       math.ts
 */

import { Any } from '../util/object';

export interface MathReturnTypes {
    AddReturnType: Any,
    SubtractReturnType: Any,
    MultipleReturnType: Any,
    DivideReturnType: Any
}

export interface MathOperators<Type,
    OperationReturnType extends MathReturnTypes,
        AddReturnType      = OperationReturnType['AddReturnType'],
        SubtractReturnType = OperationReturnType['SubtractReturnType'],
        MultiplyReturnType = OperationReturnType['MultipleReturnType'],
        DivideReturnType   = OperationReturnType['DivideReturnType'],
        ReturnTypes extends MathReturnTypes = {
            AddReturnType: AddReturnType,
            SubtractReturnType: SubtractReturnType,
            MultipleReturnType: MultiplyReturnType,
            DivideReturnType: DivideReturnType }> {

    add(rhs: MathOperators<Type, ReturnTypes>): AddReturnType;
    addEqual(rhs: MathOperators<Type, ReturnTypes>): MathOperators<Type, ReturnTypes>;

    subtract(rhs: MathOperators<Type, ReturnTypes>): SubtractReturnType;
    subtractEqual(rhs: MathOperators<Type, ReturnTypes>): MathOperators<Type, ReturnTypes>;

    multiply(rhs: MathOperators<Type, ReturnTypes>): MultiplyReturnType;
    multiplyEqual(rhs: MathOperators<Type, ReturnTypes>): MathOperators<Type, ReturnTypes>;

    divide(rhs: MathOperators<Type, ReturnTypes>): DivideReturnType;
    divideEqual(rhs: MathOperators<Type, ReturnTypes>): MathOperators<Type, ReturnTypes>;
}

export interface GenericMathOperatorReturnTypes {
    AddReturnType: Any;
    SubtractReturnType: Any;
    MultipleReturnType: Any;
    DivideReturnType: Any;
}

export type GenericMathOperator<T> = MathOperators<T, GenericMathOperatorReturnTypes>;

export interface ExtendedMathOperators<ExtendedMathOperatorsReturnTypes extends {PowerReturnType: Any, LogReturnType: Any},
        PowerReturnType = ExtendedMathOperatorsReturnTypes['PowerReturnType'],
        LogReturnType = ExtendedMathOperatorsReturnTypes['LogReturnType']> {

    power(x: number): PowerReturnType;

    log(x: number, base: number | Any): LogReturnType;
}

