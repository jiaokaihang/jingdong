import { createStore } from 'vuex'

export default createStore({
  state: {
    // 第一层级是商铺的Id
    carList: {
      // shopId: {
      //   // 第二层是商品Id
      //   // 第二层是商品内容以及购物数量
      //   productId: {
      //     _id: '1',
      //     name: '番茄250g/份',
      //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
      //     sales: 10,
      //     price: 33.6,
      //     oldPrice: 39.6,
      //     count: 2

      //   }
      // }
    }
  },
  getters: {
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      console.log('22222222', payload)
      const { shopId, productId, productInfo } = payload
      let shopInfo = state.carList[shopId]
      console.log('222', shopInfo)
      if (!shopInfo) { shopInfo = {} }
      let product = shopInfo[productId]
      console.log('111', product)
      if (!product) {
        console.log(333333)
        product = productInfo
        product.count = 0
      }
      product.count += payload.num
      if (product.count < 0) { product.count = 0 }
      shopInfo[productId] = product
      state.carList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
