<template>
  <div>
    <div class="shop" >
      <img src="../assets/Walmart.webp" class="shop__img" />
      <div  :class="{'shop__content': true, 'shop__content--bordered': hideBorder ? false: true}">
        <div class="shop__content__title">{{ item.name }}</div>
        <div class="shop__content__tags">
          <span class="shop__content__tag">月售:{{ item.sales }}</span>
          <span class="shop__content__tag">起送:{{ item.expressLimit }}</span>
          <span class="shop__content__tag"
            >基础运费:{{ item.expressPrice }}</span
          >
        </div>
        <p class="shop__content__highlight">{{ item.slogan }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hideBorder']
}
</script>

<style lang="scss" scoped>
  @import '../style/viriables.scss';
@import '../style/mixins.scss';
.shop {
  padding-top: 0.12rem;
  display: flex;

  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
  &__content {
    flex: 1;
    padding-bottom: .12rem;
    &--bordered {
      border-bottom: .01rem solid $content-bgColor;
    }
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }

    &__tags {
      @include tags;
      color: $content-fontcolor;
    }

    &__tag {
      margin-right: 0.16rem;
    }

    &__highlight {
      @include tags;
      margin: 0.08rem 0 0 0;
      color: #e93b3b;
    }
  }
}
</style>
