import { isExpiredTime } from '@/utils'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function accountSessionValid(): boolean {
  const accountSessionString = localStorage.getItem('userInfo')

  if (!accountSessionString) return false

  const accountSessionData: { username: string; expire: number } = JSON.parse(accountSessionString)
  const isExpired = isExpiredTime(accountSessionData.expire)

  return !isExpired
}

router.beforeEach(to => {
  if (to.name === 'Login') return true

  const valid = accountSessionValid()

  if (!valid) {
    router.replace('/login')
  }

  return true
})

router.afterEach(to => {
  document.title = to.meta.title
})

export default router
