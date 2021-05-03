/**
 * @author     Zamatica
 * @file       division.ts
 */

import { Any } from '../../../util/object';
import { GenericMathOperator } from '../../../operators/math';

export type PrimitiveDivisionTypes = string | number | Any;

/**
 * Divides two MathOperator supporting objects 
 * @param {GenericMathOperator<T> | string | number}   lhs     Left hand side of the division operation, dividend
 * @param {GenericMathOperator<T> | string | number}   rhs     Right hand side of the division operation, divisor
 * @returns                                                    Quotient of division
 */
export function divide<T>(lhs: GenericMathOperator<T> | string | number, rhs: GenericMathOperator<T> | string | number): Any {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as PrimitiveDivisionTypes) / (rhs as PrimitiveDivisionTypes);
    }

    return (lhs as GenericMathOperator<T>).divide(rhs as GenericMathOperator<T>);
}

/**
 * Divides lhs by rhs, two MathOperator objects 
 * @param {GenericMathOperator<T> | string | number}   lhs     Left hand side of the division operation, dividend
 * @param {GenericMathOperator<T> | string | number}   rhs     Right hand side of the division operation, divisor
 * @returns                                                    lhs
 */
export function divideEqual<T>(lhs: GenericMathOperator<T> | string | number, rhs: GenericMathOperator<T> | string | number): Any {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as PrimitiveDivisionTypes) /= (rhs as PrimitiveDivisionTypes);
    }

    return (lhs as GenericMathOperator<T>).divideEqual(rhs as GenericMathOperator<T>);
}

