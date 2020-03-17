/* Abstract */
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

/* Types */
export interface UserType {
  id: number
  name: string
  status: string
  photos: PhotosType
  followed: boolean
}

export interface ProfileType {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}

export interface ContactsType {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export interface PhotosType {
  small: string | null
  large: string | null
}

export interface PostType {
  id: number
  text: string
  likes: number
}

export interface UsersType extends ItemsResult {
  items: Array<UserType>
}

export interface SavePhotoType extends OperationResult {
  data: {
    photos: PhotosType
  }
}

export interface MeType extends OperationResult {
  data: {
    id: number
    email: string
    login: string
  }
}

export interface LoginType extends OperationResult {
  data: {
    userId: number
  }
}

export interface CaptchaType {
  url: string
}

export interface InterlocutorType {
  id: number
  userName: string
  hasNewMessages: boolean
  lastDialogActivityDate: string
  lastUserActivityDate: string
  newMessagesCount: number
  photos: PhotosType
}

export interface DialogType {
  id: string
  body: string
  translatedBody: null
  addedAt: string
  senderId: number
  senderName: string
  recipientId: number
  viewed: boolean
}

export interface DialogsType extends ItemsResult {
  items: Array<DialogType>
}

export interface MessagesAfterDateType {
  id: string
  body: string
  translatedBody: null
  addedAt: string
  senderId: number
  senderName: string
  recipientId: number
  viewed: boolean

  recipientName: string
  deletedBySender: boolean
  deletedByRecipient: boolean
  isSpam: boolean
  distributionId: null
}

export interface SendMessageType extends OperationResult {
  data: {
    message: MessagesAfterDateType
  }
}
