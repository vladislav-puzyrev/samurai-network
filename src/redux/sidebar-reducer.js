const initialState = {
    friends: [
        {
            id: 1,
            username: 'Димыч',
            avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
        },
        {
            id: 2,
            username: 'Колян',
            avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
        },
        {
            id: 3,
            username: 'Серега',
            avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
        }
    ]
};

function sidebarReducer(state = initialState, action) {
    return state;
}

export default sidebarReducer;