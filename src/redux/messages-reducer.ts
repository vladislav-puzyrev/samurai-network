const SEND_MESSAGE = 'samurai-network/messages/SEND_MESSAGE'

type DialogType = {
  id: number
  username: string
}

type MessageType = {
  id: number
  username: string
  message: string
}

const initialState = {
  dialogs: [
    { id: 1, username: 'Димыч' },
    { id: 2, username: 'Саша' },
    { id: 3, username: 'Валера' },
    { id: 4, username: 'Иван' },
    { id: 5, username: 'Света' },
  ] as Array<DialogType>,
  messages: [
    { id: 1, username: 'Димыч', message: 'Я люблю react!' },
    { id: 2, username: 'Димыч', message: 'Я люблю react!' },
  ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState;

function messagesReducer (state = initialState, action: any): InitialStateType {
  switch (action.type) {
    case SEND_MESSAGE:
      const nextId = state.messages[state.messages.length - 1].id + 1
      const newMessage = {
        id: nextId,
        username: 'username',
        message: action.formData.message,
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }
    default:
      return state
  }
}

type sendMessageActionCreatorActionType = {
  type: typeof SEND_MESSAGE
  formData: string
}

export const sendMessageActionCreator = (formData: string): sendMessageActionCreatorActionType => ({
  type: SEND_MESSAGE,
  formData: formData,
})

export default messagesReducer
