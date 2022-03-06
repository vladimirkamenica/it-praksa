/*!

=========================================================
* Nuxt Argon Dashboard Laravel - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nuxt-argon-dashboard-laravel
* Copyright Creative Tim (https://www.creative-tim.com) & UPDIVISION (https://www.updivision.com)

* Coded by www.creative-tim.com & www.binarcode.com & www.updivision.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

const { create }  = require('./util/createSitemap');
console.log("ENV", process.env.NODE_ENV);


module.exports = {
  mode: "universal",
 

  /*
   ** Headers of the page
   */
   router: {
    linkExactActiveClass: "active"
  },
  head: {
    htmlAttrs: { lang: 'sr' },
    title: "It praksa, praksa za programere",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "IT praksa,praksa za programere, it praksa saveti i preporuke,oglasi za it praksu."},
      { hid: 'author', name: 'author', content: 'Esenca software' }, 
      { hid: 'og:image', property: "og:image", content: "/img/brand/logoitpraksa.png"},
      { hid: 'og:description', property: "og:description", content: "IT praksa,praksa za programere, it praksa saveti i preporuke,oglasi za it praksu."},
      { hid:'google-site-verification', name: 'google-site-verification', content: '6McKjsNlkD45lIBuScE03bKbBfbkyMeeEkdtbQMxq9k' },
      { hid:'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'It praksa, praksa za programere' },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", type: "image/png", href: "/apple/favicon.png" },
      { rel: "apple-touch-icon", type: "image/png", href: "/apple/favicon60.png" },
      { rel: "apple-touch-icon", type: "image/png", href: "/apple/favicon72.png" },
      { rel: "apple-touch-icon", type: "image/png", href: "/apple/favicon76.png" },
      { rel: "apple-touch-icon", type: "image/png", href: "/apple/favicon114.png" },
      { rel: "apple-touch-icon", type: "image/png", href: "/apple/favicon120.png" },
      { rel: "apple-touch-icon", type: "image/png", href: "/apple/favicon144.png" },
      { rel: "apple-touch-icon", type: "image/png", href: "/apple/favicon152.png" },
      { rel: "apple-touch-icon", type: "image/png", href: "/apple/favicon180.png" },

      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
      },
      // {
      //   rel: "stylesheet",
      //   href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
      //   integrity:
      //     "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
      //   crossorigin: "anonymous"
      // }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },


  /*
   ** Global CSS
   */
  css: [
    "assets/css/nucleo/css/nucleo.css",
    
    "assets/sass/argon.scss",
    "assets/css/style.css",
    "assets/css/main.css",
    "assets/css/checkbox.min.css",
    'assets/css/quill-editor.css',
    'assets/css/fontawesome.css',
    'assets/css/fontawesome-icons.css',
  ],
  telemetry: false,
  router: {
    /*middleware: ['auth']*/
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/dashboard/dashboard-plugin",
    "~/plugins/dashboard/globalComponents",
    "~/plugins/fontawesome.js",
    { src: '~/plugins/datetime-picker.js', ssr: false }
    // { src: "~/plugins/dashboard/world-map", ssr: false },
 
    // "~/plugins/dashboard/JsonApi.js",
    // "~/plugins/isDemo.js",
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    'cookie-universal-nuxt',
    "@nuxtjs/toast",
    'nuxt-mq',
    'bootstrap-vue/nuxt',  
    'vue2-editor/nuxt',
    '@nuxtjs/google-gtag', 
    'vue-social-sharing/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  'mq': {
    defaultBreakpoint: 'xl',
    breakpoints: {
      iphone_5: 325,
      sm: 450,
      md: 768,
      lg: 992,
      xl: 1300,
      xxl: 1400  
    }
  },
  'google-gtag':{
    id: 'G-414282VP1D', // required
    config:{
      // this are the config options for `gtag
      // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
      anonymize_ip: true, // anonymize IP 
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker:{
        domains:['itpraksa.com']
      }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...)
    // optional you can add more configuration like [AdWords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)
   },
  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true, // Or `bvCSS: false`
    icons: false
  },
  pwa: {
    manifest: {
      lang: 'sr',
    }
  },
  sitemap: {
    hostname: process.env.NODE_ENV !== "production" ? 'https://itpraksa.com/' : 'http://127.0.0.1:3000',
    gzip: true,
    exclude: [
      '/cms/**',
      '/login'
    ],
    routes: async () => {
           return await create();
    },
  },
  robots: {
    UserAgent: '*',
    Disallow: '/cms/',
    Allow: '/',
    Sitemap : process.env.NODE_ENV !== "production" ? 'https://itpraksa.com/sitemap.xml' : 'http://127.0.0.1:3000/sitemap.xml',
  },
  toast: {
    position: "top-right",
    duration: 5000,
    keepOnHover: true,
    fullWidth: false,
    fitToScreen: true,
    className: "vue-toast-custom",
    closeOnSwipe: true,
    register: [
      // Register custom toasts
      // @todo add custom messages as they come : login failed, register failed etc
      {
        name: "my-error",
        message: "Oops...Something went wrong",
        options: {
          type: "error"
        }
      }
    ]
  },

  /*
   ** Axios module configuration
   */
  axios: { 
    baseURL: process.env.NODE_ENV !== "production" ? 'https://itpraksa.com/api' : 'http://127.0.0.1:8000',
  },
  hooks: {  
    'vue-renderer:ssr:context'(context) {
      const routePath = JSON.stringify(context.nuxt.routePath);
      const state = context.nuxt.state;
      context.nuxt = {serverRendered: true, routePath, state};
    },
  },
  /*
   ** Build configuration
   */
   buildModules: [
    '@nuxtjs/moment',
    
    
  ],
 
  moment: {
    defaultLocale: 'sr',
    locales: ['sr']
  },
  build: {
    // transpile: ["vee-validate/dist/rules"],
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
     optimization: {
      splitChunks: {
        chunks: 'async',
      }
    },
    splitChunks: {
      pages: false,
      vendor: false,
      commons: false,
      runtime: false,
      layouts: false
    },
    extend(config, ctx) {},
    extractCSS: true ,
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk"
          }
        ]
      ]
    }
  }
};
