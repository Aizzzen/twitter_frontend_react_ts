import {ChatsState, LoadingState} from './contracts/state';
import {
    ChatsActionsType,
    FetchChatsActionInterface,
    SetChatsActionInterface
} from "./actionTypes";


export const setChats = (payload: ChatsState['items']): SetChatsActionInterface => ({
    type: ChatsActionsType.SET_CHATS,
    payload,
});

export const fetchChats = (): FetchChatsActionInterface => ({
    type: ChatsActionsType.FETCH_CHATS,
});

export type ChatsActions =
    | SetChatsActionInterface
    | FetchChatsActionInterface
