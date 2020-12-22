import { useStore } from '@/store'
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import './style.styl'

export default defineComponent({
  name: 'Login',
  setup() {
    const store = useStore()
    const errorFlagRef = ref(false)
    let { username, password } = reactive<{ [key: string]: any }>({ username: '', password: '' })
    const router = useRouter()

    function handleChangeUsername(e: any) {
      username = e.target.value
    }

    function handleChangePassword(e: any) {
      password = e.target.value
    }

    async function handleLogin() {
      try {
        await store.dispatch('userModule/login', { username, password })
        errorFlagRef.value = false
        router.replace('/app')
      } catch (error) {
        errorFlagRef.value = true
      }
    }

    function handlePressEnter(e: any) {
      if (e.key.toLowerCase() === 'enter') {
        handleLogin()
      }
    }

    return () => (
      <div class='login-form-wrapper'>
        <div class='form-group'>
          <input
            value={username}
            type='text'
            class='form-control'
            onInput={handleChangeUsername}
            onKeyup={handlePressEnter}
          />
          {errorFlagRef.value && <div class='error-text'>账号或密码错误</div>}
        </div>
        <div class='form-group'>
          <input
            value={password}
            type='password'
            class='form-control'
            onInput={handleChangePassword}
            onKeyup={handlePressEnter}
          />
          {errorFlagRef.value && <div class='error-text'>账号或密码错误</div>}
        </div>

        <button type='button' class='btn' onClick={handleLogin}>
          继续使用
        </button>
      </div>
    )
  }
})
