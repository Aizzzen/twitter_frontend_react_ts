import {ChatsState, LoadingState} from "./contracts/state";
import produce, {Draft} from "immer";
import {ChatsActions} from "./actionCreators";
import {ChatsActionsType} from "./actionTypes";

export const initialChatsState: ChatsState = {
    items: [],
    loading_state: LoadingState.NEVER,
}

export const chatsReducer = produce((draft: Draft<ChatsState>, action: ChatsActions) => {

    switch (action.type) {
        case ChatsActionsType.SET_CHATS:
            draft.items = action.payload
            draft.loading_state = LoadingState.LOADED
            break;

        default:
            break;
    }

}, initialChatsState)
