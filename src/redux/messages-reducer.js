const initialState = {
    dialogs: [
        {id: 1, username: 'Димыч'},
        {id: 2, username: 'Саша'},
        {id: 3, username: 'Валера'},
        {id: 4, username: 'Иван'},
        {id: 5, username: 'Света'}
    ],
    messages: [
        {id: 1, username: 'Димыч', message: 'Я люблю react!'},
        {id: 2, username: 'Димыч', message: 'Я люблю react!'}
    ]
};

function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const nextId = state.messages[state.messages.length - 1].id + 1;
            const newMessage = {
                id: nextId,
                message: action.formData.message
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (formData) => ({
    type: 'SEND-MESSAGE',
    formData: formData
});

export default messagesReducer;