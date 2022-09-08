<template>
  <div>
    <div class="docker">
      <span class="docker__item">
        <div class="logo">&#xe6b8;</div>
        首页</span>
      <span class="docker__item">
        <div class="logo">&#xe61b;</div>
        购物车</span>
      <span class="docker__item">
        <div class="logo">&#xe897;</div>
        订单</span>
      <span class="docker__item">
        <div class="logo">&#xe8a0;</div>
        我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: ' APP '
}
</script>

<style lang="scss">
.docker{
  display: flex;
  position: absolute;
  padding: 0 .18rem;
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top:1px solid #F1F1F1 ;
  background-color: #09f;
}
.docker__item{
   flex: 1;
   text-align: center;
}
</style>
