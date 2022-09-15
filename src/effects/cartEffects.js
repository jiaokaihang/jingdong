// 购物车相关逻辑
import { computed } from 'vue'
import { useStore } from 'vuex'
export const useCommenCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.carList
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId, productId, productInfo, num
    })
  }
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || []
    return productList
  })

  const shopName = computed(() => {
    const productList = cartList[shopId]?.shopName || ''
    return productList
  })
  return { changeCartItemInfo, cartList, productList, shopName }
}
