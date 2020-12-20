import { TodoStatus } from '@/types'
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'TodoItem',
  props: {
    status: {
      type: Number as PropType<TodoStatus>,
      required: true
    },
    content: {
      type: String as PropType<string>,
      required: true
    },
    onChange: {
      type: Function as PropType<(v: boolean) => void>,
      required: true
    },
    onDel: {
      type: Function as PropType<() => void>
    }
  },
  setup(props) {
    const checkboxValueRef = computed(() => props.status === TodoStatus.completed)

    function handleChangeCheckBox(e: any) {
      props.onChange(e.target.value)
    }

    return () => (
      <div class='todo-item-wrapper'>
        <input checked={checkboxValueRef.value} type='checkbox' onChange={handleChangeCheckBox} />
        <span class='content'>{props.content}</span>
        <i class='del icon' onClick={props.onDel}>
          x
        </i>
      </div>
    )
  }
})
