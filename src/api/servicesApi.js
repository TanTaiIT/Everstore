import { createReadHtp, createCmdHttp } from './../server/https'
const readHttp = createReadHtp()
const cmdHttp = createCmdHttp()

export const ServiceCategory = async (payload) => {
  return await readHttp.post('goods/ServiceCategory', payload)
}

export const AddServiceCategoryApi = async (payload) => {
  return await cmdHttp.post('goods/ServiceCategory', payload)
}

export const EditServiceCategoryApi = async (payload) => {
  return await cmdHttp.post('goods/ServiceCategory', payload)
}
