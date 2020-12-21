export interface UserInfo {
  username: string
}

export interface UserModuleStateDefine {
  user: UserInfo
}

export enum MutationTypes {
  UPDATE_USER = 'UPDATE_USER'
}
