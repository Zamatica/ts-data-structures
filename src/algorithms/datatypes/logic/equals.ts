/**
 * @author     Zamatica
 * @file       datatypes/equals.ts
 */

import { PrimitiveTypes } from '../../../util/primitives';
import { LogicalComparisonOperators } from '../../../operators/comparison';
import { CompareFunc } from '../../../operators/comparison';

export type EqualsFunctionType<T> = CompareFunc<LogicalComparisonOperators<T> | PrimitiveTypes>;

export function equals<T>(lhs: LogicalComparisonOperators<T> | PrimitiveTypes, rhs: LogicalComparisonOperators<T> | PrimitiveTypes): boolean {
    if (typeof(lhs) === 'string' || typeof(lhs) === 'number' || typeof(lhs) === 'boolean') {
        return (lhs as PrimitiveTypes) === (rhs as PrimitiveTypes);
    }

    return (lhs as LogicalComparisonOperators<T>).equals(rhs as LogicalComparisonOperators<T>);
}

