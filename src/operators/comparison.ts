/**
 * @author     Zamatica
 * @file       comparison.ts
 */

import { Any } from '../util/object';
import { AboveSameBelow } from '../util/number';
import { GenericMathOperator } from './math';

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
    subtractTest(rhs: NumberComparisonOperators<Type>): AboveSameBelow;
}



export function subtractionTest<T>(lhs: T, rhs: T): Any {
    const type_checks: Any = lhs;
    if ((type_checks as NumberComparisonOperators<T>).subtractTest) {
        return (type_checks as NumberComparisonOperators<T>).subtractTest(rhs);
    }
    else if ((type_checks as GenericMathOperator<T>).subtract) {
        return (type_checks as GenericMathOperator<T>).subtract((rhs as Any) as GenericMathOperator<T>);
    }

    return (lhs as Any) - (rhs as Any);
}

