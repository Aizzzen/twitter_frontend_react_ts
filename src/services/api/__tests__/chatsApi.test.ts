import {ChatsApi} from "../chatsApi";
import {axios} from "../../../core/axios"
jest.mock('axios')

describe('Получение своих чатов', () => {
    let response: any
    beforeEach(() => {
        response = {
            data: {
                18: {
                    fullname:"Yunus G",
                    user_id: 5,
                    username: "yunus444"
                }
            }
        }
    })
    test('Корректное значение для fetchChats', async () => {
        (axios.get as jest.Mock).mockResolvedValue(response)
        const data = await ChatsApi.fetchChats()
        expect(axios.get).toBeCalledTimes(1)
        expect(data).toStrictEqual(
            {
                18: {
                    fullname:"Yunus G",
                    user_id: 5,
                    username: "yunus444"
                }
            }
        )
    })
})

describe('Получение сообщений из конкретного чата', () => {
    let response: any
    beforeEach(() => {
        response = {
            data: {
                msgs: {next: null, results: []},
                user: {id: 6, username: 'yunus555'}
            }
        }
    })
    test('Корректное значение для fetchMessages', async () => {
        (axios.get as jest.Mock).mockResolvedValue(response)
        const data = await ChatsApi.fetchMessages(12)
        expect(axios.get).toBeCalledTimes(1)
        expect(data).toStrictEqual(
            {
                msgs: {next: null, results: []},
                user: {id: 6, username: 'yunus555'}
            }
        )
    })
})

describe('Подгрузка большего количества сообщений из конкретного чата', () => {
    let response: any
    beforeEach(() => {
        response = {
            data: {
                msgs: {
                    next: "http://127.0.0.1:8000/api/v1/chat/listmsgs/12/?limit=20&offset=60",
                    results: [
                        {id: 36, text: 'qeveqebeb', user: 5, created_at: '2023-07-31T19:48:42.725600+03:00'}
                    ]
                }
            }
        }
    })
    test('Корректное значение для fetchMoreMessages', async () => {
        (axios.get as jest.Mock).mockResolvedValue(response)
        const data = await ChatsApi.fetchMoreMessages(12, 60)
        expect(axios.get).toBeCalledTimes(1)
        expect(data).toStrictEqual(
            {
                msgs: {
                    next: "http://127.0.0.1:8000/api/v1/chat/listmsgs/12/?limit=20&offset=60",
                    results: [
                        {id: 36, text: 'qeveqebeb', user: 5, created_at: '2023-07-31T19:48:42.725600+03:00'}
                    ]
                }
            }
        )
    })
})

// describe('Создание чата', () => {
//     let response: any
//     beforeEach(() => {
//         response = {
//             data: {
//
//             }
//         }
//     })
//     test('Корректное значение для fetchCreateChat', async () => {
//         (axios.get as jest.Mock).mockResolvedValue(response)
//         const data = await ChatsApi.fetchCreateChat({ user1: '1', user2: '2' })
//         expect(axios.get).toBeCalledTimes(1)
//         expect(data).toStrictEqual(
//             {
//                 chat_id: 20
//             }
//         )
//     })
// })