export type UserType = {
  id: number
  name: string
  status: string | null
  photos: PhotosType
  followed: boolean
}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  aboutMe: string
  contacts: ContactsType
  photos: PhotosType
}

export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type PhotosType = {
  small: string | null
  large: string | null
}

export type PostType = {
  id: number
  text: string
  likes: number
}

export type InterlocutorType = {
  id: number
  userName: string
  hasNewMessages: boolean
  lastDialogActivityDate: string
  lastUserActivityDate: string
  newMessagesCount: number
  photos: PhotosType
}

export type DialogType = {
  id: string
  body: string
  translatedBody: null
  addedAt: string
  senderId: number
  senderName: string
  recipientId: number
  viewed: boolean
}

export type MessagesAfterDateType = {
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
