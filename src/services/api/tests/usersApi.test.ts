import {UserApi} from "../usersApi"
import {axios} from "../../../core/axios"
jest.mock('axios')

describe('Получение данных пользователя', () => {
    let response: any
    beforeEach(() => {
        response = {
            data: {
                date_joined :"2023-07-10T20:35:14.041565+03:00",
                email: "yunus444@gmail.com",
                id: 5,
                is_active: true,
                profile: {
                    fullname: 'Yunus G',
                    location: 'Russia',
                    about: 'Норм чел',
                    website: 'http://localhost:3000/user/me'
                },
                username: "yunus444"
            }
        }
    })
    test('Корреткное значение getCurrentUserData', async () => {
        (axios.get as jest.Mock).mockResolvedValue(response)
        const {data} = await UserApi.getCurrentUserData()
        expect(axios.get).toBeCalledTimes(1)
        expect(data).toStrictEqual(
            {
                date_joined :"2023-07-10T20:35:14.041565+03:00",
                email: "yunus444@gmail.com",
                id: 5,
                is_active: true,
                profile: {
                    fullname: 'Yunus G',
                    location: 'Russia',
                    about: 'Норм чел',
                    website: 'http://localhost:3000/user/me'
                },
                username: "yunus444"
            }
        )
    })
})