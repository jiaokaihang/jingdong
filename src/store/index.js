import { createStore } from 'vuex'

const setLocalStorage = (state) => {
  const { carList } = state
  const carListString = JSON.stringify(carList)
  localStorage.carList = carListString
}

const getLocalStorage = () => {
  return JSON.parse(localStorage.carList) || {}
}
export default createStore({
  state: {
    // 第一层级是商铺的Id
    carList: getLocalStorage()
  },
  getters: {
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      console.log('22222222', payload)
      const { shopId, productId, productInfo } = payload
      let shopInfo = state.carList[shopId] || {
        showName: '', productList: {}
      }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count += payload.num
      if (payload.num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }
      shopInfo.productList[productId] = product
      state.carList[shopId] = shopInfo
      setLocalStorage(state)
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.carList[shopId] || { showName: '', productList: {} }
      shopInfo.shopName = shopName
      state.carList[shopId] = shopInfo
      setLocalStorage(state)
    },
    changeCartItemCheck (state, payload) {
      const { shopId, productId } = payload
      const product = state.carList[shopId].productList[productId]
      product.check = !product.check
      setLocalStorage(state)
    },
    cleanCartProducts (state, payload) {
      const { shopId } = payload
      state.carList[shopId].productList = {}
      setLocalStorage(state)
    },
    setCartItemChecked (state, payload) {
      const { shopId } = payload
      const products = state.carList[shopId].productList
      if (products) {
        for (let key in products) {
          const product = products[key]
          product.check = true
        }
      }
      setLocalStorage(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
