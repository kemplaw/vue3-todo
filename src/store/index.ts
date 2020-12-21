import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { userModule, todoModule } from './modules'
import { TodoModuleStateDefine } from './modules/todo/types'
import { UserModuleStateDefine } from './modules/user/types'

export interface RootStoreDefine {
  count: number
  loading: boolean
  userModule: UserModuleStateDefine
  todoModule: TodoModuleStateDefine
}

export const rootStoreKey: InjectionKey<Store<RootStoreDefine>> = Symbol('ROOT_STORE_KEY')

export default createStore({
  strict: process.env.NODE_ENV === 'development',
  modules: {
    userModule,
    todoModule
  }
})

export function useStore() {
  return baseUseStore(rootStoreKey)
}
