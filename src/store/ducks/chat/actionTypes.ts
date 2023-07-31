import {Action} from "redux";
import {ChatState, LoadingState} from "./contracts/state";

export enum ChatActionsType {
    FETCH_MESSAGES = 'tweets/FETCH_MESSAGES',
    SET_MESSAGES = 'tweets/SET_MESSAGES',
    SET_CHAT_USER = 'tweets/SET_CHAT_USER',
    RECEIVE_MESSAGES = 'tweets/RECEIVE_MESSAGES',
}

export interface ReceiveMessagesActionInterface extends Action<ChatActionsType> {
    type: ChatActionsType.RECEIVE_MESSAGES;
    payload: ChatState['items'];
}

export interface SetMessagesActionInterface extends Action<ChatActionsType> {
    type: ChatActionsType.SET_MESSAGES;
    payload: ChatState['items'];
}

export interface SetChatUserActionInterface extends Action<ChatActionsType> {
    type: ChatActionsType.SET_CHAT_USER;
    payload: ChatState['user'];
}
//
// export interface FetchAddTweetActionInterface extends Action<TweetsActionsType> {
//     type: TweetsActionsType.FETCH_ADD_TWEET;
//     payload: {text: string, formData: FormData};
// }
//
// export interface AddTweetActionInterface extends Action<TweetsActionsType> {
//     type: TweetsActionsType.ADD_TWEET;
//     payload: Tweet;
// }
//
// export interface FetchAddCommentActionInterface extends Action<TweetsActionsType> {
//     type: TweetsActionsType.FETCH_ADD_COMMENT;
//     payload: {text: string, user: number, tweet: number};
// }
//
//
// export interface AddTweetCommentActionInterface extends Action<TweetsActionsType> {
//     type: TweetsActionsType.ADD_COMMENT;
//     payload: Comment;
// }
//
// export interface RemoveTweetActionInterface extends Action<TweetsActionsType> {
//     type: TweetsActionsType.REMOVE_TWEET;
//     payload: string;
// }
//
export interface FetchMessagesActionInterface extends Action<ChatActionsType> {
    type: ChatActionsType.FETCH_MESSAGES;
    payload: string;
}
//
// export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsType> {
//     type: TweetsActionsType.SET_LOADING_STATE;
//     payload: LoadingState;
// }
//
// export interface SetAddFormStateActionInterface extends Action<TweetsActionsType> {
//     type: TweetsActionsType.SET_ADD_FORM_STATE;
//     payload: AddFormState;
// }
