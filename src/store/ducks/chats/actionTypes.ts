import {Action} from "redux";
import {ChatsState, LoadingState} from "./contracts/state";

export enum ChatsActionsType {
    FETCH_CHATS = 'tweets/FETCH_CHATS',
    SET_CHATS = 'tweets/SET_CHATS',
}


export interface SetChatsActionInterface extends Action<ChatsActionsType> {
    type: ChatsActionsType.SET_CHATS;
    payload: ChatsState['items'];
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
export interface FetchChatsActionInterface extends Action<ChatsActionsType> {
    type: ChatsActionsType.FETCH_CHATS;
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
