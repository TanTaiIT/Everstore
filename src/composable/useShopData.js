import { onBeforeMount, ref } from "vue"
import { useLoading } from "./useLoading"
import { useHomeStore } from "../store"
export default function useShopData() {
  const { startLoading, stopLoading } = useLoading()
  const { getHomeData } = useHomeStore()

  const getShopInfo = async () => {
    try {
      startLoading()
      const response = await getHomeData()
      return response

    } catch (error) {
      console.log('error', error)
    } finally {
      stopLoading()
    }
  }

  return {
    getShopInfo
  }
}
