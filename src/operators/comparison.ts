/**
 * @author     Zamatica
 * @file       comparison.ts
 */

import { GenericMathOperator } from './math';
import { PrimitiveTypes } from '../util/primitives';

export type CompareFunc<T> = (lhs: T, rhs: T) => boolean;

export type CompareNumberFunc<T> = (lhs: T, rhs: T) => number;

export type LessThanFunc<T> = (lhs: T, rhs: T) => boolean;

export type GreaterThanFunc<T> = (lhs: T, rhs: T) => boolean;

export interface LogicalComparisonOperators<Type> {
    isGreaterThan(rhs: LogicalComparisonOperators<Type>): boolean;
    isLessThan(rhs: LogicalComparisonOperators<Type>): boolean;
    equals(rhs: LogicalComparisonOperators<Type>): boolean;
}

export interface NumberComparisonOperators<Type> {
    subtractTest(rhs: NumberComparisonOperators<Type>): number;
}

export type subtractionTestType<T> = (lhs: NumberComparisonOperators<T> | GenericMathOperator<T> | PrimitiveTypes, rhs: NumberComparisonOperators<T> | GenericMathOperator<T> | PrimitiveTypes) => number;

export function subtractionTest<T>(lhs: T | NumberComparisonOperators<T> | GenericMathOperator<T> | PrimitiveTypes, rhs: T | NumberComparisonOperators<T> | GenericMathOperator<T> | PrimitiveTypes): number {
    if (typeof(lhs) === 'string' || typeof(lhs) === 'number' || typeof(lhs) === 'boolean') {
        return (lhs as number) - (rhs as number);
    }

    if ((lhs as NumberComparisonOperators<T>).subtractTest) {
        return (lhs as NumberComparisonOperators<T>).subtractTest(rhs as NumberComparisonOperators<T>);
    }
    else if ((lhs as GenericMathOperator<T>).subtract) {
        return (lhs as GenericMathOperator<T>).subtract(rhs as GenericMathOperator<T>);
    }

    return -1;
}

