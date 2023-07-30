import {ChatsState, LoadingState} from './contracts/state';
import {ChatsActionsType, FetchChatsActionInterface, SetChatsActionInterface} from "./actionTypes";


export const setChats = (payload: ChatsState['items']): SetChatsActionInterface => ({
    type: ChatsActionsType.SET_CHATS,
    payload,
});
//
// export const fetchAddTweet = (payload: { formData: FormData, text: string }): FetchAddTweetActionInterface => ({
//     type: TweetsActionsType.FETCH_ADD_TWEET,
//     payload,
// });
//
// export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
//     type: TweetsActionsType.ADD_TWEET,
//     payload,
// });
//
// export const fetchAddComment = (payload: { text: string, user: number, tweet: number }): FetchAddCommentActionInterface => ({
//     type: TweetsActionsType.FETCH_ADD_COMMENT,
//     payload,
// });
//
// export const addComment = (payload: Comment): AddTweetCommentActionInterface => ({
//     type: TweetsActionsType.ADD_COMMENT,
//     payload,
// });
//
// export const setTweetsLoadingState = (
//     payload: LoadingState,
// ): SetTweetsLoadingStateActionInterface => ({
//     type: TweetsActionsType.SET_LOADING_STATE,
//     payload,
// });
//
// export const setAddFormState = (payload: AddFormState): SetAddFormStateActionInterface => ({
//     type: TweetsActionsType.SET_ADD_FORM_STATE,
//     payload,
// });
//
// export const removeTweet = (payload: string): RemoveTweetActionInterface => ({
//     type: TweetsActionsType.REMOVE_TWEET,
//     payload,
// });
//
export const fetchChats = (): FetchChatsActionInterface => ({
    type: ChatsActionsType.FETCH_CHATS,
});
//
export type ChatsActions =
    | SetChatsActionInterface
    | FetchChatsActionInterface
    // | FetchAddCommentActionInterface
    // | SetTweetsLoadingStateActionInterface
    // | FetchAddTweetActionInterface
    // | AddTweetActionInterface
    // | AddTweetCommentActionInterface
    // | SetAddFormStateActionInterface
    // | RemoveTweetActionInterface;

