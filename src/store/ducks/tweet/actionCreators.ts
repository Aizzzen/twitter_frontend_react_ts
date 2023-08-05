import { Action } from 'redux';
import { LoadingState, TweetState } from './contracts/state';
import {ProfileFormProps} from "../../../components/ProfileModal";
import {FetchUpdateProfileActionInterface, UserActionsType} from "../user/actionTypes";
import {TweetModalFormProps} from "../../../components/TweetModal";
import {TweetsActionsType} from "../tweets/actionTypes";


export enum TweetActionsType {
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
    FETCH_UPDATE_TWEET = 'tweet/FETCH_UPDATE_TWEET',
    REMOVE_COMMENT = 'tweets/REMOVE_COMMENT',
}

export const setTweetData = (payload: TweetState['data']): SetTweetDataActionInterface => ({
    type: TweetActionsType.SET_TWEET_DATA,
    payload,
});

export interface SetTweetDataActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_TWEET_DATA;
    payload: TweetState['data'];
}

export interface FetchTweetDataActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_TWEET_DATA;
    payload: string;
}

export interface FetchUpdateTweetDataActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_UPDATE_TWEET;
    payload: { id: string, data: TweetModalFormProps };
}

export interface SetTweetLoadingStateActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export interface RemoveCommentActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.REMOVE_COMMENT;
    payload: { id: string };
}

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

export type TweetActions =
    | SetTweetDataActionInterface
    | FetchTweetDataActionInterface
    | SetTweetLoadingStateActionInterface
    | FetchUpdateTweetDataActionInterface
    | RemoveCommentActionInterface;
