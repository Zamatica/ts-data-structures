/**
 * @author     Zamatica
 * @file       iteration/equals.ts
 */

import { IterableStructure } from '../../../iterableStructure';
import { LogicalComparisonOperators } from '../../../operators/comparison';
import { PrimitiveTypes } from '../../../util/primitives';
import { equals as dataTypeEquals, EqualsFunctionType } from '../../datatypes/logic/equals';

export function equals<T extends LogicalComparisonOperators<T> | PrimitiveTypes>(lhs: IterableStructure<T>, rhs: IterableStructure<T>, fn: EqualsFunctionType<T> | undefined = undefined): boolean {
    const lhs_iterator: IterableIterator<T> = lhs.iterator();
    const rhs_iterator: IterableIterator<T> = rhs.iterator();

    const compare = fn || dataTypeEquals;

    let lhs_value = lhs_iterator.next();
    let rhs_value = rhs_iterator.next();

    while (lhs_value.done !== true && rhs_value.done !== true) {
        if (compare(lhs_value.value, rhs_value.value) === false) {
            return false;
        }

        lhs_value = lhs_iterator.next();
        rhs_value = rhs_iterator.next();
    }

    if (lhs_value.done !== rhs_value.done) {
        return false;
    }

    return true;
}

