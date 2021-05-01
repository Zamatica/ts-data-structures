/**
 * @author     Zamatica
 * @file       list.ts
 */

import { Any } from "./util/object";
import { CompareFunc, CompareNumberFunc } from "./util/func";


/**
 * Node Container for a List
 */
export interface ListNode<T> {
    /**
     * Object stored in the node
     */
    data: T;

    /**
     * Ref to next node in list, if it exist
     */
    next: ListNode<T> | null;
}


/**
 * Linked List Implementation
 */
export class LinkedList<T> {

    /**
     * Creates a node for the List
     * @param                  {T}   data      The object to store in the node
     * @param {ListNode<T> | null}   next      Pointer to the next node
     * @returns                                Node created from the data
     */
    static createNode<T>(data: T): ListNode<T> {
        return { data, next: null }
    }

    /**
     * First node of the list
     */
    private head: ListNode<T> | null;
    first(): T | null { return this.head === null ? null : this.head.data; }

    /**
     * Last node of the list
     */
    private tail: ListNode<T> | null;
    last(): T | null { return this.tail === null ? null : this.tail.data}

    /**
     * Length of the List
     */
    private _length: number;
    get length(): number { return this._length; }

    /**
     * @param {T[] | undefined}   initData      Array of initial values to create a List from
     */
    constructor(initData: T[] | undefined = undefined) {
        this.head = null;

        this.tail = null;

        this._length = 0;

        if (initData !== undefined) {
            for (const item of initData) {
                this.push(item);
            }
        }
    }

    /**
     * Appends an object to the list; O(1)
     * @param {T}   data      Object to Appends to the list
     */
    push(data: T): void {
        const new_tail: ListNode<T> = LinkedList.createNode(data);
        
        if (this.tail === null) {
            this.tail = new_tail;

            this.head = new_tail;
        }
        else {
            this.tail.next = new_tail;

            this.tail = new_tail;
        }
        ++this._length;
    }

    /**
     * Prepends an object to the list; O(1)
     * @param {T}   data      Object to prepend to the list
     */
    pushFront(data: T):  void {
        const new_head: ListNode<T> = LinkedList.createNode(data);
        new_head.next = this.head;

        this.head = new_head;

        if (this.tail === null) {
            this.tail = this.head;
        }
        ++this._length;
    }

    /**
     * Removes the last node of the list, returns the Object stored; O(1)
     * @returns {T | null}     Object from the tail node, if it exist
     */
    pop(): T | null {
        return this.removeNode(this.tail);
    }

    /**
     * Removes the first node of the list, returns the Object stored; O(1)
     * @returns {T | null}     Object from the head node, if it exist
     */
    popFront(): T | null {
        return this.removeNode(this.head);
    }

