import {ChatState, LoadingState} from "./contracts/state";
import produce, {Draft} from "immer";
import {ChatsActions} from "./actionCreators";
import {ChatActionsType} from "./actionTypes";

export const initialChatState: ChatState = {
    user: null,
    items: [],
    loading_state: LoadingState.NEVER,
}

export const chatReducer = produce((draft: Draft<ChatState>, action: ChatsActions) => {

    switch (action.type) {
        case ChatActionsType.SET_MESSAGES:
            draft.items = action.payload
            draft.loading_state = LoadingState.LOADED
            break;

        case ChatActionsType.SET_CHAT_USER:
            draft.user = action.payload
            // draft.loading_state = LoadingState.LOADED
            break;

        case ChatActionsType.FETCH_MESSAGES:
            draft.items = []
            draft.loading_state = LoadingState.LOADING
            break;

        case ChatActionsType.RECEIVE_MESSAGES:
            draft.items = [...draft.items, action.payload]
            draft.loading_state = LoadingState.LOADED
            break;

        default:
            break;
    }

}, initialChatState)
