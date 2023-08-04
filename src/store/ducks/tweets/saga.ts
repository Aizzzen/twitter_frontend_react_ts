import {call, put, takeLatest} from "redux-saga/effects";
import {
    addComment,
    addTweet,
    setAddFormState,
    setMoreTweets,
    setNextPage,
    setTweets,
    setTweetsLoadingState
} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {AddFormState, LoadingState} from "./contracts/state";
import {
    FetchAddTweetActionInterface,
    FetchAddCommentActionInterface,
    RemoveTweetActionInterface,
    TweetsActionsType,
    FetchMoreTweetsActionInterface
} from "./actionTypes";


// yield put === dispatch
export function* fetchTweetsRequest() {
    try {
        let data = []
        const pathname = window.location.pathname
        const user = pathname.includes('/user')
        if(user) {
            data = yield call(TweetsApi.fetchCurrentUserTweets)
            yield put(setTweets(data))
        } else {
            data = yield call(TweetsApi.fetchTweets)
            yield put(setTweets(data.results))
            yield put(setNextPage(data.next.split('=')[1]))
        }
    }
    catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchMoreTweetsRequest({ payload }: FetchMoreTweetsActionInterface) {
    try {
        // @ts-ignore
        const data = yield call(TweetsApi.fetchMoreTweets, payload)
        yield put(setMoreTweets(data.results))
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

export function* fetchAddCommentRequest({ payload }: FetchAddCommentActionInterface) {
    try {
        // @ts-ignore
        const item = yield call(TweetsApi.addComment, payload);
        yield put(addComment(item));
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
    yield takeLatest(TweetsActionsType.FETCH_MORE_TWEETS, fetchMoreTweetsRequest)
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_COMMENT, fetchAddCommentRequest);
    yield takeLatest(TweetsActionsType.REMOVE_TWEET, fetchRemoveTweetRequest);
}
