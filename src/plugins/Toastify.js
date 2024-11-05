import { useToast } from 'vue-toast-notification'

export default {
  install(app) {
    const instance = useToast()
    app.config.globalProperties.$toast = instance
  }
}