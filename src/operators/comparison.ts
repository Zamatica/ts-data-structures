/**
 * @author     Zamatica
 * @file       comparison.ts
 */

import { AboveSameBelow } from '../util/number';


export type CompareFunc<T> = (lhs: T, rhs: T) => boolean;

export type CompareNumberFunc<T> = (lhs: T, rhs: T) => number;

export type LessThanFunc<T> = (lhs: T, rhs: T) => boolean;

export type GreaterThanFunc<T> = (lhs: T, rhs: T) => boolean;

export interface LogicalComparisonOperators<Type> {
    isGreaterThan(rhs: Type): boolean;
    isLessThan(rhs: Type): boolean;
    equals(rhs: Type): boolean;
}

export interface NumberComparisonOperators<Type> {
    subtractTest(rhs: Type): AboveSameBelow;
}

