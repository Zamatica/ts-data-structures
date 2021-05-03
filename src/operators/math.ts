/**
 * @author     Zamatica
 * @file       math.ts
 */

import { Any } from '../util/object';

export interface MathOperators<Type,
    OperationReturnType extends {
            AddReturnType: Any,
            SubtractReturnType: Any,
            MultipleReturnType: Any,
            DivideReturnType: Any
    },
        AddReturnType      = OperationReturnType['AddReturnType'],
        SubtractReturnType = OperationReturnType['SubtractReturnType'],
        MultiplyReturnType = OperationReturnType['MultipleReturnType'],
        DivideReturnType   = OperationReturnType['DivideReturnType']> {

    add(rhs: Type): AddReturnType;
    addEqual(rhs: Type): Type;

    subtract(rhs: Type): SubtractReturnType;
    subtractEqual(rhs: Type): Type;

    multiply(rhs: Type): MultiplyReturnType;
    multiplyEqual(rhs: Type): Type;

    divide(rhs: Type): DivideReturnType;
    divideEqual(rhs: Type): Type;
}

export interface ExtendedMathOperators<ExtendedMathOperatorsReturnTypes extends {PowerReturnType: Any, LogReturnType: Any},
        PowerReturnType = ExtendedMathOperatorsReturnTypes['PowerReturnType'],
        LogReturnType = ExtendedMathOperatorsReturnTypes['LogReturnType']> {

    power(x: number): PowerReturnType;

    log(x: number, base: number | Any): LogReturnType;
}

