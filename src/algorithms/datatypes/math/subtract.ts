/**
 * @author     Zamatica
 * @file       subtract.ts
 */

import { Any } from '../../../util/object';
import { GenericMathOperator } from '../../../operators/math';

export type PrimitiveSubTypes = string | number | Any;

/**
 * Subtracts two MathOperator supporting objects 
 * @param {GenericMathOperator<T> | string | number}   lhs     Left hand side of the subtraction operation
 * @param {GenericMathOperator<T> | string | number}   rhs     Right hand side of the subtraction operation
 * @returns                                                    Result from the subtraction
 */
export function subtract<T>(lhs: GenericMathOperator<T> | string | number, rhs: GenericMathOperator<T> | string | number): Any {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as PrimitiveSubTypes) - (rhs as PrimitiveSubTypes);
    }

    return (lhs as GenericMathOperator<T>).subtract(rhs as GenericMathOperator<T>);
}

/**
 * Subtracts from lhs by rhs, two MathOperator objects 
 * @param {GenericMathOperator<T> | string | number}   lhs     Left hand side of the subtraction operation
 * @param {GenericMathOperator<T> | string | number}   rhs     Right hand side of the subtraction operation
 * @returns                                                    lhs
 */
export function subtractEqual<T>(lhs: GenericMathOperator<T> | string | number, rhs: GenericMathOperator<T> | string | number): Any {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as PrimitiveSubTypes) -= (rhs as PrimitiveSubTypes);
    }

    return (lhs as GenericMathOperator<T>).subtractEqual(rhs as GenericMathOperator<T>);
}

