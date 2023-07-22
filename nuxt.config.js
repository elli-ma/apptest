export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
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
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'comment-detail',
        path: '/comments/:id',
        component: '@/pages/CommentDetailPage.vue',
      });
    },
  },

  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [ 
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxt/http'],
  build: {
  }
}



