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

export interface FetchMessagesActionInterface extends Action<ChatActionsType> {
    type: ChatActionsType.FETCH_MESSAGES;
    payload: string;
}
