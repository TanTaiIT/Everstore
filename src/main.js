import './style.css'
import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes/routers'
import 'primeicons/primeicons.css'

const pinia = createPinia(App)
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
