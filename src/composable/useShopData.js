import { onBeforeMount, ref } from "vue"
import { useLoading } from "./useLoading"
import { useHomeStore } from "../store"
export default function useShopData() {
  const { startLoading, stopLoading } = useLoading()

  const getShopInfo = async () => {
    try {
      startLoading()
      // const response = await getHomeData()
      // return response

    } catch (error) {
    } finally {
      stopLoading()
    }
  }

  return {
    getShopInfo
  }
}
