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
