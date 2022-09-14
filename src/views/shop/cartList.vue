<template>
  <div class="cart">
    <div class="product">
      <template
       v-for="item in productList"
       :key='item._id'
       >
       <div class="product__item" v-if="item.count > 0">
       <img class="product__item__img"  :src="item.imgUrl"  />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{item.name}}</h4>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{item.price}}
            <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus"
          @click="() => {changeCartItemInfo(shopId, item._id, item, -1)}"
          >-</span>
          {{item.count ||  0  }}
          <span class="product__number__add"
           @click="() => {changeCartItemInfo(shopId, item._id, item, 1)}"
          >+</span>
      </div>
    </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
        />
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen;{{price}}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommenCartEffect } from './commonCartEffect'
const useCartEffect = (shopId) => {
  const store = useStore()
  const carList = store.state.carList
  const total = computed(() => {
    const productList = carList[shopId]
    let count = 0
    if (productList) {
      for (let i in productList) {
        let product = productList[i]
        count += product.count
      }
    }
    return count
  })
  const price = computed(() => {
    const productList = carList[shopId]
    let count = 0
    if (productList) {
      for (let i in productList) {
        let product = productList[i]
        count += (product.count * product.price)
      }
    }
    return count.toFixed(2)
  })
  const productList = computed(() => {
    const productList = carList[shopId]
    return productList
  })
  return { total, price, productList }
}

export default {
  name: 'cartList',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { total, price, productList } = useCartEffect(shopId)
    const { changeCartItemInfo } = useCommenCartEffect()
    return { total, price, shopId, productList, changeCartItemInfo }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixins.scss";
@import "../../style/viriables.scss";
.cart {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: #fff;
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      margin: .06 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #e93b3b;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #999;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      bottom: 0.12rem;
      right: 0;
      &__minus,
      &__add {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        line-height: 0.2rem;
        border-radius: 50%;
        font-size: 0.2rem;
        text-align: center;
      }
      &__minus {
        border: 0.01rem solid $border-color;
        color: $border-color;
        margin-right: 0.05rem;
      }
      &__add {
        background: $background;
        color: $bgColor;
        margin-left: 0.05rem;
      }
    }
  }
}
.check {
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  line-height: .49rem;
  &__icon {
    position: relative;
    width: .84rem;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag {
      position: absolute;
      left: .46rem;
      top: .04rem;
      padding: 0 .04rem;
      min-width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $hightlight-fontColor;
      border-radius: .1rem;
      font-size: .12rem;
      text-align: center;
      color: #fff;
      transform: scale(.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;
    &__price {
      line-height: .49rem;
      color: $hightlight-fontColor;
      font-size: .18rem;
    }
  }
  &__btn {
    width: .98rem;
    background-color: #4FB0F9;
    text-align: center;
    color: #FFF;
    font-size: .14rem;
  }
}
</style>
