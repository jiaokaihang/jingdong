<template>
    <div>
        <div class="nearby">
                <h3 class="nearby__title">附近店铺</h3>
                <shop-info v-for="item in nearbyList" :key="item._id" :item="item" />
            </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
const usenearbyListEffect = () => {
  const nearbyList = ref([])
  const getnearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { getnearbyList, nearbyList }
}
export default {
  name: 'NearbyList',
  components: { ShopInfo },
  setup () {
    const { getnearbyList, nearbyList } = usenearbyListEffect()
    getnearbyList()
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.nearby {
    &__title {
        margin: .16rem 0 .02rem 0;
        font-size: .18rem;
        font-weight: normal;
        color: $content-fontcolor;
    }
}
</style>
