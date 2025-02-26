import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Aki Fome',
        short_name: 'Aki Fome App',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/aikifomelaranjao.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/aikifomelaranjao.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
