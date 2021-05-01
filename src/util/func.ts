/**
 * @author     Zamatica
 * @file       func.ts
 */

export type CompareFunc<T> = (lhs: T, rhs: T) => boolean;

export type CompareNumberFunc<T> = (lhs: T, rhs: T) => number;

export type LessThanFunc<T> = (lhs: T, rhs: T) => boolean;

export type GreaterThanFunc<T> = (lhs: T, rhs: T) => boolean;

