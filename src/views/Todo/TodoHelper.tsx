import { TabStatus, Todo, TodoStatus } from '@/types'
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'TodoHelper',
  props: {
    todoFilter: {
      type: Number as PropType<TabStatus>,
      required: true
    },
    onClearAllCompletedTodo: {
      type: Function as PropType<() => void>,
      required: true
    },
    todoList: {
      type: Array as PropType<Todo[]>,
      required: true
    }
  },
  setup(props) {
    function handleClearAllCompletedTodo() {
      props.onClearAllCompletedTodo()
    }

    const unCompletedTodoLengthRef = computed(() => {
      const unCompletedTodoList = props.todoList.filter(
        todo => todo.status === TodoStatus.unCompleted
      )

      return unCompletedTodoList.length
    })

    return () => (
      <div class='helper-wrapper'>
        <span class='left-tip'>{unCompletedTodoLengthRef.value} items left</span>
        <button class='clear' onClick={handleClearAllCompletedTodo}>
          Clear Completed
        </button>
      </div>
    )
  }
})
