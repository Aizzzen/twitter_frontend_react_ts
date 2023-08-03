import {call, put, takeLatest} from "redux-saga/effects";
import {LoadingState} from "./contracts/state";
import {ChatsApi} from "../../../services/api/chatsApi";
import {setChatUser, setIsNextLink, setMessages, setMoreMessages} from "./actionCreators";
import {ChatActionsType, FetchMessagesActionInterface, FetchMoreMessagesActionInterface} from "./actionTypes";
import {reverse} from "../../../utils/reverseArr";


export function* fetchMessagesRequest({payload}: FetchMessagesActionInterface) {
    try {
        // @ts-ignore
        const data = yield call(ChatsApi.fetchMessages, payload.chatId)
        console.log(data)
        const rev = reverse(data.msgs.results)
        yield put(setMessages(rev))
        yield put(setIsNextLink(data.msgs.next !== null))
        yield put(setChatUser(data.user))
    }
    catch (e) {
        // yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchMoreMessagesRequest({payload}: FetchMoreMessagesActionInterface) {
    try {
        // @ts-ignore
        const data = yield call(ChatsApi.fetchMoreMessages, payload.chatId, payload.offset)
        console.log(data)
        const rev = reverse(data.msgs.results)
        yield put(setMoreMessages(rev))
        yield put(setIsNextLink(data.msgs.next !== null))
    }
    catch (e) {
        // yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* chatSaga() {
    // @ts-ignore
    yield takeLatest(ChatActionsType.FETCH_MESSAGES, fetchMessagesRequest)
    yield takeLatest(ChatActionsType.FETCH_MORE_MESSAGES, fetchMoreMessagesRequest)

}
