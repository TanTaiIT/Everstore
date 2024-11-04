import { createReadHtp } from './../server/https'

const readHttp = createReadHtp()

export const ServiceCategory = async (payload) => {
  return await readHttp.post('goods/ServiceCategory', payload)
}
