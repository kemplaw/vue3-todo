import { TabGroup, TabItem } from '@/components'
import { TabStatus, TodoStatus } from '@/types'
import { defineComponent, ref } from 'vue'
import TodoHelper from './TodoHelper'
import TodoItem from './TodoItem'

export default defineComponent({
  name: 'Todo',
  setup() {
    const tabs = ref([
      { id: TabStatus.all, label: 'all' },
      { id: TabStatus.active, label: 'active' },
      { id: TabStatus.completed, label: 'completed' }
    ])
    function handleChangeTodoStatus(status: boolean) {
      console.log(status)
    }

    function handleDelTodo() {
      console.log('del todo item')
    }

    function handleChangeTab(tabIndex: number) {
      console.log(tabIndex)
    }

    return () => (
      <div class='todo-wrapper'>
        <div class='tab-wrapper'>
          <TabGroup onChange={handleChangeTab}>
            {tabs.value.map(tab => (
              <TabItem index={tab.id} label={tab.label} />
            ))}
          </TabGroup>
        </div>
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
