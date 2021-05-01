/**
 * @author     Zamatica
 * @file       test_list.ts
 */

import { LinkedList } from '../../src/list';


function fill_list(list: LinkedList<number>): void {
    for (let i = 0; i < 20; i++) {
        list.push(i * i);
    }
}


function test_push(list: LinkedList<number>): boolean {
    list.push(1)

    if (list.first() !== 1) {
        return false;
    }

    list.pushFront(2);

    if (list.first() !== 2 || list.last() !== 1) {
        return false;
    }

    list.push(4);

    if (list.first() !== 2 || list.last() !== 4) {
        return false;
    }

    return true;
}

function test_each(list: LinkedList<number>): boolean {
    fill_list(list);

    let result: boolean = true;
    list.each(function (val, i) {
        if (val !== (i * i)) {
            result = false;
        }
    });

    return result;
}

function test_arrayConstructor(_: LinkedList<number>): boolean {
    const arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const list = new LinkedList<number>(arr);

    list.each(function(value, i) {
        if (value !== arr[i]) {
            return false;
        }
    });

    return true;
}

function test_pop(list: LinkedList<number>): boolean {
    fill_list(list);

    let i_check: number = 19;

    let value: number | null;

    while ((value = list.pop()) !== null) {
        if (value !== (i_check * i_check)) {
            return false;
        }

        --i_check;
    }

    return true;
}

function test_popFront(list: LinkedList<number>): boolean {
    fill_list(list);

    let i_check: number = 0;

    let value: number | null;

    while ((value = list.popFront()) !== null) {
        if (value !== (i_check * i_check)) {
            return false;
        }

        ++i_check;
    }

    return true;
}

function test_has(list: LinkedList<number>): boolean {
    fill_list(list);

    for (let i = 0; i < 20; ++i) {
        if (list.has(i * i) === false) {
            return false;
        }
    }

    function alt_compare(rhs: number, lhs: number): boolean {
        return (rhs - lhs) === 0;
    }

    for (let i = 0; i < 20; ++i) {
        if (list.has(i * i, alt_compare) === false) {
            return false;
        }
    }

    return true;
}

function test_toArray(list: LinkedList<number>): boolean {
    fill_list(list);

    const other: number[] = list.toArray();

    if (list.length !== other.length) {
        return false;
    }

    list.each(function(val, i) {
        if (val !== other[i]) {
            return false;
        }
    });

    return true;
}

function test_clone(list: LinkedList<number>): boolean {
    fill_list(list);

    const other: LinkedList<number> = list.clone();

    let result: boolean = true;
    other.each(function (val, i) {
        if (val !== (i * i)) {
            result = false;
        }
    });

    return result;
}

function test_equals(list: LinkedList<number>): boolean {
    let other: LinkedList<number> = new LinkedList<number>();

    fill_list(other);
    fill_list(list);

    if (list.equals(other) === false) {
        return false;
    }

    other.clear();
    other = list.clone();

    if (list.equals(other) === false) {
        return false;
    }

    return true;
}

function test_concat(list: LinkedList<number>): boolean {
    fill_list(list);
    const other_20_30: LinkedList<number> = new LinkedList<number>();
    const other_30_40: LinkedList<number> = new LinkedList<number>();

    for (let i = 20; i < 30; i++) {
        other_20_30.push(i * i);
    }

    for (let i = 30; i < 40; i++) {
        other_30_40.push(i * i);
    }

    const final: LinkedList<number> = list.concat(other_20_30, other_30_40);

    if (final.length !== 40) {
        return false;
    }

    let result: boolean = true;
    final.each(function (val, i) {
        if (val !== i * i) {
            result = false;
        }
    });

    return result;
}

function test_sort(): boolean {
    const arr: number[] = [5, 3, 6, 0, 4, 2, 9, 10, 8, 7, 1, 11];
    const list: LinkedList<number> = new LinkedList<number>(arr);

    list.sort(function (lhs, rhs) { return lhs - rhs });

    const iterator = list.iterator();

    for (let i = 0; i < arr.length; ++i) {
        const val: number = iterator.next().value;

        if (val !== i) {
            return false;
        }
    }

    return true;
}

function test_find(list: LinkedList<number>): boolean {
    fill_list(list);

    const value: number | undefined = list.find(function (val): boolean {
        if (val > 360) {
            return true;
        }

        return false;
    });

    if (value !== 19 * 19) {
        return false;
    }

    return true;
}

function test_filter(list: LinkedList<number>): boolean {
    fill_list(list);

    const filtered_list: LinkedList<number> = list.filter(function (value): boolean {
        if (value < 6 * 6) {
            return true;
        }

        return false;
    });

    if (filtered_list.length !== 6) {
        return false;
    }

    const iterator = list.iterator();

    for (let i = 0; i < filtered_list.length; ++i) {
        const val: number = iterator.next().value;

        if (val !== i * i) {
            return false;
        }
    }

    return true;
}

function test_reduce(list: LinkedList<number>): boolean {
    fill_list(list);

    let sum: number = list.reduce(function (acc, val) {
        return acc + val;
    });

    // sum([0^2...19^2]) = 2470
    if (sum !== 2470) {
        return false;
    }

    sum = list.reduce(function (acc, val) {
        return acc + val;
    }, 20);

    // sum([0^2...19^2]) + 20 = 2490
    if (sum !== 2490) {
        return false;
    }

    return true;
}

function test_values(list: LinkedList<number>): boolean {
    fill_list(list);

    let i = 0;
    for (const data of list) {
        if (data !== i * i) {
            return false;
        }
        ++i;
    }

    return true;
}

export default function(): boolean {
    const list: LinkedList<number> = new LinkedList<number>();

    const test_funcs: ((list: LinkedList<number>) => boolean)[] = [
        test_push,
        test_each,
        test_arrayConstructor,
        test_pop,
        test_popFront,
        test_has,
        test_toArray,
        test_clone,
        test_equals,
        test_concat,
        test_sort,
        test_find,
        test_filter,
        test_reduce,
        test_values
    ];

    for (const func of test_funcs) {
        process.stdout.write('   [LINKEDLIST] Running: ' + func.name + '...');
        if (func(list) === false) {
            console.log('failed.');
            return false
        }
        console.log('passed');

        list.clear();
    }
    
    return true;
}

