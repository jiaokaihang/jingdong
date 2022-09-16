<template>
    <div>
        <div class="docker">
            <div
            :class="{'docker__item':true, 'docker__item--active': index===currentIndex}"

             v-for="(item, index ) in dockerList"
              :key="item.icon">
                <router-link :to="item.to">
                <div class="iconfont" v-html="item.icon"></div>
                <div docker__title>{{item.text}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: ' DockerList ',
  props: ['currentIndex'],
  setup () {
    const dockerList = [
      { icon: ' &#xe6bb;', text: '首页', to: { name: 'Home' } },
      { icon: ' &#xe61b;', text: '购物车', to: { name: 'CartList' } },
      //   , params: { id: 2 }
      { icon: ' &#xe897;', text: '订单', to: { name: 'OrderPage' } },
      { icon: ' &#xe8a0;', text: '我的', to: { name: 'Home' } }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped >
@import '../style/viriables.scss';
@import '../style/mixins.scss';
.wrapper{
    background:red;
}
.docker {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    padding: 0 .18rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .49rem;
    border-top: .01rem solid $content-bgColor;
    color: $content-fontcolor;

    &__item {
        flex: 1;
        text-align: center;
        a{
            color: $content-fontcolor;
            text-decoration: none;
        }
        .iconfont {
            margin: .07rem 0 .02rem 0;
            font-size: .18rem;
        }
        &--active {
            a{
                color: #1FA4FC;
            }
        }
    }

    &__title {
        font-size: .2rem;
        transform: scale(.5, .5);
        transform-origin: center top;
    }
}
</style>
