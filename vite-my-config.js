// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    rollupOptions: {

        external: ['axios'],
        output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
                axios: 'axios',
            },
        },
    },
    build: {

        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'MyLib',
            fileName: 'my-lib-browser',

        }
    },
})