<template>
    <div>
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
  name: ' DockerList '
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
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

        .iconfont {
            margin: .07rem 0 .02rem 0;
            font-size: .18rem;
        }

        &--active {
            color: #1FA4FC;
        }
    }

    &__title {
        font-size: .2rem;
        transform: scale(.5, .5);
        transform-origin: center top;
    }
}
</style>
