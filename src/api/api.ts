import axios from 'axios'
import {
  GetUsersResponse,
  OperationResult,
  SavePhotoResponse,
  MeResponse,
  LoginResponse,
  GetCaptchaResponse
} from '../types/APITypes'
import { ProfileType } from '../types/AppTypes'

const server = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0408f290-d27f-4e1c-bba9-4d253322100f'
  }
})

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodesForCaptchaEnum {
  CaptchaIsRequired = 10,
}

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
  }
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
    const res = await server.put<OperationResult>('profile/status', { status: status })
    return res.data
  },
  async updatePhoto (photoFile: File) {
    const formData = new FormData()
    formData.append('image', photoFile)

    const res = await server.put<SavePhotoResponse>('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    return res.data
  },
  async updateProfile (profile: ProfileType) {
    const res = await server.put<OperationResult>('profile', profile)
    return res.data
  }
}

export const authAPI = {
  async me () {
    const res = await server.get<MeResponse>('auth/me')
    return res.data
  },
  async login (email: string, password: string, rememberMe = true, captcha: string) {
    const res = await server.post<LoginResponse>('auth/login', { email, password, rememberMe, captcha })
    return res.data
  },
  async logout () {
    const res = await server.delete<OperationResult>('auth/login')
    return res.data
  }
}

export const securityAPI = {
  async getCaptcha () {
    const res = await server.get<GetCaptchaResponse>('security/get-captcha-url')
    return res.data
  }
}
