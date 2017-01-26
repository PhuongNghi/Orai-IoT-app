// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Import F7
/* eslint-disable no-unused-vars */
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import VueResource from 'vue-resource'

// Import F7 iOS Theme Styles
/* eslint-disable no-unused-vars */
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
//OR for Material Theme:
// import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
// import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
//
import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

// Import App Custom Styles
import AppStyles from './css/app.css'

// Import Routes
import Routes from './routes.js'

import App from './App'

// Init F7 Vue Plugins
Vue.use(Framework7Vue)
Vue.use(VueFire)
Vue.use(VueResource)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 
  framework7: {
    root: '#app',
    material: true,
    routes: Routes
  },
  // Register App Component
  components: {
    app: App
  }
})