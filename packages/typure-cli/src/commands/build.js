import { build as viteBuild } from "vite";
import { remove } from 'fs-extra';
import { execa } from 'execa';
import path from 'path';
import { createSpinner } from 'nanospinner';
export async function buildTask(option) {
    const start = Date.now();
    const spinner = createSpinner().start();
    const __dirname = process.cwd();
    try {
        await remove(path.resolve(__dirname, 'dist'));
        await viteBuild({
            root: __dirname,
            configFile: './vite.config.ts'
        });
        await execa('tsc');
        const end = Date.now();
        spinner.success({
            text: `build done in ${(end - start) / 1000}s.`
        });
    }
    catch (error) {
        spinner.error({ text: 'build failed' });
        throw error;
    }
}
export async function build(option) {
    try {
        await buildTask(option);
    }
    catch (error) {
        console.log(error);
    }
}
