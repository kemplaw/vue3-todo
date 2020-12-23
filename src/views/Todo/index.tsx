import { TabGroup, TabItem } from '@/components'
import { useStore } from '@/store'
import { TabStatus, Todo, TodoStatus } from '@/types'
import { computed, defineComponent, onMounted, ref } from 'vue'
import TodoHelper from './TodoHelper'
import TodoItem from './TodoItem'

let id = 1

export default defineComponent({
  name: 'Todo',
  setup() {
    const store = useStore()
    const todoFilterRef = ref(TabStatus.all)
    const tabs = ref([
      { id: TabStatus.all, label: 'all' },
      { id: TabStatus.active, label: 'active' },
      { id: TabStatus.completed, label: 'completed' }
    ])
    const todoListRef = computed<Todo[]>(() => store.state.todoModule.todoList)
    const userInfoRef = computed(() => store.state.userModule.user.username)

    onMounted(() => {
      store.dispatch('todoModule/fillTodoList')
    })

    function handleChangeTodoStatus(status: boolean, todoId: number) {
      const todoStatus = status ? TodoStatus.completed : TodoStatus.unCompleted
      const targetTodo = todoListRef.value.find(todo => todo.id === todoId)
      store.dispatch('todoModule/updateTodo', { ...targetTodo, status: todoStatus })
    }

    function handleDelTodo(todoId: number) {
      store.dispatch('todoModule/deleteTodo', todoId)
    }

    function handleChangeTab(tabIndex: TabStatus) {
      todoFilterRef.value = tabIndex
    }

    /**
     * @description: 添加 todo
     */
    function handleAddTodo(e: any) {
      if (e.key.toLowerCase() !== 'enter') return

      const todo: Todo = {
        id: id++,
        status: TodoStatus.unCompleted,
        content: e.target.value
      }
      e.target.value = ''
      store.dispatch('todoModule/addTodo', todo)
    }

    function handleClearAllCompleted() {
      store.dispatch('todoModule/deleteAllCompleted')
    }

    const filteredTodoListRef = computed(() => {
      return todoListRef.value.filter(todo => {
        switch (todoFilterRef.value) {
          case TabStatus.completed:
            return todo.status === TodoStatus.completed
          case TabStatus.active:
            return todo.status === TodoStatus.unCompleted
          default:
            return true
        }
      })
    })

    return () => (
      <div class='todo-wrapper'>
        {userInfoRef.value && <h4>{userInfoRef.value}'s todo</h4>}
        <div class='tab-wrapper'>
          <TabGroup value={todoFilterRef.value} onChange={handleChangeTab}>
            {tabs.value.map(tab => (
              <TabItem index={tab.id} label={tab.label} />
            ))}
          </TabGroup>
        </div>
        <div class='todo-input-wrapper'>
          <input type='text' onKeyup={handleAddTodo} />
        </div>
        <div class='todo-list-wrapper'>
          {filteredTodoListRef.value.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChange={v => handleChangeTodoStatus(v, todo.id)}
              onDel={() => handleDelTodo(todo.id)}
            />
          ))}
        </div>
        <div class='todo-helper-wrapper'>
          <TodoHelper
            todoList={filteredTodoListRef.value}
            onClearAllCompletedTodo={handleClearAllCompleted}
          />
        </div>
      </div>
    )
  }
})
