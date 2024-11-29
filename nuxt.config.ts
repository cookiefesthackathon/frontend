import path from 'path'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts'],
  $production: {
    nitro: {
      preset: 'cloudflare-pages-static',
    },
  },
  ssr: false,
  components: [
    {
      path: '@app/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'transition-page', mode: 'out-in' },
  },
  css: ['@app/assets/styles/global.scss'],
  alias: {
    '@app': path.resolve(__dirname, 'app'),
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-01',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    defaults: {
      weights: [400, 500, 700],
      subsets: [
        'cyrillic-ext',
        'cyrillic',
        'latin-ext',
        'latin',
      ],
    },
    experimental: {
      processCSSVariables: true,
    },
  },
})
