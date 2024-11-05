import mitt from 'mitt'

class Mitt {
  constructor() {
    this.mitt = mitt()
  }

  on(event, handler) {
    this.mitt.on(event, handler)
  }

  off(event, handler) {
    this.mitt.off(event, handler)
  }

  emit(event, objOption, objData) {
    this.mitt.emit(event, {
      data: objData,
      option: objOption
    })
  }

}

export default {
  install(app) {
    const mitt = new Mitt()
    app.config.globalProperties.$mitt = mitt
  }
}