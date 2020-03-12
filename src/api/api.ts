import axios from 'axios'
import {
  GetUsersResponse,
  OperationResult,
  SavePhotoResponse,
  MeResponse,
  LoginResponse,
  GetCaptchaResponse,
  GetAllDialogsResponse,
  GetDialogResponse, SendMessageResponse, messagesNewerThanDateResponse
} from '../types/APITypes'
import { ProfileType } from '../types/AppTypes'

const server = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    // ca3b0eb4-4af6-4803-8caa-f7d26464a12c main
    // a7da6dad-5c4f-417c-a0d9-8d30ee0d96ec secondary
    'API-KEY': 'ca3b0eb4-4af6-4803-8caa-f7d26464a12c',
  }
})

export const usersAPI = {
  async getUsers (count: number, page: number, term = '') {
    const res = await server.get<GetUsersResponse>(`users?count=${count}&page=${page}&term=${term}`)
    return res.data
  },
  async isFollowing (userID: number) {
    const res = await server.get<boolean>(`follow/${userID}`)
    return res.data
  },
  async follow (userID: number) {
    const res = await server.post<OperationResult>(`follow/${userID}`)
    return res.data
  },
  async unfollow (userID: number) {
    const res = await server.delete<OperationResult>(`follow/${userID}`)
    return res.data
  },
}

export const profileAPI = {
  async getProfile (userID: number) {
    const res = await server.get<ProfileType>(`profile/${userID}`)
    return res.data
  },
  async getStatus (userID: number) {
    const res = await server.get<string>(`profile/status/${userID}`)
    return res.data
  },
  async updateStatus (status: string) {
    const res = await server.put<OperationResult>(`profile/status`, { status: status })
    return res.data
  },
  async updatePhoto (photoFile: File) {
    const formData = new FormData()
    formData.append(`image`, photoFile)

    const res = await server.put<SavePhotoResponse>(`profile/photo`, formData, {
      headers: {
        'Content-Type':
          'multipart/form-data'
      }
    })

    return res.data
  },
  async updateProfile (profile: ProfileType) {
    const res = await server.put<OperationResult>(`profile`, profile)
    return res.data
  },
}

export const authAPI = {
  async me () {
    const res = await server.get<MeResponse>(`auth/me`)
    return res.data
  },
  async login (email: string, password: string, rememberMe = true, captcha: string) {
    const res = await server.post<LoginResponse>(`auth/login`, { email, password, rememberMe, captcha })
    return res.data
  },
  async logout () {
    const res = await server.post<OperationResult>(`auth/logout`)
    return res.data
  },
}

export const securityAPI = {
  async getCaptcha () {
    const res = await server.get<GetCaptchaResponse>(`security/get-captcha-url`)
    return res.data
  },
}

export const dialogsAPI = {
  // Сортировка человека вверх при начале чатинга
  async startChatting (userID: number) {
    const res = await server.put<OperationResult>(`dialogs/${userID}`)
    return res.data
  },
  // Получить все диалоги (без сообщений просто для вывода)
  async getAllDialogs () {
    const res = await server.get<Array<GetAllDialogsResponse>>(`dialogs`)
    return res.data
  },
  async getDialog (userID: number) {
    const res = await server.get<GetDialogResponse>(`dialogs/${userID}/messages`)
    return res.data
  },
  async sendMessage (userID: number, message: string) {
    const res = await server.post<SendMessageResponse>(`dialogs/${userID}/messages`, { body: message })
    return res.data
  },
  async isMessageViewed (messageID: string) {
    const res = await server.get<boolean>(`dialogs/messages/${messageID}/viewed`)
    return res.data
  },
  async putMessageInSpam (messageID: string) {
    const res = await server.post<OperationResult>(`dialogs/messages/${messageID}/spam`)
    return res.data
  },
  async deleteMessage (messageID: string) {
    const res = await server.delete<OperationResult>(`dialogs/messages/${messageID}`)
    return res.data
  },
  async restoreMessage (messageID: string) {
    const res = await server.put<OperationResult>(`dialogs/messages/${messageID}/restore`)
    return res.data
  },
  async messagesNewerThanDate (userID: number, date: string) {
    const res = await server.get<Array<messagesNewerThanDateResponse>>(
      `dialogs/${userID}/messages/new?newerThen=${date}`
    )
    return res.data
  },
  async getNewMessages () {
    const res = await server.get<number>(`dialogs/messages/new/count`)
    return res.data
  },
}

// dialogsAPI.startChatting(5).then(r => {console.log(r)})
// dialogsAPI.getAllDialogs().then(r => {console.log(r)})
// dialogsAPI.getDialog(5).then(r => {console.log(r)})
// dialogsAPI.sendMessage(5856, 'test').then(r => {console.log(r)})
// dialogsAPI.isMessageViewed('3e755133-76bf-4d8e-9ba4-80a1683973cd').then(r => {console.log(r)})
// dialogsAPI.putMessageInSpam('3e755133-76bf-4d8e-9ba4-80a1683973cd').then(r => {console.log(r)})
// dialogsAPI.deleteMessage('3e755133-76bf-4d8e-9ba4-80a1683973cd').then(r => {console.log(r)})
// dialogsAPI.restoreMessage('3e755133-76bf-4d8e-9ba4-80a1683973cd').then(r => {console.log(r)})
// dialogsAPI.messagesNewerThanDate(5, '2020-03-11T17:11:10.403').then(r => {console.log(r)})
// dialogsAPI.getNewMessages().then(r => {console.log(r)})
