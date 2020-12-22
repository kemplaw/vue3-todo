import { defineComponent, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useStore } from './store'
import { MutationTypes } from './store/modules/user/types'
import { getStore } from './utils'

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()

    onMounted(() => {
      const userInfo = getStore('userInfo')

      if (!userInfo) return

      store.commit(`userModule/${MutationTypes.UPDATE_USER}`, userInfo)
    })

    return () => (
      <div class='app-wrapper'>
        <div class='cover'></div>
        <RouterView />
        <div class='footer-wrapper'>footer</div>
      </div>
    )
  }
})
