import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import './style.styl'

export default defineComponent({
  name: 'Login',
  setup() {
    const errorFlagRef = ref(false)
    let { username, password } = reactive<{ [key: string]: any }>({ username: '', password: '' })
    const router = useRouter()

    function handleChangeUsername(e: any) {
      username = e.target.value
    }

    function handleChangePassword(e: any) {
      password = e.target.value
    }

    function handleLogin() {
      if (username === '123' && password === '1234') {
        errorFlagRef.value = false
        router.replace('/app')

        return
      }

      errorFlagRef.value = true
    }

    return () => (
      <div class='login-form-wrapper'>
        <div class='form-group'>
          <input value={username} type='text' class='form-control' onInput={handleChangeUsername} />
          {errorFlagRef.value && <div class='error-text'>账号或密码错误</div>}
        </div>
        <div class='form-group'>
          <input
            value={password}
            type='password'
            class='form-control'
            onInput={handleChangePassword}
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
