import axios from 'axios'
import {
  UsersType,
  OperationResult,
  SavePhotoType,
  MeType,
  LoginType,
  CaptchaType,
  InterlocutorType,
  DialogsType,
  SendMessageType,
  MessagesAfterDateType,
  ProfileType
} from '../types/types'

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
    const res = await server.get<UsersType>(`users?count=${count}&page=${page}&term=${term}`)
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

    const res = await server.put<SavePhotoType>(`profile/photo`, formData, {
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
    const res = await server.get<MeType>(`auth/me`)
    return res.data
  },
  async login (email: string, password: string, rememberMe = true, captcha: string) {
    const res = await server.post<LoginType>(`auth/login`, { email, password, rememberMe, captcha })
    return res.data
  },
  async logout () {
    const res = await server.post<OperationResult>(`auth/logout`)
    return res.data
  },
}

export const securityAPI = {
  async getCaptcha () {
    const res = await server.get<CaptchaType>(`security/get-captcha-url`)
    return res.data
  },
}

export const messagesAPI = {
  async startChatting (userID: number) {
    const res = await server.put<OperationResult>(`dialogs/${userID}`)
    return res.data
  },
  async getInterlocutorsList () {
    const res = await server.get<Array<InterlocutorType>>(`dialogs`)
    return res.data
  },
  async getDialog (userID: number) {
    const res = await server.get<DialogsType>(`dialogs/${userID}/messages`)
    return res.data
  },
  async sendMessage (userID: number, message: string) {
    const res = await server.post<SendMessageType>(`dialogs/${userID}/messages`, { body: message })
    return res.data
  },
  async readMessage (messageID: string) {
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
  async getMessagesAfterDate (userID: number, date: string) {
    const res = await server.get<Array<MessagesAfterDateType>>(
      `dialogs/${userID}/messages/new?newerThen=${date}`
    )
    return res.data
  },
  async getNewMessagesCount () {
    const res = await server.get<number>(`dialogs/messages/new/count`)
    return res.data
  },
}
