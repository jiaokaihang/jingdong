<template>
    <div>
        <div class="nearby">
                <h3 class="nearby__title">附近店铺</h3>
                <div class="nearby__item" v-for="item in nearbyList" :key="item._id">
                    <img src="../../assets/Walmart.webp" class="nearby__item__img">
                    <div class="nearby__content">
                        <div class="nearby__content__title">{{item.name}}</div>
                        <div class="nearby__content__tags">
                            <span class="nearby__content__tag">月售:{{item.sales}}</span>
                            <span class="nearby__content__tag">起送:{{item.expressLimit}}</span>
                            <span class="nearby__content__tag">基础运费:{{item.expressPrice}}</span>
                        </div>
                        <p class="nearby__content__highlight">{{item.slogan}}</p>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
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

    &__item {
        padding-top: .12rem;
        display: flex;

        &__img {
            margin-right: .16rem;
            width: .56rem;
            height: .56rem;
        }
    }

    &__content {
        flex: 1;
        padding-bottom: .12rem;
        border-bottom: 1px solid $content-bgColor;

        &__title {
            line-height: .22rem;
            font-size: .16rem;
            color: $content-fontcolor;
        }

        &__tags {
            @include tags;
            color: $content-fontcolor;
        }

        &__tag {
            margin-right: .16rem;
        }

        &__highlight {
            @include tags;
            margin: .08rem 0 0 0;
            color: #E93B3B;
        }
    }
}
</style>
