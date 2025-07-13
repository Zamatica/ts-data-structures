/**
 * @author     Zamatica
 * @file       iteration/each.ts
 */

import { IterableStructure } from '../../iterableStructure';

export function each<Type extends IterableStructure<DataType>, DataType>(thisArg: IterableStructure<DataType>, fn: (value: DataType, index: number, thisArg: Type | undefined) => void): void {
    for (const [data, i] of thisArg.entries()) {
        fn(data, i, (thisArg as Type));
    }
}

