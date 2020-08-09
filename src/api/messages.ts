import server, { OperationData, OperationItems } from './server'
import { DialogType, InterlocutorType, MessagesAfterDateType } from '../types/types'

export const startChatting = async (userID: number) => {
  const res = await server.put<OperationData>(`dialogs/${userID}`)
  return res.data
}

export const getInterlocutors = async () => {
  const res = await server.get<InterlocutorType[]>('dialogs')
  return res.data
}

export const getDialog = async (userID: number) => {
  type getDialogRes = OperationItems<DialogType>

  const res = await server.get<getDialogRes>(`dialogs/${userID}/messages`)
  return res.data
}

export const sendMessage = async (userID: number, message: string) => {
  type SendMessageRes = OperationData<{
    message: MessagesAfterDateType
  }>

  const res = await server.post<SendMessageRes>(`dialogs/${userID}/messages`, { body: message })
  return res.data
}

export const readMessage = async (messageID: string) => {
  const res = await server.get<boolean>(`dialogs/messages/${messageID}/viewed`)
  return res.data
}

export const putMessageInSpam = async (messageID: string) => {
  const res = await server.post<OperationData>(`dialogs/messages/${messageID}/spam`)
  return res.data
}

export const deleteMessage = async (messageID: string) => {
  const res = await server.delete<OperationData>(`dialogs/messages/${messageID}`)
  return res.data
}

export const restoreMessage = async (messageID: string) => {
  const res = await server.put<OperationData>(`dialogs/messages/${messageID}/restore`)
  return res.data
}

export const getMessagesAfterDate = async (userID: number, date: string) => {
  const res = await server.get<MessagesAfterDateType[]>(`dialogs/${userID}/messages/new?newerThen=${date}`)
  return res.data
}

export const getNewMessagesCount = async () => {
  const res = await server.get<number>('dialogs/messages/new/count')
  return res.data
}
