import {FetchTweetDataActionInterface, setTweetData, setTweetLoadingState, TweetActionsType} from "./actionCreators";
import {Tweet} from "../tweets/contracts/state";
import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState} from "./contracts/state";

export function* fetchTweetDataRequest({ payload: tweetId }: FetchTweetDataActionInterface) {
    try {
        const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweetData(data));
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR));
    }
}

export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
