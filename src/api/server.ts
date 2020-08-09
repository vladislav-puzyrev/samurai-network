import axios from 'axios'

const server = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': 'ca3b0eb4-4af6-4803-8caa-f7d26464a12c' }
})

export type OperationData<T = any> = {
  data: T
  messages: string[]
  resultCode: number
}

export type OperationItems<T = any> = {
  items: T[]
  totalCount: number
  error: string | null
}

export default server
