import { ref } from 'vue'
import { useAppStore } from '../store/AppStore'

export function useLoading(loading) {
  const store = useAppStore()
  const { setLoading } = store
  const isLoading = ref(false)

  const startLoading = () => {
    console.log('start')
    setLoading(true)
  }
  const stopLoading = () => {
    console.log('stop')
    setLoading(false)
  }

  return {
    isLoading,
    stopLoading,
    startLoading,
  }
}