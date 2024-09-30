import { createReadHtp } from "../server/https"
const readHttp = createReadHtp()

export const fetchHomeApi = async (payload) => {
  return await readHttp.post('/boards/Homepage', payload)
}

