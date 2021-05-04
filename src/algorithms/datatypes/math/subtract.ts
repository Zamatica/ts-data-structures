/**
 * @author     Zamatica
 * @file       subtract.ts
 */

import { Any } from '../../../util/object';
import { PrimitiveTypes } from '../../../util/primitives';
import { GenericMathOperator } from '../../../operators/math';

/**
 * Subtracts two MathOperator supporting objects 
 * @param {GenericMathOperator<T> | PrimitiveTypes}   lhs     Left hand side of the subtraction operation
 * @param {GenericMathOperator<T> | PrimitiveTypes}   rhs     Right hand side of the subtraction operation
 * @returns                                                    Result from the subtraction
 */
export function subtract<T>(lhs: GenericMathOperator<T> | PrimitiveTypes, rhs: GenericMathOperator<T> | PrimitiveTypes): Any {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as Any) - (rhs as Any);
    }

    return (lhs as GenericMathOperator<T>).subtract(rhs as GenericMathOperator<T>);
}

/**
 * Subtracts from lhs by rhs, two MathOperator objects 
 * @param {GenericMathOperator<T> | PrimitiveTypes}   lhs     Left hand side of the subtraction operation
 * @param {GenericMathOperator<T> | PrimitiveTypes}   rhs     Right hand side of the subtraction operation
 * @returns                                                    lhs
 */
export function subtractEqual<T>(lhs: GenericMathOperator<T> | PrimitiveTypes, rhs: GenericMathOperator<T> | PrimitiveTypes): GenericMathOperator<T> | PrimitiveTypes {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as Any) -= (rhs as Any);
    }

    return (lhs as GenericMathOperator<T>).subtractEqual(rhs as GenericMathOperator<T>);
}

