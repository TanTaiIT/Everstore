import './style.scss'
import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes/routers'
import 'primeicons/primeicons.css'
import Modal from './components/Modal/Modal.vue'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import Toasttify from './plugins/Toastify.js'
import Directive from './plugins/Directive.js'
import "vue-awesome-paginate/dist/style.css";
import VueAwesomePaginate from "vue-awesome-paginate"

const app = createApp(App)
const pinia = createPinia(App)
app.config.devtools = true
app.component('Modal', Modal)
app.use(pinia)
app.use(router)
app.use(Directive)
app.use(Toasttify)
app.use(VueAwesomePaginate)
app.mount('#app')
