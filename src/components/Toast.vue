<template>
  <div>
      <div class="toast">{{message}}</div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'ToastList',
  props: ['message']
}
export const useToastEffect = () => {
  const toastData = reactive({
    showToast: false,
    toastMessage: ''
  })
  const changeToast = (message) => {
    console.log(message)
    toastData.showToast = true
    toastData.toastMessage = '登录失败'
    setTimeout(() => {
      toastData.showToast = false
      toastData.toastMessage = ''
    }, 2000)
  }
  return { toastData, changeToast }
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
