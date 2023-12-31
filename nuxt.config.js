export default {
  target: 'static',
  head: {
    title: 'apptest',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [ 
    '@nuxtjs/tailwindcss',
  ],
  ssr: false,
  modules: ['@nuxt/http'],
  router: {
    base: "/apptest/"
  },
  build: {
  }
}



