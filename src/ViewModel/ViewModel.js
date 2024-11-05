export default class ViewModel {
  constructor() {
    this.fields = {}
  }

  setFields(fields_data) {
    this.fields = Object.assign(this.fields, fields_data)
  }

  getFields() {
    return this.fields
  }
}