<template>
  <div>
      <div class="toast">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'ToastList',
  props: ['message']
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: .1rem;
  background-color: rgba(0,0,0,.35);
  border-radius: .05rem;
  color: #fff;
}
</style>
