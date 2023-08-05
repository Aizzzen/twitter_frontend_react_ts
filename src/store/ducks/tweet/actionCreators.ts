import { LoadingState, TweetState } from './contracts/state';
import {TweetModalFormProps} from "../../../components/TweetModal";
import {Comment} from "../tweets/contracts/state";
import {
    AddTweetCommentActionInterface,
    FetchAddCommentActionInterface,
    FetchTweetDataActionInterface, FetchUpdateTweetDataActionInterface, RemoveCommentActionInterface,
    SetTweetDataActionInterface,
    SetTweetLoadingStateActionInterface, TweetActionsType
} from "./actionTypes";


export const setTweetData = (payload: TweetState['data']): SetTweetDataActionInterface => ({
    type: TweetActionsType.SET_TWEET_DATA,
    payload,
});

export const setTweetLoadingState = (
    payload: LoadingState,
): SetTweetLoadingStateActionInterface => ({
    type: TweetActionsType.SET_LOADING_STATE,
    payload,
});

export const fetchTweetData = (payload: string): FetchTweetDataActionInterface => ({
    type: TweetActionsType.FETCH_TWEET_DATA,
    payload,
});

export const fetchUpdateTweet = (payload: {id: string, data: TweetModalFormProps}): FetchUpdateTweetDataActionInterface => ({
    type: TweetActionsType.FETCH_UPDATE_TWEET,
    payload,
});

export const removeComment = (payload: { id: string }): RemoveCommentActionInterface => ({
    type: TweetActionsType.REMOVE_COMMENT,
    payload,
});

export const fetchAddComment = (payload: { text: string, user: number, tweet: number }): FetchAddCommentActionInterface => ({
    type: TweetActionsType.FETCH_ADD_COMMENT,
    payload,
});

export const addComment = (payload: Comment): AddTweetCommentActionInterface => ({
    type: TweetActionsType.ADD_COMMENT,
    payload,
});

export type TweetActions =
    | SetTweetDataActionInterface
    | FetchTweetDataActionInterface
    | SetTweetLoadingStateActionInterface
    | FetchUpdateTweetDataActionInterface
    | RemoveCommentActionInterface
    | FetchAddCommentActionInterface
    | AddTweetCommentActionInterface;
