import { TabContextDefine, TabProviderContextKey } from '@/context-type'
import { defineComponent, inject, PropType } from 'vue'

export default defineComponent({
  name: 'TabItem',
  props: {
    index: {
      type: Number as PropType<number>,
      required: true
    },
    label: {
      type: String as PropType<string>
    }
  },
  setup(props, { slots }) {
    const tabContext: TabContextDefine = inject(TabProviderContextKey)

    function handleClickTabItem() {
      if (!tabContext) return

      tabContext.handleTabChange(props.index)
    }

    return () => {
      const tabRender = slots.label ? slots.label() : <span>{props.label}</span>

      return (
        <div class='tab-item-wrapper' onClick={handleClickTabItem}>
          {tabRender}
        </div>
      )
    }
  }
})
