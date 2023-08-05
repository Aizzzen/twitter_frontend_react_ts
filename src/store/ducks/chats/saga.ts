import {call, put, takeLatest} from "redux-saga/effects";
import {ChatsActionsType, FetchCreateChatActionInterface} from "./actionTypes";
import {ChatsApi} from "../../../services/api/chatsApi";
import {setChats} from "./actionCreators";
import {reverse} from "../../../utils/reverseArr";


export function* fetchChatsRequest() {
    try {
        const {data} = yield call(ChatsApi.fetchChats)
        const chats = Object.entries(data)
        const rev = reverse(chats)
        yield put(setChats(rev))
    }
    catch (e) {
        // yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchCreateChatRequest({ payload }: FetchCreateChatActionInterface) {
    try {
        // @ts-ignore
        const data = yield call(ChatsApi.fetchCreateChat, payload)
        // yield put(setChats(rev))
    }
    catch (e) {
        // yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* chatsSaga() {
    yield takeLatest(ChatsActionsType.FETCH_CHATS, fetchChatsRequest)
    yield takeLatest(ChatsActionsType.FETCH_CREATE_CHAT, fetchCreateChatRequest)
}
