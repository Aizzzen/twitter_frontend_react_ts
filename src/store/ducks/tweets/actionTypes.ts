import {Action} from "redux";
import {AddFormState, Comment, LoadingState, Tweet, TweetsState} from "./contracts/state";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET',
    FETCH_ADD_COMMENT = 'tweets/FETCH_ADD_COMMENT',
    ADD_COMMENT = 'tweets/ADD_COMMENT',
    REMOVE_TWEET = 'tweets/REMOVE_TWEET',
    SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',
}


export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_TWEET;
    payload: {text: string, formData: FormData};
}

export interface AddTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_TWEET;
    payload: Tweet;
}

export interface FetchAddCommentActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_COMMENT;
    payload: {text: string, user: number, tweet: number};
}


export interface AddTweetCommentActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_COMMENT;
    payload: Comment;
}

export interface RemoveTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.REMOVE_TWEET;
    payload: string;
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export interface SetAddFormStateActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADD_FORM_STATE;
    payload: AddFormState;
}
