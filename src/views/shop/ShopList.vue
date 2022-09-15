<template>
    <div class="wrapper">
      <div class="search">
        <div class="search__back iconfont" @click="handelBackClick">&#xe710;</div>
        <div class="search__content">
          <span class="iconfont search__content__icon">&#xe600;</span>
          <input type="text" placeholder="请输入商品名称搜索" class="search__content__input" />
        </div>
      </div>
      <shop-info :item="item" :hideBorder="true" v-show="item.imgUrl"/>
      <content-list :shopName="item.name" />
      <cart-list />
    </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
import contentList from './contentList'
import cartList from './cartList'
// 获取当前商铺信息
const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}
// 点击回退按钮
const useBackRouterEffect = () => {
  const router = useRouter()
  const handelBackClick = () => {
    router.back()
  }
  return handelBackClick
}

export default {
  name: 'ShopList',
  components: { ShopInfo, contentList, cartList },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    const handelBackClick = useBackRouterEffect()
    getItemData()
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
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;
  &__back {
    font-size: .26rem;
    width: .3rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;
    &__icon{
      width: .44rem;
      text-align: center;
      color:$search-color;
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
