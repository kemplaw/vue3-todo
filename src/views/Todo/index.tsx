import { TodoStatus } from '@/types'
import { defineComponent } from 'vue'
import TodoHelper from './TodoHelper'
import TodoItem from './TodoItem'

export default defineComponent({
  name: 'Todo',
  setup() {
    function handleChangeTodoStatus(status: boolean) {
      console.log(status)
    }

    function handleDelTodo() {
      console.log('del todo item')
    }

    return () => (
      <div class='todo-wrapper'>
        <div class='tab-wrapper'>tab</div>
        <div class='todo-list-wrapper'>
          <TodoItem
            status={TodoStatus.unCompleted}
            content='这是一条待办事项'
            onChange={handleChangeTodoStatus}
            onDel={handleDelTodo}
          />
        </div>
        <div class='helper-wrapper'>
          <TodoHelper />
        </div>
      </div>
    )
  }
})
