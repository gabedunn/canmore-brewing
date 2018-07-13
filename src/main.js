import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueScrollTo from 'vue-scrollto'
import * as VueGoogleMaps from 'vue2-google-maps'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './fontAwesome'

Vue.use(VueAxios, axios)
Vue.use(VueScrollTo, {
  offset: -72
  // offset: -52
})
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC4iHpC-f-H18btEyAFgBw9tos2cHMpSco',
    libraries: 'places'
  }
})
Vue.use(VuePlyr)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
