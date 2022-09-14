// 购物车相关逻辑
import { useStore } from 'vuex'
export const useCommenCartEffect = () => {
  const store = useStore()
  const cartList = store.state.carList
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId, productId, productInfo, num
    })
  }
  return { changeCartItemInfo, cartList }
}
