import {call, put, takeLatest} from "redux-saga/effects";
import {ChatsActionsType} from "./actionTypes";
import {ChatsApi} from "../../../services/api/chatsApi";
import {setChats} from "./actionCreators";


export function* fetchChatsRequest() {
    try {
        const {data} = yield call(ChatsApi.fetchChats)
        console.log(data)
        const chats = Object.entries(data)
        yield put(setChats(chats))
    }
    catch (e) {
        // yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* chatsSaga() {
    yield takeLatest(ChatsActionsType.FETCH_CHATS, fetchChatsRequest)
}
