import axios from 'axios'

export const createHttp = ({type = '', version = 1, options = {}}) => {
  const http = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    baseURL: `${ process.env.BASE_URL}/api/${type}/v${version}`, ...(options?.responseType && {responseType: options.responseType})
  })

  return http
}

const defaultHttp = {
  vertion: 1,
  type: 'aggr'
}

export const createCmdHttp = () => {
  return createHttp({...defaultHttp, type: 'cmd'})
}

export const createAggrHttp = () => {
  return createHttp({...defaultHttp, type: 'aggr'})
}

export const createReadHtp = () => {
  return createHttp({...defaultHttp, type: 'read'})
}