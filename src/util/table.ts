/**
 * @author     Zamatica
 * @file       table.ts
 */

/**
 * Interface Wrapper around {} to denote hashtable indexing
 */
export interface Table<T> { [key: string]: T }

/**
  * Interface Wrapper around {} to denote hashtable indexing with numbers
  */
export interface NumberTable<T> { [key: number]: T }
 
 