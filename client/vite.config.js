// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    define: {
        __DEV__: process.env.NODE_ENV !== "production",
    },
    server: {
        proxy: {
            '/graphql': 'http://localhost:3001',
        },
    },
})