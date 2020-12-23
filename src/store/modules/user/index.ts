import { Module } from 'vuex'
import { RootStoreDefine } from '@/store'
import { getTimesAfterDays } from '@/utils'
import { MutationTypes, UserInfo, UserModuleStateDefine } from './types'

export default {
  namespaced: true,
  state: {
    user: {
      username: ''
    }
  },
  mutations: {
    [MutationTypes.UPDATE_USER](state, userInfo: UserInfo) {
      state.user = userInfo
    }
  },
  actions: {
    login({ commit }, loginFormValue: { username: string; password: string }) {
      return new Promise((resolve, reject) => {
        if (loginFormValue.password === '1234' && loginFormValue.username === 'kemp') {
          commit(MutationTypes.UPDATE_USER, { username: 'kemp' } as UserInfo)
          sessionStorage.setItem(
            'userInfo',
            JSON.stringify({ username: 'kemp', expire: getTimesAfterDays(7) })
          )
          return resolve(true)
        }

        return reject()
      })
    }
  }
} as Module<UserModuleStateDefine, RootStoreDefine>
