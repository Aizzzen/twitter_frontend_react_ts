import {LoadingState, TweetState} from "./contracts/state";
import produce, {Draft} from "immer";
import {TweetActions, TweetActionsType} from "./actionCreators";

const initialTweetState: TweetState = {
    data: undefined,
    loading_state: LoadingState.NEVER,
};

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {
    switch (action.type) {
        case TweetActionsType.SET_TWEET_DATA:
            draft.data = action.payload;
            draft.loading_state = LoadingState.LOADED;
            break;

        case TweetActionsType.FETCH_TWEET_DATA:
            draft.data = undefined;
            draft.loading_state = LoadingState.LOADING;
            break;

        case TweetActionsType.SET_LOADING_STATE:
            draft.loading_state = action.payload;
            break;

        default:
            break;
    }
}, initialTweetState);
