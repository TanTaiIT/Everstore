import { createAggrHttp } from "../server/https"

const aggrHttp = createAggrHttp()
export const userLogin = async (country, payload) => {
  return aggrHttp.post('/auth/login/Subscriber?' + country, payload)
}