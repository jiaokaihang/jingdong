<template>
  <div>
    <div class="wrapper">
      <div class="search">
        <div class="search__back iconfont" @click="handelBackClick">&#xe710;</div>
        <div class="search__content">
          <span class="iconfont search__content__icon">&#xe600;</span>
          <input type="text" placeholder="请输入商品名称搜索" class="search__content__input" />
        </div>
      </div>
      <shop-info :item="item" :hideBorder="true"/>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import ShopInfo from '../../components/ShopInfo'
export default {
  name: 'ShopList',
  components: { ShopInfo },
  setup () {
    const router = useRouter()
    const item = {
      _id: '1',
      name: '沃尔玛',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'VIP尊享满89院减4元运费券'
    }
    const handelBackClick = () => {
      router.back()
    }
    return { item, handelBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/viriables.scss';
.wrapper{
  padding: 0 .18rem;
}
.search {
  display: flex;
  margin: .2rem 0 .16rem 0;
  line-height: .32rem;
  &__back {
    font-size: .26rem;
    width: .3rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: #F5F5F5;
    border-radius: .16rem;
    &__icon{
      width: .44rem;
      text-align: center;
      color: #B7B7B7;
    }
    &__input{
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
