import {
    defineConfig
} from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    define: {
        'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL || 'https://apartment-by-bondepart.vercel.app'),
    },
    // server: {
    //     https: true,
    // }
});
