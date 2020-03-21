/* Abstract */
export interface IOperationData {
  data: Object
  messages: Array<string>
  resultCode: number
}

interface IOperationItems {
  items: Array<Object>
  totalCount: number
  error: string | null
}

/* Users */
export interface IUser {
  id: number
  name: string
  status: string
  photos: IPhotos
  followed: boolean
}

export interface IUsers extends IOperationItems {
  items: Array<IUser>
}

/* Profile */
export interface IProfile {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: IContacts
  photos: IPhotos
}

export interface IContacts {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export interface IPhotos {
  small: string | null
  large: string | null
}

export interface IUpdatePhoto extends IOperationData {
  data: {
    photos: IPhotos
  }
}

export interface IPost {
  id: number
  text: string
  likes: number
}

/* Auth */
export interface IMe extends IOperationData {
  data: {
    id: number
    email: string
    login: string
  }
}

export interface ILogin extends IOperationData {
  data: {
    userId: number
  }
}

/* Security */
export interface ICaptcha {
  url: string
}

/* Messages */
export interface IInterlocutor {
  id: number
  userName: string
  hasNewMessages: boolean
  lastDialogActivityDate: string
  lastUserActivityDate: string
  newMessagesCount: number
  photos: IPhotos
}

export interface IDialogs extends IOperationItems {
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

export interface ISendMessage extends IOperationData {
  data: {
    message: IMessagesAfterDate
  }
}

export interface IMessagesAfterDate {
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
