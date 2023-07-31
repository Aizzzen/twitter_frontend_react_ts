import {call, put, takeLatest} from "redux-saga/effects";
import {LoadingState} from "./contracts/state";
import {ChatsApi} from "../../../services/api/chatsApi";
import {setChatUser, setMessages} from "./actionCreators";
import {ChatActionsType, FetchMessagesActionInterface} from "./actionTypes";
import {reverse} from "../../../utils/reverseArr";


export function* fetchMessagesRequest({payload: id}: FetchMessagesActionInterface) {
    try {
        // @ts-ignore
        const data = yield call(ChatsApi.fetchMessages, id)
        const rev = reverse(data.msgs.results)
        console.log(rev)
        yield put(setMessages(rev))
        yield put(setChatUser(data.user[0]))
    }
    catch (e) {
        // yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* chatSaga() {
    // @ts-ignore
    yield takeLatest(ChatActionsType.FETCH_MESSAGES, fetchMessagesRequest)

}
