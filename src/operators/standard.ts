/**
 * @author     Zamatica
 * @file       standard.ts
 */


export interface StandardOpertors<Type, DataType> {
    clone(): Type;

    toArray(): DataType[];

    concat(...rhs: Type[]): Type;
}

