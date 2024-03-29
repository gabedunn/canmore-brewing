import Vue from 'vue'
import Vuex from 'vuex'

import markers from './assets/js/markers.json'
// import styles from './assets/js/mapStyles'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    markers,
    locatorInfo: {
      open: false,
      id: 0,
      name: '',
      address: '',
      extra: '',
      lat: 0,
      lng: 0
    },
    scaledSize: { width: 36, height: 56, f: 'px', b: 'px' }
    // mapOptions: { styles }
  },
  getters: {
    retail: state => {
      return state.markers.filter(marker => marker.type !== 'eat')
    },
    restaurants: state => {
      return state.markers.filter(marker => marker.type === 'eat')
    }
  },
  mutations: {
    changeLocatorInfo (state, payload) {
      state.locatorInfo = {
        open: state.locatorInfo.open,
        id: payload.id,
        name: payload.name,
        address: payload.address,
        extra: payload.extra,
        lat: payload.lat,
        lng: payload.lng
      }
    },
    changeLocatorStatus (state, payload) {
      state.locatorInfo.open = payload.status
    }
  },
  actions: {}
})
