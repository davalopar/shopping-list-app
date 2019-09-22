export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // loaders: {
  //   vue: {
  //     transpileOptions: {
  //       transforms: {
  //         templateString: false
  //       }
  //     }
  //   }
  // },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://typescript.nuxtjs.org/guide/setup.html#installation
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Apollo module options
   */
  apollo: {
    // authenticationType: 'Bearer',
    // tokenExpires: 10, // optional, default: 7 (days)
    // errorHandler: '~/apollo/error.handler.js',
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    // required
    clientConfigs: {
      default: '~/apollo/default.config.js'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const vueLoader = config.module.rules.find(
        (rule) => rule.loader === 'vue-loader'
      )
      const originalOptions = vueLoader.options
      vueLoader.options = {
        ...originalOptions,
        transpileOptions: {
          transforms: {
            dangerousTaggedTemplateString: true
          }
        }
      }
    }
  }
}
