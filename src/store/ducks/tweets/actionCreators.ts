import {AddFormState, Comment, LoadingState, Tweet, TweetsState} from './contracts/state';
import {
    AddTweetActionInterface,
    AddTweetCommentActionInterface,
    FetchAddTweetActionInterface,
    FetchAddCommentActionInterface,
    FetchTweetsActionInterface,
    RemoveTweetActionInterface,
    SetAddFormStateActionInterface,
    SetTweetsActionInterface,
    SetTweetsLoadingStateActionInterface,
    TweetsActionsType,
    SetNextPageActionInterface,
    FetchMoreTweetsActionInterface,
    SetMoreTweetsActionInterface,
} from "./actionTypes";



export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
});

export const setMoreTweets = (payload: TweetsState['items']): SetMoreTweetsActionInterface => ({
    type: TweetsActionsType.SET_MORE_TWEETS,
    payload,
});

export const setNextPage = (payload: TweetsState['next_page']): SetNextPageActionInterface => ({
    type: TweetsActionsType.SET_NEXT_PAGE,
    payload,
});

export const fetchAddTweet = (payload: { formData: FormData, text: string }): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
});

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload,
});

export const fetchAddComment = (payload: { text: string, user: number, tweet: number }): FetchAddCommentActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_COMMENT,
    payload,
});

export const addComment = (payload: Comment): AddTweetCommentActionInterface => ({
    type: TweetsActionsType.ADD_COMMENT,
    payload,
});

export const setTweetsLoadingState = (
    payload: LoadingState,
): SetTweetsLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload,
});

export const setAddFormState = (payload: AddFormState): SetAddFormStateActionInterface => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload,
});

export const removeTweet = (payload: string): RemoveTweetActionInterface => ({
    type: TweetsActionsType.REMOVE_TWEET,
    payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
});

export const fetchMoreTweets = (payload: {nextPage: string}): FetchMoreTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_MORE_TWEETS,
    payload
});

export type TweetsActions =
    | SetTweetsActionInterface
    | FetchTweetsActionInterface
    | FetchAddCommentActionInterface
    | SetTweetsLoadingStateActionInterface
    | FetchAddTweetActionInterface
    | AddTweetActionInterface
    | AddTweetCommentActionInterface
    | SetAddFormStateActionInterface
    | RemoveTweetActionInterface
    | SetNextPageActionInterface
    | FetchMoreTweetsActionInterface
    | SetMoreTweetsActionInterface

