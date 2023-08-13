import {tweetsReducer} from "../reducer"
import {testState} from "../testState";
import {setMoreTweets, setTweets} from "../actionCreators";
import {AddFormState, LoadingState} from "../contracts/state";

describe('Тестирование tweetsReducer', () => {
    test('SET_TWEETS', () => {
        expect(tweetsReducer(testState.tweets, setTweets([
            {
                id: '1',
                text: 'test tweet',
                created_at: 'недавно',
                username: 'yunus111',
                comments: [
                    {
                        id: 1,
                        text: 'test comment',
                        created_at: new Date(2023, 0, 1),
                        tweet: 1,
                        user: 2
                    }
                ]
            }
        ]))).toStrictEqual({
            items: [
                {
                    id: '1',
                    text: 'test tweet',
                    created_at: 'недавно',
                    username: 'yunus111',
                    comments: [
                        {
                            id: 1,
                            text: 'test comment',
                            created_at: new Date(2023, 0, 1),
                            tweet: 1,
                            user: 2
                        }
                    ]
                }
            ],
            next_page: null,
            loading_state: LoadingState.LOADED,
            add_form_state: AddFormState.NEVER,
        })
    })
    test('SET_MORE_TWEETS', () => {
        expect(tweetsReducer(testState.tweets, setMoreTweets([
            {
                id: '2',
                text: 'test tweet 2',
                created_at: 'недавно 2',
                username: 'yunus222',
                comments: [
                    {
                        id: 2,
                        text: 'test comment',
                        created_at: new Date(2023, 0, 1),
                        tweet: 2,
                        user: 3
                    }
                ]
            }
        ]))).toStrictEqual({
            items: [
                {
                    id: '1',
                    text: 'test tweet',
                    created_at: 'недавно',
                    username: 'yunus111',
                    comments: [
                        {
                            id: 1,
                            text: 'test comment',
                            created_at: new Date(2023, 0, 1),
                            tweet: 1,
                            user: 2
                        }
                    ],
                },
                {
                    id: '2',
                    text: 'test tweet 2',
                    created_at: 'недавно 2',
                    username: 'yunus222',
                    comments: [
                        {
                            id: 2,
                            text: 'test comment',
                            created_at: new Date(2023, 0, 1),
                            tweet: 2,
                            user: 3
                        }
                    ]
                }
            ],
            next_page: null,
            loading_state: LoadingState.LOADED,
            add_form_state: AddFormState.NEVER,
        })
    })
})