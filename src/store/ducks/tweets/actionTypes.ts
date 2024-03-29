import {Action} from "redux";
import {AddFormState, LoadingState, Tweet, TweetsState} from "./contracts/state";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    SET_MORE_TWEETS = 'tweets/SET_MORE_TWEETS',
    SET_NEXT_PAGE = 'tweets/SET_NEXT_PAGE',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    FETCH_MORE_TWEETS = 'tweets/FETCH_MORE_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET',
    REMOVE_TWEET = 'tweets/REMOVE_TWEET',
    SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',
}


export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];
}

export interface SetMoreTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_MORE_TWEETS;
    payload: TweetsState['items'];
}

export interface SetNextPageActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_NEXT_PAGE;
    payload: TweetsState['next_page'];
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_TWEET;
    payload: {text: string, formData: FormData};
}

export interface AddTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_TWEET;
    payload: Tweet;
}

export interface RemoveTweetActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.REMOVE_TWEET;
    payload: string;
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS;
}

export interface FetchMoreTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_MORE_TWEETS;
    payload: {nextPage: string};
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export interface SetAddFormStateActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADD_FORM_STATE;
    payload: AddFormState;
}
