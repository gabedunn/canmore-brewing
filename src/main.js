import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import * as VueGoogleMaps from 'vue2-google-maps'
import VuePlyr from 'vue-plyr'
import 'plyr/dist/plyr.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './fontAwesome'

Vue.use(VueScrollTo, {
  offset: -72
  // offset: -52
})
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    libraries: 'places'
  }
})
Vue.use(VuePlyr)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
