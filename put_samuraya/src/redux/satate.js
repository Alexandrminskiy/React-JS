
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'привет как дела ?', likesCount: 12 },
            { id: 2, message: 'какая хорошая погода сегодня?', likesCount: 11 },
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Дима' },
            { id: 2, name: 'Женя' },
            { id: 3, name: 'Лена' },
            { id: 4, name: 'Тусик' },
        ],
        messages: [
            { id: 1, message: 'hello' },
            { id: 2, message: 'привет' },
            { id: 3, message: 'как дела' },
            { id: 4, message: 'что делаешь ?' },
        ]
    }
}

export default state