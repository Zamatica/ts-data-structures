/**
 * @author     Zamatica
 * @file       division.ts
 */

import { Any } from '../../../util/object';
import { PrimitiveTypes } from '../../../util/primitives';
import { GenericMathOperator } from '../../../operators/math';

/**
 * Divides two MathOperator supporting objects 
 * @param {GenericMathOperator<T> | PrimitiveTypes}   lhs     Left hand side of the division operation, dividend
 * @param {GenericMathOperator<T> | PrimitiveTypes}   rhs     Right hand side of the division operation, divisor
 * @returns                                                    Quotient of division
 */
export function divide<T>(lhs: GenericMathOperator<T> | PrimitiveTypes, rhs: GenericMathOperator<T> | PrimitiveTypes): GenericMathOperator<T> | PrimitiveTypes {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as Any) / (rhs as Any);
    }

    return (lhs as GenericMathOperator<T>).divide(rhs as GenericMathOperator<T>);
}

/**
 * Divides lhs by rhs, two MathOperator objects 
 * @param {GenericMathOperator<T> | PrimitiveTypes}   lhs     Left hand side of the division operation, dividend
 * @param {GenericMathOperator<T> | PrimitiveTypes}   rhs     Right hand side of the division operation, divisor
 * @returns                                                    lhs
 */
export function divideEqual<T>(lhs: GenericMathOperator<T> | PrimitiveTypes, rhs: GenericMathOperator<T> | PrimitiveTypes): GenericMathOperator<T> | PrimitiveTypes {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as Any) /= (rhs as Any);
    }

    return (lhs as GenericMathOperator<T>).divideEqual(rhs as GenericMathOperator<T>);
}

