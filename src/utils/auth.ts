import Cookies from 'js-cookie'

export const setToken = (token: string): void => {
  Cookies.set('token', token)
}

export const getToken = (): string | undefined => {
  return Cookies.get('token')
}

export const removeToken = (): void => {
  Cookies.remove('token')
}

export const isAuth = (): boolean => {
  return !!Cookies.get('token')
}
