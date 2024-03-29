import {all} from "redux-saga/effects";
import {tweetsSaga} from "./ducks/tweets/saga";
import {tagsSaga} from "./ducks/tags/saga";
import {tweetSaga} from "./ducks/tweet/saga";
import {userSaga} from "./ducks/user/saga";
import {chatsSaga} from "./ducks/chats/saga";
import {chatSaga} from "./ducks/chat/saga";

export default function* rootSaga() {
    yield all([
        tweetsSaga(),
        tagsSaga(),
        tweetSaga(),
        userSaga(),
        userSaga(),
        chatsSaga(),
        chatSaga(),
    ])
}