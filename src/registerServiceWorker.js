/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log('App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB')
    },
    registered (registration) {
      console.log('Service worked registered.')
      console.log(registration)
    },
    cached (registration) {
      console.log('Content has been cached for offline use.')
      console.log(registration)
    },
    updated (registration) {
      console.log('New content is available; please refresh.')
      console.log(registration)
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
