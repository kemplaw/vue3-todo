import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class='app-wrapper'>
        <div class='cover'></div>
        <RouterView />
        <div class='footer-wrapper'>footer</div>
      </div>
    )
  }
})
