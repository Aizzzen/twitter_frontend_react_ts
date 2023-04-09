import {call, put, takeLatest} from "redux-saga/effects";
import {addTweet, setAddFormState, setTweets, setTweetsLoadingState} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {AddFormState, LoadingState} from "./contracts/state";
import {FetchAddTweetActionInterface, RemoveTweetActionInterface, TweetsActionsType} from "./actionTypes";


// yield put === dispatch
export function* fetchTweetsRequest() {
    try {
        let items = []
        const pathname = window.location.pathname
        const user = pathname.includes('/user')
        if(user) {
            items = yield call(TweetsApi.fetchCurrentUserTweets)
        } else {
            items = yield call(TweetsApi.fetchTweets)
        }
        yield put(setTweets(items))
    }
    catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface) {
    try {
        // @ts-ignore
        const item = yield call(TweetsApi.addTweet, payload);
        yield put(addTweet(item));
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR));
    }
}

export function* fetchRemoveTweetRequest({ payload }: RemoveTweetActionInterface) {
    try {
        yield call(TweetsApi.removeTweet, payload);
    } catch (error) {
        alert('Ошибка при удалении типотвита')
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
    yield takeLatest(TweetsActionsType.REMOVE_TWEET, fetchRemoveTweetRequest);
}
