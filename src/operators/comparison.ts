/**
 * @author     Zamatica
 * @file       comparison.ts
 */

export interface ComparisonOperators<Type> {
    isGreaterThan(rhs: Type): boolean;
    isLessThan(rhs: Type): boolean;
    equals(rhs: Type): boolean;
}

