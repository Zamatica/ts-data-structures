/**
 * @author     Zamatica
 * @file       iterableStructure.ts
 */

import { Any } from './util/object';
import { CompareFunc, CompareNumberFunc } from './operators/comparison';

export interface IterableStructure<T> {

    /**
     * Iterator method that allows the user of for..of and for..in
     * @yields {T}     value of the Object stored
     */
    [Symbol.iterator](): IterableIterator<T>;

    /**
     * Gets a generator to iterate with .next()
     * @returns {Generator<T, Any, Any>}     Generator to iterate the data in the LinkedList
     */
    iterator(): IterableIterator<T>;

    /**
     * Gets an array of the objects stored in the Structure
     * @returns {T[]}     Arry of the values stored in the list
     */
    values(): T[];

    /**
     * Iterates over the Structure with a possible index value
     * @returns {IterableIterator<[T, U=number]>}     A generator for [value, index] iteration
     */
    entries(): IterableIterator<[T, Any]>;
}


export type IterableAlgorithmsEachFunction<Type, DataType> = (value: DataType, index: number, thisArg: Type | undefined) => void;

export type IterableAlgorithmsFindFunction<Type, DataType> = (value: DataType, index: number, thisArg: Type | undefined) => boolean;

export interface IterableAlgorithmsStructure<Type, DataType> extends IterableStructure<DataType> {
    has(value: DataType, fn: CompareFunc<DataType>): boolean;
    
    sort(fn: CompareNumberFunc<DataType>): Type;

    find(fn: IterableAlgorithmsFindFunction<Type, DataType>): DataType | undefined;

    each(fn: IterableAlgorithmsEachFunction<Type, DataType>, thisArg: Type | undefined): void;
}

