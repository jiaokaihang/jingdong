<template>
    <div>
        <div class="nearby">
                <h3 class="nearby__title">附近店铺</h3>
                <div class="nearby__item">
                    <img src="../../assets/sam.webp" alt="" class="nearby__item__img">
                    <div class="nearby__content">
                        <div class="nearby__content__title">沃尔玛</div>
                        <div class="nearby__content__tags">
                            <span class="nearby__content__tag">月售1万+</span>
                            <span class="nearby__content__tag">月售1万+</span>
                            <span class="nearby__content__tag">月售1万+</span>
                        </div>
                        <p class="nearby__content__highlight">VIP尊享满89元减4元运费券（每月3张）</p>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: 'NearbyList'
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
