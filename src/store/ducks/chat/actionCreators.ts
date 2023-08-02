import {ChatState, LoadingState} from './contracts/state';
import {
    ChatActionsType,
    FetchMessagesActionInterface, FetchMoreMessagesActionInterface,
    ReceiveMessagesActionInterface,
    SetChatUserActionInterface,
    SetIsNextLinkActionInterface,
    SetMessagesActionInterface, SetMoreMessagesActionInterface
} from "./actionTypes";


export const receiveMessages = (payload: ChatState['items']): ReceiveMessagesActionInterface => ({
    type: ChatActionsType.RECEIVE_MESSAGES,
    payload,
});

export const setMessages = (payload: ChatState['items']): SetMessagesActionInterface => ({
    type: ChatActionsType.SET_MESSAGES,
    payload,
});

export const setMoreMessages = (payload: any): SetMoreMessagesActionInterface => ({
    type: ChatActionsType.SET_MORE_MESSAGES,
    payload,
});

export const setIsNextLink = (payload: ChatState['next']): SetIsNextLinkActionInterface => ({
    type: ChatActionsType.SET_NEXT_LINK,
    payload,
});

export const setChatUser = (payload: ChatState['user']): SetChatUserActionInterface => ({
    type: ChatActionsType.SET_CHAT_USER,
    payload,
});

export const fetchMessages = (payload: { chatId: string | number }): FetchMessagesActionInterface => ({
    type: ChatActionsType.FETCH_MESSAGES,
    payload,
});

export const fetchMoreMessages = (payload: { chatId: string | number, offset?: number }): FetchMoreMessagesActionInterface => ({
    type: ChatActionsType.FETCH_MORE_MESSAGES,
    payload,
});

//
export type ChatsActions =
    | SetMessagesActionInterface
    | FetchMessagesActionInterface
    | SetChatUserActionInterface
    | ReceiveMessagesActionInterface
    | SetIsNextLinkActionInterface
    | SetMoreMessagesActionInterface
    | FetchMoreMessagesActionInterface
