/**
 * @author     Zamatica
 * @file       opereators.ts
 */

import { Any } from '../util/object';
 

export interface LogicOperators {
    not(): Any;

    equal(): this;
}

