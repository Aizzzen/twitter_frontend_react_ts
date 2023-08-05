import {
    addComment,
    setTweetData,
    setTweetLoadingState,
} from "./actionCreators";
import {AddFormState, Tweet} from "../tweets/contracts/state";
import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState} from "./contracts/state";
import {setAddFormState} from "../tweets/actionCreators";
import {
    FetchAddCommentActionInterface,
    FetchTweetDataActionInterface,
    FetchUpdateTweetDataActionInterface, RemoveCommentActionInterface, TweetActionsType
} from "./actionTypes";

export function* fetchTweetDataRequest({ payload: tweetId }: FetchTweetDataActionInterface) {
    try {
        const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweetData(data));
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR));
    }
}

export function* fetchUpdateTweetDataRequest({ payload }: FetchUpdateTweetDataActionInterface) {
    try {
        const data: Tweet = yield call(TweetsApi.fetchUpdateTweetData, payload);
        yield put(setTweetData(data));
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR));
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

export function* fetchRemoveCommentRequest({ payload }: RemoveCommentActionInterface) {
    try {
        yield call(TweetsApi.removeComment, payload);
    } catch (error) {
        alert('Ошибка при удалении комментария')
    }
}

export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
    yield takeLatest(TweetActionsType.FETCH_UPDATE_TWEET, fetchUpdateTweetDataRequest);
    yield takeLatest(TweetActionsType.REMOVE_COMMENT, fetchRemoveCommentRequest);
    yield takeLatest(TweetActionsType.FETCH_ADD_COMMENT, fetchAddCommentRequest);
}
