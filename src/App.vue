<template>
  <div>
    <div class="wrapper">
      <div class="position">
        <span class="iconfont position__icon">&#xe7f1;</span>
        张家口职业技术学院1号楼105
        <span class="iconfont position_notice">&#xe613;</span>
      </div>
      <div class="search">
       <span class="iconfont">&#xe6e1;</span>
       <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner" >
      <img class="banner__img" src="banner.webp" alt="">
    </div>
    </div>
    <div class="docker">
      <div class=" docker__item docker__item--active">
        <div class="iconfont">&#xe6bb;</div>
        <div docker__title>首页</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe61b;</div>
        <div docker__title>购物车</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe897;</div>
        <div docker__title>订单</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe8a0;</div>
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
@import './style/viriables.scss';
@import './style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;
}
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .position__icon {
    font-size: .2rem;
    position: relative;
    top: .01rem;
  }

  .position_notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
color:$content-fontcolor;
}
.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: #F5F5F5;
  color: #B7B7B7;
  border-radius: .16rem;
  .iconfont {
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .16rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;
  }
}

.banner{
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img{
    width: 100%;
  }
}
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
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: .18rem
    }

    &--active {
      color: #1FA4Fc;
    }
  }

  &__title {
    font-size: 20px;
    transform: scale(.5 .5);
    transform-origin: center top;
  }
}
</style>
