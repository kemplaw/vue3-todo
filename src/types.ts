/**
 * @description: tab 类型状态
 */
export enum TabStatus {
  completed = 1,
  active = 2,
  all = 3
}

/**
 * @description: todo 状态描述
 */
export enum TodoStatus {
  unCompleted = 0,
  completed = 1
}

export interface Tab {
  label: string
  id: TabStatus
}

export interface Todo {
  status: TodoStatus
  content: string
  id: number
}
