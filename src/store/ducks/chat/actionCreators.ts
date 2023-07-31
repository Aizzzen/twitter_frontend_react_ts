import {ChatState, LoadingState} from './contracts/state';
import {
    ChatActionsType,
    FetchMessagesActionInterface, ReceiveMessagesActionInterface, SetChatUserActionInterface,
    SetMessagesActionInterface
} from "./actionTypes";


export const receiveMessages = (payload: ChatState['items']): ReceiveMessagesActionInterface => ({
    type: ChatActionsType.RECEIVE_MESSAGES,
    payload,
});

export const setMessages = (payload: ChatState['items']): SetMessagesActionInterface => ({
    type: ChatActionsType.SET_MESSAGES,
    payload,
});

export const setChatUser = (payload: ChatState['user']): SetChatUserActionInterface => ({
    type: ChatActionsType.SET_CHAT_USER,
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
export const fetchMessages = (payload: string): FetchMessagesActionInterface => ({
    type: ChatActionsType.FETCH_MESSAGES,
    payload,
});

//
export type ChatsActions =
    | SetMessagesActionInterface
    | FetchMessagesActionInterface
    | SetChatUserActionInterface
    | ReceiveMessagesActionInterface
    // | FetchAddCommentActionInterface
    // | SetTweetsLoadingStateActionInterface
    // | FetchAddTweetActionInterface
    // | AddTweetActionInterface
    // | AddTweetCommentActionInterface
    // | SetAddFormStateActionInterface
    // | RemoveTweetActionInterface;

