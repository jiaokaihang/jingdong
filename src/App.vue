<template>
  <div>
    <div class="docker">
      <div class="docker__item docker__item--active">
        <div class="logo">&#xe6bb;</div>
        <div docker__title>首页</div>
      </div>
      <div class="docker__item">
        <div class="logo">&#xe61b;</div>
        <div docker__title>购物车</div>
      </div>
      <div class="docker__item">
        <div class="logo">&#xe897;</div>
        <div docker__title>订单</div>
      </div>
      <div class="docker__item">
        <div class="logo">&#xe8a0;</div>
        <div docker__title>我的</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: ' APP '
}
</script>

<style lang="scss">
.docker {
  display: flex;
  position: absolute;
  padding: 0 .18rem;
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #F1F1F1;

  &__item {
    flex: 1;
    text-align: center;

    .logo {
      margin: 0.07rem 0 0.02rem 0;
      font-size: .18rem
    }

    &--active {
      color: #1FA4Fc;
    }
  }
  &__title{
    font-size: 20px;
  transform: scale(.5 .5);
  transform-origin: center top;
  }
}

</style>
