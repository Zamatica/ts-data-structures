/**
 * @author     Zamatica
 * @file       multiply.ts
 */

import { Any } from '../../../util/object';
import { PrimitiveTypes } from '../../../util/primitives';
import { GenericMathOperator } from '../../../operators/math';

/**
 * Multiplies two MathOperator supporting objects 
 * @param {GenericMathOperator<T> | PrimitiveTypes}   lhs     Left hand side of the multiply operation
 * @param {GenericMathOperator<T> | PrimitiveTypes}   rhs     Right hand side of the multiply operation
 * @returns                                                    Product of multiply
 */
export function multiply<T>(lhs: GenericMathOperator<T> | PrimitiveTypes, rhs: GenericMathOperator<T> | PrimitiveTypes): Any {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as Any) * (rhs as Any);
    }

    return (lhs as GenericMathOperator<T>).multiply(rhs as GenericMathOperator<T>);
}

/**
 * Multiplies lhs by rhs, two MathOperator objects 
 * @param {GenericMathOperator<T> | PrimitiveTypes}   lhs     Left hand side of the multiply operation
 * @param {GenericMathOperator<T> | PrimitiveTypes}   rhs     Right hand side of the multiply operation
 * @returns                                                    lhs
 */
export function multiplyEqual<T>(lhs: GenericMathOperator<T> | PrimitiveTypes, rhs: GenericMathOperator<T> | PrimitiveTypes): GenericMathOperator<T> | PrimitiveTypes {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as Any) *= (rhs as Any);
    }

    return (lhs as GenericMathOperator<T>).multiplyEqual(rhs as GenericMathOperator<T>);
}

