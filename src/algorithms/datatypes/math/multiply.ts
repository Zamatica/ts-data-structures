/**
 * @author     Zamatica
 * @file       multiply.ts
 */

import { Any } from '../../../util/object';
import { GenericMathOperator } from '../../../operators/math';

export type PrimitiveMultiplyTypes = string | number | Any;

/**
 * Multiplies two MathOperator supporting objects 
 * @param {GenericMathOperator<T> | string | number}   lhs     Left hand side of the multiply operation
 * @param {GenericMathOperator<T> | string | number}   rhs     Right hand side of the multiply operation
 * @returns                                                    Product of multiply
 */
export function multiply<T>(lhs: GenericMathOperator<T> | string | number, rhs: GenericMathOperator<T> | string | number): Any {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as PrimitiveMultiplyTypes) * (rhs as PrimitiveMultiplyTypes);
    }

    return (lhs as GenericMathOperator<T>).multiply(rhs as GenericMathOperator<T>);
}

/**
 * Multiplies lhs by rhs, two MathOperator objects 
 * @param {GenericMathOperator<T> | string | number}   lhs     Left hand side of the multiply operation
 * @param {GenericMathOperator<T> | string | number}   rhs     Right hand side of the multiply operation
 * @returns                                                    lhs
 */
export function multiplyEqual<T>(lhs: GenericMathOperator<T> | string | number, rhs: GenericMathOperator<T> | string | number): Any {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as PrimitiveMultiplyTypes) *= (rhs as PrimitiveMultiplyTypes);
    }

    return (lhs as GenericMathOperator<T>).multiplyEqual(rhs as GenericMathOperator<T>);
}

