import {AddFormState, LoadingState} from "./ducks/tweets/contracts/state";
import {LoadingStatus} from "./types";
import {RootState} from "./store";


export const testState: RootState = {
    tweets: {
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
        loading_state: LoadingState.NEVER,
        add_form_state: AddFormState.NEVER,
    },
    tags: {
        items: [
            {
                _id: '2468727358670632-09',
                name: 'music',
                count: 27
            }
        ],
        loading_state: LoadingState.NEVER,
    },
    tweet: {
        data: {
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
        },
        loading_state: LoadingState.NEVER
    },
    user: {
        data: undefined,
        status: LoadingStatus.NEVER
    },
    users: {
        items: [],
        LoadingStatus: LoadingStatus.NEVER
    },
    chats: {
        items: [
            {id: '12'}
        ],
        loading_state: LoadingState.NEVER
    },
    chat: {
        user: undefined,
        next: false,
        items: [
            {id: '1'}
        ],
        loading_state: LoadingState.NEVER,
    },
}