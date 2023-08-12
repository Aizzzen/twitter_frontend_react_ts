import {TweetsApi} from "../tweetsApi"
import {axios} from "../../../core/axios"
jest.mock('axios')

describe('Получение всех твитов', () => {
    let response: any
    beforeEach(() => {
        response = {
            data: [
                {
                    count: 27,
                    next: "http://127.0.0.1:8000/api/v1/tweets/?page=2",
                    previous: null,
                    results: [
                        {
                            id: 54,
                            text: "сообщения пустоты",
                            username: "yunus777",
                            fullname: "Миямото Мусаси",
                            photos: [],
                            comments: [],
                            likes: 0,
                            created_at: "2023-08-05T19:42:37.081684+03:00",
                            updated_at: "2023-08-05T19:42:37.081684+03:00",
                        }
                    ]
                }
            ]
        }
    })
    test('Корректное значение для fetchTweets', async () => {
        (axios.get as jest.Mock).mockResolvedValue(response)
        const data = await TweetsApi.fetchTweets()
        expect(axios.get).toBeCalledTimes(1)
        // @ts-ignore
        expect(data[0]).toStrictEqual({
            count: 27,
            next: "http://127.0.0.1:8000/api/v1/tweets/?page=2",
            previous: null,
            results: [
                {
                    id: 54,
                    text: "сообщения пустоты",
                    username: "yunus777",
                    fullname: "Миямото Мусаси",
                    photos: [],
                    comments: [],
                    likes: 0,
                    created_at: "2023-08-05T19:42:37.081684+03:00",
                    updated_at: "2023-08-05T19:42:37.081684+03:00",
                }
            ]
        })
    })
})

describe('Подгрузка большего количества твитов', () => {
    let response: any
    beforeEach(() => {
        response = {
            data: [
                {
                    count: 27,
                    next: null,
                    previous: "http://127.0.0.1:8000/api/v1/tweets/",
                    results: [
                        {
                            id: 54,
                            text: "сообщения пустоты",
                            username: "yunus777",
                            fullname: "Миямото Мусаси",
                            photos: [],
                            comments: [],
                            likes: 0,
                            created_at: "2023-08-05T19:42:37.081684+03:00",
                            updated_at: "2023-08-05T19:42:37.081684+03:00",
                        }
                    ]
                }
            ]
        }
    })
    test('Корректное значение для fetchMoreTweets', async () => {
        (axios.get as jest.Mock).mockResolvedValue(response)
        const data = await TweetsApi.fetchMoreTweets({nextPage: '2'})
        expect(axios.get).toBeCalledTimes(1)
        // @ts-ignore
        expect(data[0]).toStrictEqual({
            count: 27,
            next: null,
            previous: "http://127.0.0.1:8000/api/v1/tweets/",
            results: [
                {
                    id: 54,
                    text: "сообщения пустоты",
                    username: "yunus777",
                    fullname: "Миямото Мусаси",
                    photos: [],
                    comments: [],
                    likes: 0,
                    created_at: "2023-08-05T19:42:37.081684+03:00",
                    updated_at: "2023-08-05T19:42:37.081684+03:00",
                }
            ]
        })
    })
})

describe('Получение своих твитов / твитов нынешнего пользователя', () => {
    let response: any
    beforeEach(() => {
        response = {
            data: [
                {
                    id: 54,
                    text: "сообщения пустоты",
                    username: "yunus777",
                    fullname: "Миямото Мусаси",
                    photos: [],
                    comments: [],
                    likes: 0,
                    created_at: "2023-08-05T19:42:37.081684+03:00",
                    updated_at: "2023-08-05T19:42:37.081684+03:00",
                }
            ]
        }
    })
    test('Корректное значение для fetchCurrentUserTweets', async () => {
        (axios.get as jest.Mock).mockResolvedValue(response)
        const data = await TweetsApi.fetchCurrentUserTweets()
        expect(axios.get).toBeCalledTimes(1)
        // @ts-ignore
        expect(data[0]).toStrictEqual(
            {
                id: 54,
                text: "сообщения пустоты",
                username: "yunus777",
                fullname: "Миямото Мусаси",
                photos: [],
                comments: [],
                likes: 0,
                created_at: "2023-08-05T19:42:37.081684+03:00",
                updated_at: "2023-08-05T19:42:37.081684+03:00",
            }
        )
    })
})
