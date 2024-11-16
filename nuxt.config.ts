import { defineNuxtConfig } from 'nuxt/config'
import compression from 'vite-plugin-compression'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    build: {
      assetsInlineLimit: 4096, 
      rollupOptions: {
        output: {
          chunkFileNames: 'static/chunks/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        },
        // 启用拆分块的优化
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      },
    },
    plugins: [compression()],
  },

  css: [
    '~/assets/css/main.css'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  devServer:{
    host: '0.0.0.0',
    port: 3000
  },
  vite:{
    build:{
      assetsInlineLimit: Infinity
    }
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  ssr: false,
  
  compatibilityDate: '2024-08-07'
})