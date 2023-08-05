import {LoadingState, TweetState} from "./contracts/state";
import produce, {Draft} from "immer";
import {TweetActions} from "./actionCreators";
import {TweetActionsType} from "./actionTypes";

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

        case TweetActionsType.ADD_COMMENT:
            // @ts-ignore
            draft.data.comments = [...draft.data?.comments, action.payload]
            break;

        case TweetActionsType.REMOVE_COMMENT:
            // @ts-ignore
            draft.data.comments = draft.data?.comments.filter(comment => comment.id.toString() !== action.payload.id)
            break;

        case TweetActionsType.SET_LOADING_STATE:
            draft.loading_state = action.payload;
            break;

        default:
            break;
    }
}, initialTweetState);
