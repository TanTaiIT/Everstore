import './style.css'
import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes/routers'
import 'primeicons/primeicons.css'

const app = createApp(App)
const pinia = createPinia(App)
app.config.devtools = true
app.use(pinia)
app.use(router)
app.mount('#app')
