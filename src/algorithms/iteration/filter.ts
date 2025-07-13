/**
 * @author     Zamatica
 * @file       iteration/filter.ts
 */

import { IterableAlgorithmsStructure, IterableAlgorithmsFunction } from '../../iterableStructure';


/**
 * (value: DataTyep)  
 * (value: DataTyep, index: number)  
 * (value: DataTyep, index: number, thisArg: Type) 
 */
export type IterableAlgorithmsFilterFunction<Type, DataType> = IterableAlgorithmsFunction<Type, DataType, boolean>;

/**
 * Modifies Filters the List based on a conditional function; Θ(n)
 * @param {Callback}                          fn           Callback for filtering each object
 * @param {IterableAlgorithmsStructure<T>}    thisArg      The object to work on 
 * @returns {IterableAlgorithmsStructure<T>}               IterableStructure of all objects matching the condition
 */
export function filter<Type, DataType>(iterator: IterableIterator<Type>, thisArg: IterableAlgorithmsStructure<Type, DataType>, fn: IterableAlgorithmsFilterFunction<Type, DataType>): IterableAlgorithmsStructure<Type, DataType> {
    for (const [data, i] of thisArg.entries()) {
        if (fn(data, i, thisArg) === true) {
            filtered_list.push(data);
        }
    }

    return filtered_list;
}

