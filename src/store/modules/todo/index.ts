import { RootStoreDefine } from '@/store'
import { Todo, TodoStatus } from '@/types'
import { Module } from 'vuex'
import { MutationTypes, TodoModuleStateDefine } from './types'

export default {
  namespaced: true,
  state: {
    todoList: []
  },
  mutations: {
    /**
     * @description: 更新 Todo
     */
    [MutationTypes.UPDATE_TODO](state, todo: Todo) {
      state.todoList.splice(
        state.todoList.findIndex(v => v.id === todo.id),
        1,
        todo
      )
    },
    /**
     * @description: 新增待办
     */
    [MutationTypes.ADD_TODO](state, todo: Todo) {
      state.todoList.unshift(todo)
    },
    /**
     * @description: 填充待办列表数据
     */
    [MutationTypes.FILL_TODO_LIST](state, todoList: Todo[]) {
      state.todoList = todoList || []
    },
    /**
     * @description: 删除待办
     */
    [MutationTypes.DELETE_TODO](state, todoId: number) {
      state.todoList = state.todoList.filter(todo => todo.id !== todoId)
    },
    /**
     * @description: 删除已完成的待办
     */
    [MutationTypes.DELETE_ALL_COMPLETED](state) {
      state.todoList = state.todoList.filter(todo => todo.status !== TodoStatus.completed)
    }
  },
  actions: {
    addTodo({ commit }, todo: Todo) {
      commit(MutationTypes.ADD_TODO, todo)
    },
    updateTodo({ commit }, todo: Todo) {
      commit(MutationTypes.UPDATE_TODO, todo)
    },
    fillTodoList({ commit }) {
      commit(MutationTypes.FILL_TODO_LIST)
    },
    deleteTodo({ commit }, todoId: number) {
      commit(MutationTypes.DELETE_TODO, todoId)
    },
    deleteAllCompleted({ commit }) {
      commit(MutationTypes.DELETE_ALL_COMPLETED)
    }
  }
} as Module<TodoModuleStateDefine, RootStoreDefine>
