import {Action} from "redux";
import {ChatState, LoadingState} from "./contracts/state";

export enum ChatActionsType {
    FETCH_MESSAGES = 'tweets/FETCH_MESSAGES',
    FETCH_MORE_MESSAGES = 'tweets/FETCH_MORE_MESSAGES',
    SET_MORE_MESSAGES = 'tweets/SET_MORE_MESSAGES',
    SET_MESSAGES = 'tweets/SET_MESSAGES',
    SET_CHAT_USER = 'tweets/SET_CHAT_USER',
    RECEIVE_MESSAGES = 'tweets/RECEIVE_MESSAGES',
    SET_NEXT_LINK = 'tweets/SET_NEXT_LINK',
}

export interface ReceiveMessagesActionInterface extends Action<ChatActionsType> {
    type: ChatActionsType.RECEIVE_MESSAGES;
    payload: ChatState['items'];
}

export interface SetMessagesActionInterface extends Action<ChatActionsType> {
    type: ChatActionsType.SET_MESSAGES;
    payload: ChatState['items'];
}

export interface SetMoreMessagesActionInterface extends Action<ChatActionsType> {
    type: ChatActionsType.SET_MORE_MESSAGES;
    payload: any;
}

export interface SetIsNextLinkActionInterface extends Action<ChatActionsType> {
    type: ChatActionsType.SET_NEXT_LINK;
    payload: ChatState['next'];
}

export interface SetChatUserActionInterface extends Action<ChatActionsType> {
    type: ChatActionsType.SET_CHAT_USER;
    payload: ChatState['user'];
}

export interface FetchMessagesActionInterface extends Action<ChatActionsType> {
    type: ChatActionsType.FETCH_MESSAGES;
    payload: { chatId: string | number };
}

export interface FetchMoreMessagesActionInterface extends Action<ChatActionsType> {
    type: ChatActionsType.FETCH_MORE_MESSAGES;
    payload: { chatId: string | number, offset?: number };
}
