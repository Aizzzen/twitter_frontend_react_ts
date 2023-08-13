import {
    selectAddFormState,
    selectIsTweetsLoaded,
    selectIsTweetsLoading,
    selectLoadingState, selectNextPage,
    selectTweets, selectTweetsItems
} from "../selectors";
import {AddFormState, LoadingState} from "../contracts/state";
import {testState} from "../testState";

describe('Тестирование селекторов tweets', () => {
    test('selectTweets', () => {
        expect(selectTweets(testState)).toStrictEqual({
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
        })
    })
    test('selectLoadingState', () => {
        expect(selectLoadingState(testState)).toBe('NEVER')
    })
    test('selectAddFormState', () => {
        expect(selectAddFormState(testState)).toBe('NEVER')
    })
    test('selectIsTweetsLoading', () => {
        expect(selectIsTweetsLoading(testState)).toBeFalsy()
    })
    test('selectIsTweetsLoaded', () => {
        expect(selectIsTweetsLoaded(testState)).toBeFalsy()
    })
    test('selectTweetsItems', () => {
        expect(selectTweetsItems(testState)).toStrictEqual(
            [
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
            ]
        )
    })
    test('selectNextPage', () => {
        expect(selectNextPage(testState)).toBeNull()
    })
})