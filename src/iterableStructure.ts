/**
 * @author     Zamatica
 * @file       iterableStructure.ts
 */

import { Any } from './util/object';
import { CompareFunc, CompareNumberFunc } from './operators/comparison';
import { StandardOpertors } from './operators/standard';

export interface IterableStructure<T> {

    /**
     * Iterator method that allows the user of for..of and for..in
     * @yields {IterableIterator<T>}     value of the Object stored
     */
    [Symbol.iterator](): IterableIterator<T>;

    /**
     * Gets a generator to iterate with .next()
     * @returns {IterableIterator<T>}     Generator to iterate the data in the LinkedList
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


/**
 * ((value: DataType) => Return)  
 * ((value: DataType, index: number) => Return)  
 * ((value: DataType, index: number, thisArg: Type) => Return);
 */
export type IterableAlgorithmsFunction<Type, DataType, Return> = ((value: DataType) => Return) | 
                                                                 ((value: DataType, index: number) => Return) |
                                                                 ((value: DataType, index: number, thisArg: Type) => Return);
                                                                 
/**
 * ((value: DataType) => void)  
 * ((value: DataType, index: number) => void)  
 * ((value: DataType, index: number, thisArg: Type) => void);
 */
export type IterableAlgorithmsEachFunction<Type, DataType> =  IterableAlgorithmsFunction<Type, DataType, void>;

/**
 * ((value: DataType) => boolean) |  
 * ((value: DataType, index: number) => boolean) |  
 * ((value: DataType, index: number, thisArg: Type) => boolean);
 */
export type IterableAlgorithmsFindFunction<Type, DataType> = IterableAlgorithmsFunction<Type, DataType, boolean>;

export interface IterableAlgorithmsStructure<Type, DataType> extends IterableStructure<DataType>, StandardOpertors<Type, DataType> {
    has(value: DataType, fn: CompareFunc<DataType>): boolean;
    
    sort(fn: CompareNumberFunc<DataType>): Type;

    find(fn: IterableAlgorithmsFindFunction<Type, DataType>): DataType | undefined;

    each(fn: IterableAlgorithmsEachFunction<Type, DataType>, thisArg: Type | undefined): void;
}

