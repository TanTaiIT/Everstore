// Vue
import { ref } from 'vue'
import { getCurrentInstance } from 'vue'
//Composables
import { useLoading } from './useLoading'

//Apis
import { fetchClientAPI, fetClientSearchAPI } from '../api/ClientApi'


export function useClient() {
  // State:
  const client = ref({})
  const { proxy } = getCurrentInstance()

  // Composables
  const { startLoading, stopLoading } = useLoading()

  // Methods:
  const fetClientData = async (data) => {
    try {
      startLoading()
      const response = await fetchClientAPI(data)

      console.log('response', response)
      if (!response?.data?.isOK) {
        proxy.$toast.error(response?.data?.errorMessages)
        return
      }

      console.log('come hover hel')
      client.value = response?.data?.result || null
      return client.value
    } catch (error) {
      console.log('error', error)
      proxy.$toast.error(error.message)
    } finally {
      stopLoading()
    }
  }

  const fetClientSearch = async (query) => {
    try {
      startLoading()
      const response = await fetClientSearchAPI(query)
      if (!response?.data?.isOK) {
        proxy.$toast.error(response?.data?.errorMessages)
        return
      }

      return response
    } catch (error) {
      proxy.$toast.error(error.message)
    } finally {
      stopLoading()
    }
  }

  return {
    client,
    fetClientData,
    fetClientSearch
  }
}
