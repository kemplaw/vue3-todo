import { Todo, TodoStatus } from '@/types'
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'TodoItem',
  props: {
    todo: {
      type: Object as PropType<Todo>,
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
    const checkboxValueRef = computed(() => props.todo.status === TodoStatus.completed)

    function handleChangeCheckBox(e: any) {
      props.onChange(e.target.checked)
    }

    return () => (
      <div class='todo-item-wrapper'>
        <input checked={checkboxValueRef.value} type='checkbox' onChange={handleChangeCheckBox} />
        <span class='content'>{props.todo.content}</span>
        <i class='del icon' onClick={props.onDel}>
          x
        </i>
      </div>
    )
  }
})
