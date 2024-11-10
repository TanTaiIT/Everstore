import { createAggrHttp } from './../server/https'

const aggrHttp = createAggrHttp()

export const fetchClientAPI = async (payload) => {
  return await aggrHttp.post('/Client/GetClient', payload)
}

export const fetClientSearchAPI = async (payload) => {
  return await aggrHttp.post('/Client/Search', payload)
}

