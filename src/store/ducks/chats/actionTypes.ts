import {Action} from "redux";
import {ChatsState, LoadingState} from "./contracts/state";

export enum ChatsActionsType {
    FETCH_CHATS = 'tweets/FETCH_CHATS',
    FETCH_CREATE_CHAT = 'tweets/FETCH_CREATE_CHAT',
    SET_CHATS = 'tweets/SET_CHATS',
    FETCH_MESSAGES = 'tweets/FETCH_MESSAGES',
    SET_MESSAGES = 'tweets/SET_MESSAGES',
}


export interface SetChatsActionInterface extends Action<ChatsActionsType> {
    type: ChatsActionsType.SET_CHATS;
    payload: ChatsState['items'];
}

export interface SetMessagesActionInterface extends Action<ChatsActionsType> {
    type: ChatsActionsType.SET_MESSAGES;
    payload: ChatsState['items'];
}

export interface FetchChatsActionInterface extends Action<ChatsActionsType> {
    type: ChatsActionsType.FETCH_CHATS;
}

export interface FetchCreateChatActionInterface extends Action<ChatsActionsType> {
    type: ChatsActionsType.FETCH_CREATE_CHAT;
    payload: { user1: string, user2: string };
}

export interface FetchMessagesActionInterface extends Action<ChatsActionsType> {
    type: ChatsActionsType.FETCH_MESSAGES;
    payload: string;
}
