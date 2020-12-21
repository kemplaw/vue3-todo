import { createApp } from 'vue'
import App from './App'
import router from './router'
import store, { rootStoreKey } from './store'

createApp(App)
  .use(store, rootStoreKey)
  .use(router)
  .mount('#app')
