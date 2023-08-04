import {ChatsState, LoadingState} from './contracts/state';
import {
    ChatsActionsType,
    FetchChatsActionInterface, FetchCreateChatActionInterface,
    SetChatsActionInterface
} from "./actionTypes";


export const setChats = (payload: ChatsState['items']): SetChatsActionInterface => ({
    type: ChatsActionsType.SET_CHATS,
    payload,
});

export const fetchChats = (): FetchChatsActionInterface => ({
    type: ChatsActionsType.FETCH_CHATS,
});

export const fetchCreateChat = (payload: { user1: string, user2: string }): FetchCreateChatActionInterface => ({
    type: ChatsActionsType.FETCH_CREATE_CHAT,
    payload,
});

export type ChatsActions =
    | SetChatsActionInterface
    | FetchChatsActionInterface
    | FetchCreateChatActionInterface
