<template>
 <div>
  <div class="wrapper">
    <div class="title">我的订单</div>
     <div class="orders">
        <div class="order"
         v-for="(item, index) in list" :key="index">
          <div class="order__title">{{item.shopName}}
            <span class="order__status">{{item.isCanceled ? '已取消' : '已下单'}}</span>
          </div>
          <div class="order__content">
            <div class="order__content__imgs">
              <template
              v-for="(innerItem, innerindex) in item.products"
               :key="innerindex"
              >
              <img
              v-if="innerindex<=3"
               class="order__content__img"
               :src="innerItem.product.img" alt="">
              </template>
            </div>
            <div class="order__content__info">
              <div class="order__content__price">￥{{item.totalPrice}}</div>
              <div class="order__content__count">共 {{item.totalNumber}}  件</div>
              <div></div>
            </div>
          </div>
        </div>
     </div>
  </div>
        <Docker :currentIndex='2'/>
 </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import Docker from '../../components/Docker'
// 处理订单列表逻辑
const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getnearbyList = async () => {
    const result = await get('/api/order')
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data
      orderList.forEach((order) => {
        const products = order.products || []
        let totalPrice = 0
        let totalNumber = 0
        products.forEach((productItem) => {
          totalNumber += productItem?.orderSales || 0
          totalPrice += ((productItem?.product?.price * productItem?.orderSales) || 0)
        })
        order.totalPrice = totalPrice
        order.totalNumber = totalNumber
      })
      console.log('orderList', orderList)
      data.list = result.data
    }
    console.log(result, '--result---')
  }
  getnearbyList()
  const { list } = toRefs(data)
  return { list }
}

export default {
  name: 'OrderPage',
  components: { Docker },
  setup () {
    const { list } = useOrderListEffect()
    return { list }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
.wrapper {
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    bottom: .5rem;
    right: 0;
    background: rgb(248, 248, 248);
}
.title{
  line-height: .44rem;
  background:$bgColor;
  color: #333;
  font-size: .16rem;
  text-align: center;
}
.orders{

}
.order{
  padding: .16rem;
   background:$bgColor;
   margin: .16rem .18rem;
   &__title{
    font-size: .16rem;
    color: #333;
    line-height: .22rem;
    margin-bottom: .16rem;
   }
   &__status{
    float: right;
    font-size: .14rem;
    color: #999;
   }
   &__content{
    display: flex;
    &__imgs{
     flex: 1;
    }
    &__img{
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
    }
    &__info{
      width: .7rem;
    }
    &__price{
      margin-bottom: .04rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
      text-align: right;
      line-height: .2rem;
    }
    &__count{
      font-size: .12rem;
      color: $content-fontcolor;
      text-align: right;
      line-height: .14rem;
    }
   }
}
</style>
