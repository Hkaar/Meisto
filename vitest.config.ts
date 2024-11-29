/// <reference types="vitest" />

import { getViteConfig } from "astro/config";
import tsconfigPaths from 'vite-tsconfig-paths';

export default getViteConfig(
    {test: {
        dir: "__tests__/unit",
    }, plugins: [
        tsconfigPaths(),
    ]}, 
    {
        //
    }
);