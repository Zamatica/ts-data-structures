/**
 * @author     Zamatica
 * @file       index.ts
 */


import { readdirSync } from 'fs';

const TEST_DIRECTORY: string = __dirname + '/tests';

async function main() {
    const test_files = readdirSync(TEST_DIRECTORY).filter(file => file.endsWith('.js'));

    for (const file of test_files) {
        console.log('[TEST] Running: ' + file + ' -- ');
        try {
            const module = await import('./tests/' + file);
            const test = module.default();

            if (test === false) {
                console.log('   -- failed.');
                return;
            }
            else {
                console.log('   -- passed.');
            }
        }
        catch (e) {
            console.error(e);
        }
    }
}

main();

