export const TabProviderContextKey = Symbol()

export type TabContextDefine =
  | {
      handleTabChange: (tabIndex: number) => void
    }
  | undefined
