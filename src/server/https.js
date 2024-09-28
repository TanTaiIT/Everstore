import axios from 'axios'
const base_url = 'https://ahasoft-salon-admin-http-aggregator-staging.azurewebsites.net'
const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
  'Cache-Control': 'no-cache',
  'Pragma': 'no-cache',
  'Expires': '0',
}

const checkUserLogin = () => {
  try {
    return sessionStorage.getItem('isLogin') ?? false
  } catch (error) {
    throw new Error(error)
  }
}
export const createHttp = ({ type = '', version = 1, options = {} }) => {

  const http = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    timeout: 10000,
    baseURL: `${base_url}/api/${type}/v${version}`, ...(options?.responseType && { responseType: options.responseType })
  })

  // axios request
  http.interceptors.request.use(function (config) {
    const isLogin = checkUserLogin()
    if (isLogin) {
      const accessToken = localStorage.getItem('accessToken') || ''
      console.log('acccesToken', accessToken)
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  })

  // axios response
  http.interceptors.response.use(function (response) {
    console.log('response', response)
  })



  return http
}

const defaultHttp = {
  vertion: 1,
  type: 'aggr'
}

export const createCmdHttp = () => {
  return createHttp({ ...defaultHttp, type: 'cmd' })
}

export const createAggrHttp = () => {
  return createHttp({ ...defaultHttp, type: 'aggr' })
}

export const createReadHtp = () => {
  return createHttp({ ...defaultHttp, type: 'read' })
}
