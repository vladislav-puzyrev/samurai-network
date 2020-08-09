import server, { OperationData } from './server'

export const me = async () => {
  type MeRes = OperationData<{
    id: number
    email: string
    login: string
  }>

  const res = await server.get<MeRes>('auth/me')
  return res.data
}

export const login = async (email: string, password: string, rememberMe: boolean, captcha: string) => {
  type LoginRes = OperationData<{
    userId: number
  }>

  const res = await server.post<LoginRes>('auth/login', { email, password, rememberMe, captcha })
  return res.data
}

export const logout = async () => {
  const res = await server.post<OperationData>('auth/logout')
  return res.data
}
