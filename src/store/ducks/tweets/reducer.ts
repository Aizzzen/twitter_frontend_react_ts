import {AddFormState, LoadingState, TweetsState} from "./contracts/state";
import produce, {Draft} from "immer";
import {TweetsActions} from "./actionCreators";
import {TweetsActionsType} from "./actionTypes";

export const initialTweetsState: TweetsState = {
    items: [],
    next_page: null,
    add_form_state: AddFormState.NEVER,
    loading_state: LoadingState.NEVER,
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {

    switch (action.type) {
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload
            draft.loading_state = LoadingState.LOADED
            break;

        case TweetsActionsType.SET_MORE_TWEETS:
            draft.items = [...draft.items, ...action.payload]
            draft.next_page = null
            draft.loading_state = LoadingState.LOADED
            break;

        case TweetsActionsType.SET_NEXT_PAGE:
            draft.next_page = action.payload
            break;

        case TweetsActionsType.FETCH_TWEETS:
            draft.items = []
            draft.loading_state = LoadingState.LOADING
            break;

        case TweetsActionsType.SET_LOADING_STATE:
            draft.loading_state = action.payload
            break;

        case TweetsActionsType.SET_ADD_FORM_STATE:
            draft.add_form_state = action.payload
            break;

        case TweetsActionsType.FETCH_ADD_TWEET:
            draft.add_form_state = AddFormState.LOADING
            break;

        case TweetsActionsType.REMOVE_TWEET:
            draft.items = draft.items.filter((obj) => obj.id !== action.payload)
            break;

        case TweetsActionsType.ADD_TWEET:
            draft.items.splice(0, 0, action.payload)
            // TODO: Подумать, какой статус выбрать, если твит был добавлен
            draft.add_form_state = AddFormState.NEVER
            break;

        default:
            break;
    }

}, initialTweetsState)
