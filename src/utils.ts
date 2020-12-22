const dayTimes = 3600 * 1000

export function getTimesAfterDays(day: number) {
  if (!day) return Error('day required')

  return Date.now() + dayTimes * day
}

export function isExpiredTime(oldTime: number) {
  return Date.now() > oldTime
}

export function getStore(key: string) {
  const sessionString = sessionStorage.getItem(key)

  if (!sessionString) return null

  return JSON.parse(sessionString)
}
