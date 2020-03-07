import axios from 'axios'
import { ProfileType } from '../types/types'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0408f290-d27f-4e1c-bba9-4d253322100f'
  }
})

export const usersAPI = {
  getUsers (count: number, page: number) {
    return instance.get(`users?count=${count}&page=${page}`).then((res) => res.data)
  },
  follow (userID: number) {
    return instance.post(`follow/${userID}`)
  },
  unfollow (userID: number) {
    return instance.delete(`follow/${userID}`)
  }
}

export const profileAPI = {
  getProfile (userID: number) {
    return instance.get(`profile/${userID}`)
  },
  getStatus (userID: number) {
    return instance.get(`profile/status/${userID}`)
  },
  updateStatus (status: string) {
    return instance.put('profile/status', { status: status })
  },
  savePhoto (photoFile: File) {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile (profile: ProfileType) {
    return instance.put('profile', profile)
  }
}

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodesForCaptchaEnum {
  CaptchaIsRequired = 10,
}

type MeResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}

type LoginResponseType = {
  data: {
    userId: number
  }
  resultCode: ResultCodesEnum | ResultCodesForCaptchaEnum
  messages: Array<string>
}

export const authAPI = {
  me () {
    return instance.get<MeResponseType>('auth/me').then(res => res.data)
  },
  login (email: string, password: string, rememberMe = false, captcha: string) {
    return instance.post<LoginResponseType>('auth/login', { email, password, rememberMe, captcha })
      .then(res => res.data)
  },
  logout () {
    return instance.delete('auth/login')
  }
}

export const securityAPI = {
  getCaptchaUrl () {
    return instance.get('security/get-captcha-url')
  }
}
