/**
 * @author     Zamatica
 * @file       add.ts
 */

import { Any } from '../../../util/object';
import { PrimitiveTypes } from '../../../util/primitives';
import { GenericMathOperator } from '../../../operators/math';


/**
 * Adds two MathOperator supporting objects 
 * @param {GenericMathOperator<T> | PrimitiveTypes}   lhs     Left hand side of the addition operation
 * @param {GenericMathOperator<T> | PrimitiveTypes}   rhs     Right hand side of the addition operation
 * @returns                                                    Result from the addition
 */
export function add<T>(lhs: GenericMathOperator<T> | PrimitiveTypes, rhs: GenericMathOperator<T> | PrimitiveTypes): Any {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as Any) + (rhs as PrimitiveTypes);
    }

    return (lhs as GenericMathOperator<T>).add(rhs as GenericMathOperator<T>);
}

/**
 * Adds to lhs by rhs, two MathOperator objects 
 * @param {GenericMathOperator<T> | PrimitiveTypes}   lhs     Left hand side of the addition operation
 * @param {GenericMathOperator<T> | PrimitiveTypes}   rhs     Right hand side of the addition operation
 * @returns                                                    lhs
 */
export function addEqual<T>(lhs: GenericMathOperator<T> | PrimitiveTypes, rhs: GenericMathOperator<T> | PrimitiveTypes): GenericMathOperator<T> | PrimitiveTypes {
    if (typeof(lhs) === 'string' || typeof(rhs) === 'number') {
        return (lhs as Any) += (rhs as PrimitiveTypes);
    }

    return (lhs as GenericMathOperator<T>).addEqual(rhs as GenericMathOperator<T>);
}

