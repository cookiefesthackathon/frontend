export default defineAppConfig({
  name: 'Marketplace',
  description: 'Marketplace web application',
  locale: 'ru',

  themeColor: '#FFF',
  breakpoints: {
    'xs': 320,
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    '2xl': 1536,
  },

  apiUrl: 'http://localhost:3000',
})
