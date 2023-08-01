import {Action} from "redux";
import {ChatsState, LoadingState} from "./contracts/state";

export enum ChatsActionsType {
    FETCH_CHATS = 'tweets/FETCH_CHATS',
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

export interface FetchMessagesActionInterface extends Action<ChatsActionsType> {
    type: ChatsActionsType.FETCH_MESSAGES;
    payload: string;
}
