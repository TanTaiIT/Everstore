export default {
  install(app) {
    app.directive('focus', {
      mounted(el, binding) {
        if (binding.value) {
          setTimeout(() => {
            el.focus()
            if (binding.arg === 'select') {
              el.select()
            }
          }, 300)

        }
      }
    })
  }
}
