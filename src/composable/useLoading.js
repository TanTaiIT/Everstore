import { ref } from 'vue'
import { useAppStore } from '../store/AppStore'

export function useLoading(loading) {
  const store = useAppStore()
  const { setLoading } = store
  const isLoading = ref(false)

  const startLoading = () => {
    setLoading(true)
  }
  const stopLoading = () => {
    setLoading(false)
  }

  return {
    isLoading,
    stopLoading,
    startLoading,
  }
}
