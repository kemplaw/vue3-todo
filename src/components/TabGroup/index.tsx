import { TabContextDefine, TabProviderContextKey } from '@/context-type'
import { Tab } from '@/types'
import { defineComponent, PropType, provide } from 'vue'

export default defineComponent({
  name: 'TabGroup',
  props: {
    onChange: {
      type: Function as PropType<(tabIndex: number) => void>,
      required: true
    }
  },
  setup(props, { slots }) {
    function handleTabChange(tabIndex: number) {
      console.log(tabIndex)
      props.onChange(tabIndex)
    }

    const context: TabContextDefine = {
      handleTabChange
    }

    provide(TabProviderContextKey, context)

    return () => (
      <div class='tab-container'>
        <div class='tab-wrapper'>{slots.default && slots.default()}</div>
      </div>
    )
  }
})
