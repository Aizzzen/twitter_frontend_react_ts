import {LoadingState, TagsState} from "./contracts/state";
import produce, {Draft} from "immer";
import {TagsActions} from "./actionCreators";
import {TagsActionsType} from "./actionTypes";

export const initialTagsState: TagsState = {
    items: [],
    loading_state: LoadingState.NEVER,
}

export const tagsReducer = produce((draft: Draft<TagsState>, action: TagsActions) => {

    switch (action.type) {
        case TagsActionsType.SET_TAGS:
            draft.items = action.payload
            draft.loading_state = LoadingState.LOADED
            break;

        case TagsActionsType.FETCH_TAGS:
            draft.items = []
            draft.loading_state = LoadingState.LOADING
            break;

        case TagsActionsType.SET_LOADING_STATE:
            draft.loading_state = action.payload
            break;

        default:
            break;
    }

}, initialTagsState)
