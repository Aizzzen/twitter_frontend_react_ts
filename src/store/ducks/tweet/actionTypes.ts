import { Action } from 'redux';
import { LoadingState, TweetState } from './contracts/state';
import {TweetModalFormProps} from "../../../components/TweetModal";
import {Comment} from "../tweets/contracts/state";
import {TweetsActionsType} from "../tweets/actionTypes";


export enum TweetActionsType {
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
    FETCH_UPDATE_TWEET = 'tweet/FETCH_UPDATE_TWEET',
    REMOVE_COMMENT = 'tweets/REMOVE_COMMENT',
    FETCH_ADD_COMMENT = 'tweets/FETCH_ADD_COMMENT',
    ADD_COMMENT = 'tweets/ADD_COMMENT',
}

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

export interface FetchAddCommentActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_ADD_COMMENT;
    payload: {text: string, user: number, tweet: number};
}


export interface AddTweetCommentActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.ADD_COMMENT;
    payload: Comment;
}
