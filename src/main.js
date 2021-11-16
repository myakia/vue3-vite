import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// import "babel-polyfill";
import './assets/css/reset.css'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'

console.log(import.meta.env, '!!!')

let app = createApp(App)
app.use(router)
app.use(Vant)


app.mount('#app')
