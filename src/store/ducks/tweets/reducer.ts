import {LoadingState, TweetsState} from "./contracts/state";
import produce, {Draft} from "immer";
import {TweetsActions, TweetsActionsType} from "./actionCreators";

export const initialTweetsState: TweetsState = {
    items: [],
    loading_state: LoadingState.NEVER,
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {

    switch (action.type) {
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload
            draft.loading_state = LoadingState.LOADED
            break;

        case TweetsActionsType.FETCH_TWEETS:
            draft.items = []
            draft.loading_state = LoadingState.LOADING
            break;

        case TweetsActionsType.SET_LOADING_STATE:
            draft.loading_state = action.payload
            break;

        default:
            break;
    }

}, initialTweetsState)
