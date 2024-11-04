import './style.scss'
import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes/routers'
import 'primeicons/primeicons.css'
import Modal from './components/Modal/Modal.vue'

//Directive
import Directive from './plugins/Directive.js'

const app = createApp(App)
const pinia = createPinia(App)
app.config.devtools = true
app.component('Modal', Modal)
app.use(pinia)
app.use(router)
app.use(Directive)
app.mount('#app')
