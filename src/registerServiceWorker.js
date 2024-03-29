/* eslint-disable no-console */

import { register, unregister } from 'register-service-worker'

/* eslint-disable-next-line */
if (process.env.NODE_ENV === 'production' && false) {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log('App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB')
    },
    registered () {
      console.log('Service worked registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

unregister()
