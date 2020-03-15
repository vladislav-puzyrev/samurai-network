import { PhotosType, UserType } from './AppTypes'

export interface OperationResult {
  data: Object
  messages: Array<string>
  resultCode: number
}

interface ItemsResult {
  items: Array<Object>
  totalCount: number
  error: string | null
}

export interface GetUsersResponse extends ItemsResult {
  items: Array<UserType>
}

export interface SavePhotoResponse extends OperationResult {
  data: {
    photos: PhotosType
  }
}

export interface MeResponse extends OperationResult {
  data: {
    id: number
    email: string
    login: string
  }
}

export interface LoginResponse extends OperationResult {
  data: {
    userId: number
  }
}

export interface GetCaptchaResponse {
  url: string
}

// Dialogs
export interface GetAllDialogsResponse {
  id: number
  userName: string
  hasNewMessages: boolean
  lastDialogActivityDate: string
  lastUserActivityDate: string
  newMessagesCount: number
  photos: PhotosType
}

export interface GetDialogResponse extends ItemsResult {
  items: Array<{
    id: string
    body: string
    translatedBody: null
    addedAt: string
    senderId: number
    senderName: string
    recipientId: number
    viewed: boolean
  }>
}

export interface messagesAfterDateResponse {
  id: string
  body: string
  translatedBody: null
  addedAt: string
  senderId: number
  senderName: string
  recipientId: number
  recipientName: string
  viewed: boolean
  deletedBySender: boolean
  deletedByRecipient: boolean
  isSpam: boolean
  distributionId: null
}

export interface SendMessageResponse extends OperationResult {
  data: {
    message: messagesAfterDateResponse
  }
}
