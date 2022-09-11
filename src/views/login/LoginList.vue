<template>
  <div>
    <div class="wrapper">
      <img class="wrapper__img" src="../../assets/编组@2x.png" alt="" />
      <div class="wrapper__input">
        <input
          type="text"
          class="wrapper__input__content"
          placeholder="请输入用户名"
          v-model="username"
        />
      </div>
      <div class="wrapper__input">
        <input
          type="password"
          class="wrapper__input__content"
          placeholder="请输入密码"
          v-model="password"
          autocomplete="new-password"
        />
      </div>
      <div class="wrapper__login-button" @click="handleLogin">登录</div>
      <div class="wrapper__login-link" @click="handleRegisterClick">
        立即注册
      </div>
      <Toast v-if="showToast" :message="toastMessage" />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
// 处理注册逻辑
const useLoginEffect = (changeToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '' })
  const handleLogin = async () => {
    try {
      const { username, password } = data
      if (username === '' || password === '') {
        console.log(data)
        changeToast('登录失败')
        return
      }
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      console.log(result)
      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        changeToast('登录失败')
      }
    } catch (e) {
      console.log(e.message)
      changeToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}
// 点击注册跳转
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
    console.log('111')
  }
  return { handleRegisterClick }
}

export default {
  name: ' LoginList ',
  components: { Toast },
  setup () {
    // setup的职责就是说，代码执行的一个流程
    const { showToast, toastMessage, changeToast } = useToastEffect() // 弹窗组件
    const { username, password, handleLogin } = useLoginEffect(changeToast) // 登陆页面的逻辑
    const { handleRegisterClick } = useRegisterEffect() // 注册页面的逻辑
    return {
      handleLogin,
      handleRegisterClick,
      username,
      password,
      showToast,
      toastMessage
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  height: 3.4rem;
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    &__content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      color: $input-fontcolor;
      &::placeholder {
        color: $input-fontcolor;
      }
    }
  }
  &__login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $input-fontcolor;
  }
}
</style>
