import { defineNuxtConfig } from 'nuxt/config'
import compression from 'vite-plugin-compression'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    build: {
      assetsInlineLimit: Infinity, 
      // rollupOptions: {
      //   output: {
      //     manualChunks(id) {
      //       if (id.includes('node_modules')) {
      //         return 'vendor'; // 将 node_modules 分离到一个单独的块中
      //       }
      //     }
      //   }
      // }
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