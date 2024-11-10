import axios from 'axios'
const base_url = 'https://ahasoft-salon-admin-http-aggregator-staging.azurewebsites.net'
import { authStore } from '../store/AuthStore'
import { errorMessages } from 'vue/compiler-sfc'
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

// const waitRefreshTokenComplete = async () => {
//   return new Promise((resolve) => {
//     const auth = authStore()
//     if (!auth.isRefreshTokenOK) {
//       return resolve(auth.isRefreshTokenOK)
//     }

//     const unwatcher = watch(() => auth.isRefreshingToken, (isRefreshingToken) => {
//       if (!isRefreshingToken) {
//         unwatcher()
//         resolve(auth.isRefreshTokenOK)
//       }
//     }, { immediate: true })
//   })
// }

// const waitRefreshToken = async (config) => {
//   const { setRefreshingToken } = authStore()
//   await waitRefreshTokenComplete()
//   if (config.url.match('/auth/RefreshToken')) {
//     setRefreshingToken(true)
//   }
//   return config
// }
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
  // http.interceptors.request.use(waitRefreshToken)
  http.interceptors.request.use(function (config) {
    const isLogin = checkUserLogin()
    const { accessToken } = authStore()
    if (isLogin) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  })

  // axios response
  http.interceptors.response.use(null, async error => {
    try {
      const { refreshTokenApi } = authStore()
      if (error.status === 401) {
        const accessToken = localStorage.getItem('accessToken') || ''
        const refreshToken = localStorage.getItem('refreshToken') || ''
        const response = await refreshTokenApi(refreshToken, accessToken)
        if (response?.data?.isOK) {
          const { accessToken } = authStore()
          error.config.headers.Authorization = `Bearer ${accessToken}`
          return axios(error?.config)
        }
      }

      return Promise.reject(error)
    } catch (error) {
      throw error
    }
  })

  // http.interceptors.response.use(error => {
  //   const responses = undefined
  //   console.log('error', error)
  //   // if (!response?.data?.isOK) {
  //   //   console.log('res', response)
  //   //   responses.data = {
  //   //     data: {
  //   //       data: null,
  //   //       errorMessages: response?.data?.errorMessages,
  //   //       isOK: false

  //   //     }
  //   //   }
  //   // }

  //   // return responses
  // })
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
