/**
 * @author     Zamatica
 * @file       add.ts
 */

import { Any } from '../../../util/object';
import { GenericMathOperator } from '../../../operators/math';

export type PrimitiveAddTypes = string | number | Any;

/**
 * Adds two MathOperator supporting objects 
 * @param {GenericMathOperator<T> | string | number}   lhs     Left hand side of the addition operation
 * @param {GenericMathOperator<T> | string | number}   rhs     Right hand side of the addition operation
 * @returns                                                    Result from the addition
 */
export function add<T>(lhs: GenericMathOperator<T> | string | number, rhs: GenericMathOperator<T> | string | number): Any {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as PrimitiveAddTypes) + (rhs as PrimitiveAddTypes);
    }

    return (lhs as GenericMathOperator<T>).add(rhs as GenericMathOperator<T>);
}

/**
 * Adds to lhs by rhs, two MathOperator objects 
 * @param {GenericMathOperator<T> | string | number}   lhs     Left hand side of the addition operation
 * @param {GenericMathOperator<T> | string | number}   rhs     Right hand side of the addition operation
 * @returns                                                    lhs
 */
export function addEqual<T>(lhs: GenericMathOperator<T> | string | number, rhs: GenericMathOperator<T> | string | number): Any {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as PrimitiveAddTypes) += (rhs as PrimitiveAddTypes);
    }

    return (lhs as GenericMathOperator<T>).addEqual(rhs as GenericMathOperator<T>);
}

