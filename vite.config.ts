import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        proxy: {
            '/api':  {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
            '/auth': {
                target: 'http://localhost:8080/auth',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/auth/, ''),
            }
        }
    },
    base: "/rip_front",
    plugins: [react()],
})
