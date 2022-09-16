<template>
 <div>
  <div class="wrapper">
    <div class="title">我的订单</div>
     <div class="orders">
        <div class="order">
          <div class="order__title">沃尔玛
            <span class="order__status">已取消</span>
          </div>
          <div class="order__content">
            <div class="order__content__imgs">
              <img class="order__content__img" src="" alt="">
              <img class="order__content__img" src="" alt="">
              <img class="order__content__img" src="" alt="">
              <img class="order__content__img" src="" alt="">
            </div>
            <div class="order__info">
              <div class="order__info__pricec">￥36.88</div>
              <div class="order__info__count">共2件</div>
              <div></div>
            </div>
          </div>
        </div>
     </div>
  </div>
        <Docker :currentIndex='2'/>
 </div>
</template>

<script>
import Docker from '../../components/Docker'
export default {
  name: 'OrderPage',
  components: { Docker }
}
</script>

<style lang="scss" scoped>
.wrapper {
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    bottom: .5rem;
    right: 0;
    background: #EEE;
}
.title{
  line-height: .44rem;
  background: #fff;
  color: #333;
  font-size: .16rem;
  text-align: center;
}
</style>