    /**
     * Checks if a value is stored in the list; O(n)
     * @param {T}   value     The object to check for in the list
     * @returns 
     */
    has(value: T, fn: CompareFunc<T> | undefined = undefined): boolean {
        const compare_func = fn || function (lhs, rhs) {
            return lhs === rhs;
        }

        for (const data of this) {
            if (compare_func(data, value)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Clears all items in the list; O(1)
     */
    clear(): void {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }

    /**
     * Shallow copies this list; O(n)
     * @returns {LinkedList<T>}     The new LinkedList cloned from the first
     */
    clone(): LinkedList<T> {
        return new LinkedList<T>(this.toArray());
    }

    /**
     * Builds an array from the items in the list; O(n)
     * @returns {T[]}     Shallow Copied Array from this list
     */
    toArray(): T[] {
        const result: T[] = [];
        for (const data of this) {
            result.push(data);
        }
        return result;
    }

    /**
     * Compares the contents of two LinkedList; Θ(n)
     * @param {LinkedList<T>}                other       The LinkedList to compare to
     * @param {CompareFunc<T> | undefined}   compare     A custom compare function for objects, returns a boolean
     * @returns                                          Whether the two list's items are equal
     */
    equals(other: LinkedList<T>, compare: CompareFunc<T> | undefined = undefined): boolean {
        if (other._length !== this._length) {
            return false;
        }

        let node: ListNode<T> | null = this.head;
        let other_node: ListNode<T> | null = other.head;

        const compare_func = compare || function (lhs: T, rhs: T) { 
            return lhs === rhs;
        }

        while (node !== null && other_node !== null) {
            if (compare_func(node.data, other_node.data) === false) {
                return false;
            }

            node = node.next;
            other_node = other_node.next;
        }

        return true;
    }

    /**
     * Concats two LinkedList via shallow copy; Θ(other.length + this.length)
     * @param {...LinkedList<T>[]}   lists     The list to append to this
     * @returns                                A new shallow copied LinkedList containing the two list
     */
    concat(...lists: LinkedList<T>[]): LinkedList<T> {
        const final_list: LinkedList<T> = this.clone();

        for (const other of lists) {
            for (const data of other) {
                final_list.push(data);
            }
        }

        return final_list;
    }

    /**
     * Sorts the List, modifying the order; O(n*log(n)) for large arrays, O(n^2) for small
     * @param {CompareNumberFunc<T> | undefined}   fn     Comparison function for Array.sort
     * @returns                                           this
     */
    sort(fn: CompareNumberFunc<T> | undefined = undefined): LinkedList<T> {
        const sorted_arr = this.toArray().sort(fn);

        let node: ListNode<T> | null =  this.head;
        let index: number = 0;

        while (node !== null) {
            node.data = sorted_arr[index];
            
            node = node.next;
            ++index;
        }

        return this;
    }

    /**
     * Finds a value in the LinkedList; O(n)
     * @param {Callback}                    fn           Callback for finding an object
     * @param {LinkedList<T> | undefined}   thisArg      The object to work on
     * @returns {T | undefined}                          Matching data from the List, or undefined if nothing matches
     */
    find(fn: (value: T, index: number | undefined, thisArg: LinkedList<T> | undefined) => boolean, thisArg: LinkedList<T> | undefined = undefined): T | undefined {
        if (thisArg !== undefined) {
            fn = fn.bind(thisArg);
        }

        for (const [data, i] of this.entries()) {
            if (fn(data, i, this) === true) {
                return data;
            }
        }

        return undefined;
    }

    /**
     * Filters the List based on a conditional function; Θ(n)
     * @param {Callback}                    fn           Callback for filtering each object
     * @param {LinkedList<T> | undefined}   thisArg      The object to work on 
     * @returns {LinkedList<T>}                          LinkedList of all objects matching the condition
     */
    filter(fn: (value: T, index: number | undefined, thisArg: LinkedList<T> | undefined) => boolean, thisArg: LinkedList<T> | undefined = undefined): LinkedList<T> {
        const filtered_list: LinkedList<T> = new LinkedList<T>();
        
        if (thisArg !== undefined) {
            fn = fn.bind(thisArg);
        }

        for (const [data, i] of this.entries()) {
            if (fn(data, i, this) === true) {
                filtered_list.push(data);
            }
        }

        return filtered_list;
    }

    /**
     * Iterates over each object and passes to a function; Θ(n)
     * @param {Callback}                    fn           Callback for each object
     * @param {LinkedList<T> | undefined}   thisArg      The object to work on 
     */
    each(fn: (value: T, index: number, thisArg: LinkedList<T> | undefined) => void, thisArg: LinkedList<T> | undefined = undefined): void {
        if (thisArg !== undefined) {
            fn = fn.bind(thisArg);
        }

        for (const [data, i] of this.entries()) {
            fn(data, i, this);
        }
    }

    /**
     * Reduces the LinkedList based on some operation to one value; Θ(n)
     * @param {Callback}          fn               The operation to reduce the List by
     * @param {any | undefined}   initialValue     The  initialValue of the accumulating value
     * @returns                                  The result of the reduction
     */
    reduce(fn: (accumulator: T, currentvalue: T, index: number | undefined, thisArg: LinkedList<T> | undefined) => Any, initialValue: Any | undefined = undefined): Any {
        let accumulator: Any | undefined = initialValue;

        let i = 0;
        for (const data of this) {
            if (accumulator === undefined) {
                accumulator = data;
                continue;
            }

            accumulator = fn(accumulator, data, i, this);
            ++i;
        }

        return accumulator;
    }

    // --------------- INTERFACE --------------- //

    /**
     * Iterator method that allows the user of for..of and for..in
     * @yields {[T, number]}     [value of the node, index of the node]
     */
    *[Symbol.iterator](): Generator<T, Any, Any> {
        let temp: ListNode<T> | null = this.head;

        while (temp !== null) {
            yield temp.data;

            temp = temp.next;
        }
    }

    /**
     * Gets a generator to iterate with .next()
     * @returns {Generator<T, Any, Any>}     Generator to iterate the data in the LinkedList
     */
    iterator(): Generator<T, Any, Any> {
        return this[Symbol.iterator]();
    }

    /**
     * Gets an array of the objects stored in the List
     * @returns {T[]}     Arry of the values stored in the list
     */
    values(): T[] {
        return this.toArray();
    }

    /**
     * Iterates over the List with the index of the node
     * @returns {Generator<[T, number], Any, Any>}     A generator for [value, index] iteration
     */
    *entries(): Generator<[T, number], Any, Any> {
        let temp: ListNode<T> | null = this.head;

        let index = 0;
        while (temp !== null) {
            yield [temp.data, index];

            temp = temp.next;
            ++index;
        }
    }

    // --------------- PRIVATE --------------- //

    /**
     * Removes a node from the list
     * @param {ListNode<T> | null}   ref     Reference to remove from the List
     * @returns                              The object stored in the removed node
     */
    private removeNode(ref: ListNode<T> | null): T | null {
        if (ref === null) {
            return null;
        }

        let temp: ListNode<T> | null = this.head;
        let prev: ListNode<T> | null = null;
        let data: T | null = null;
        
        while (temp !== null) {
            if (ref === temp) {
                if (prev === null) {
                    data = temp.data;
                    this.head = temp.next;
                }
                else {
                    data = temp.data;
                    prev.next = temp.next;

                    if (prev.next === null) {
                        this.tail = prev;
                    }
                }

                --this._length;

                break;
            }

            prev = temp;
            temp = temp.next;
        }

        return data;
    }
}

