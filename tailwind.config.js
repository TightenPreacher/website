import DaisyUi from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {},
  },
  purge: {
    enabled: true, // 开启 purge 功能
    mode: 'all', // 清除所有未使用的 CSS，包括未被 @apply 覆盖的 CSS
    preserveHtmlElements: true, // 保留 HTML 元素选择器
    content: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './app.vue',
    ],
  },
  plugins: [
    DaisyUi,
  ],
  daisyui: {
    themes:['light']
  }
}

