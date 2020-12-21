import { Todo } from '@/types'

export interface TodoModuleStateDefine {
  todoList: Todo[]
}

export enum MutationTypes {
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  DELETE_ALL_COMPLETED = 'DELETE_ALL_COMPLETED',
  FILL_TODO_LIST = 'FILL_TODO_LIST'
}
