<template>
  <div>
    <div class="wrapper">
      <img class="wrapper__img" src="../../assets/编组@2x.png" alt="" />
      <div class="wrapper__input">
        <input type="text" class="wrapper__input__content" placeholder="请输入用户名" v-model="username">
      </div>
      <div class="wrapper__input">
        <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="password">
      </div>
      <div class="wrapper__input">
        <input type="password" class="wrapper__input__content" placeholder="请确认密码" autocomplete="new-password" v-model="ensurement">
      </div>
      <div class="wrapper__login-button" @click="handleRegister">注册</div>
      <div class="wrapper__login-link" @click="handleLoginClick">使用已有账号登录</div>
    </div>
    <Toast v-if="showToast" :message="toastMessage" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
// 注册相关逻辑
const useRegisterEffect = (changeToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '', ensurement: '' })
  console.log(data)
  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      console.log(result)
      if (result?.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        changeToast('注册失败')
      }
    } catch (e) {
      console.log(e.message)
      changeToast('请求失败')
    }
  }
  const { username, passwowrd, ensurement } = toRefs(data)
  return { username, passwowrd, ensurement, handleRegister }
}
// 点击登录跳转
const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
    console.log('111')
  }
  return { handleLoginClick }
}

export default {
  name: ' RegisterList ',
  components: { Toast },
  setup () {
    console.log('122')
    const { showToast, toastMessage, changeToast } = useToastEffect() // 弹窗组件
    const { username, passwowrd, ensurement, handleRegister } = useRegisterEffect(changeToast)
    const { handleLoginClick } = useLoginEffect()
    return { username, passwowrd, ensurement, handleRegister, handleLoginClick, showToast, toastMessage }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../style/viriables.scss';
.wrapper{
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  height: 4rem;
  &__img{
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
}
  &__input{
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #F9F9F9;
    border: .01remsolid rgba(0,0,0,0.10);
    border-radius: .06rem;
    border-radius: .06rem;
    &__content{
      margin-top: .12rem;
      line-height: .22rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $input-fontcolor;
      &::placeholder{
        color: $input-fontcolor;
      }
    }
  }
  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    color: #fff;
    font-size: .16rem;
    text-align: center;
  }
  &__login-link{
    text-align: center;
    font-size: .14rem;
     color:$input-fontcolor;
  }
}
</style>
