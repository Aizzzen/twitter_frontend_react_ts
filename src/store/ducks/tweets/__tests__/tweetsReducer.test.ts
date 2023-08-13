import {tweetsReducer} from "../reducer"
import {testState} from "../testState";
import {
    addTweet,
    fetchAddTweet,
    fetchTweets, removeTweet,
    setAddFormState,
    setMoreTweets,
    setNextPage,
    setTweets,
    setTweetsLoadingState
} from "../actionCreators";
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
    test('SET_NEXT_PAGE', () => {
        expect(tweetsReducer(testState.tweets, setNextPage('2'))).toStrictEqual({
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
            ],
            next_page: '2',
            loading_state: LoadingState.NEVER,
            add_form_state: AddFormState.NEVER,
        })
    })
    test('FETCH_TWEETS', () => {
        expect(tweetsReducer(testState.tweets, fetchTweets())).toStrictEqual({
            items: [],
            next_page: null,
            loading_state: LoadingState.LOADING,
            add_form_state: AddFormState.NEVER,
        })
    })
    test('SET_LOADING_STATE', () => {
        expect(tweetsReducer(testState.tweets, setTweetsLoadingState(LoadingState.ERROR))).toStrictEqual({
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
            ],
            next_page: null,
            loading_state: LoadingState.ERROR,
            add_form_state: AddFormState.NEVER,
        })
    })
    test('SET_ADD_FORM_STATE', () => {
        expect(tweetsReducer(testState.tweets, setAddFormState(AddFormState.ERROR))).toStrictEqual({
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
            ],
            next_page: null,
            loading_state: LoadingState.NEVER,
            add_form_state: AddFormState.ERROR,
        })
    })
    test('FETCH_ADD_TWEET', () => {
        expect(tweetsReducer(testState.tweets, fetchAddTweet({formData: new FormData(), text: 'test tweet text'}))).toStrictEqual({
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
            ],
            next_page: null,
            loading_state: LoadingState.NEVER,
            add_form_state: AddFormState.LOADING,
        })
    })
    test('REMOVE_TWEET', () => {
        expect(tweetsReducer(testState.tweets, removeTweet('1'))).toStrictEqual({
            items: [],
            next_page: null,
            loading_state: LoadingState.NEVER,
            add_form_state: AddFormState.NEVER,
        })
    })
    test('ADD_TWEET', () => {
        expect(tweetsReducer(testState.tweets, addTweet(
            {
                id: '3',
                text: 'add test tweet',
                created_at: 'недавно 3',
                username: 'yunus333',
                comments: [
                    {
                        id: 13,
                        text: 'add tweet test comment',
                        created_at: new Date(2023, 0, 1),
                        tweet: 3,
                        user: 21
                    }
                ],
            },
        ))).toStrictEqual({
            items: [
                {
                    id: '3',
                    text: 'add test tweet',
                    created_at: 'недавно 3',
                    username: 'yunus333',
                    comments: [
                        {
                            id: 13,
                            text: 'add tweet test comment',
                            created_at: new Date(2023, 0, 1),
                            tweet: 3,
                            user: 21
                        }
                    ],
                },
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
            ],
            next_page: null,
            loading_state: LoadingState.NEVER,
            add_form_state: AddFormState.NEVER,
        })
    })
})