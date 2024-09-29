import { createAggrHttp } from "../server/https"

const aggrHttp = createAggrHttp()
export const userLogin = async (country, payload) => {
  return aggrHttp.post('/auth/login/Subscriber?' + country, payload)
}

export const getBasisShopInfo = async () => {
  return await aggrHttp.get('/UserAccount/GetBasicAccountInfo')
}

export const refreshTokenShop = async (country, payload) => {
  return await aggrHttp.post('/auth/RefreshToken?' + country, payload)
}
