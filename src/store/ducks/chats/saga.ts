import {call, put, takeLatest} from "redux-saga/effects";
import {LoadingState} from "./contracts/state";
import {ChatsActionsType} from "./actionTypes";
import {ChatsApi} from "../../../services/api/chatsApi";
import {setChats} from "./actionCreators";


export function* fetchChatsRequest() {
    try {
        const {data} = yield call(ChatsApi.fetchChats)
        console.log(data)
        yield put(setChats(data))
    }
    catch (e) {
        // yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

// export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface) {
//     try {
//     } catch (error) {
//     }
// }
//
// export function* fetchAddCommentRequest({ payload }: FetchAddCommentActionInterface) {
//     try {
//     } catch (error) {
//     }
// }
//
// export function* fetchRemoveTweetRequest({ payload }: RemoveTweetActionInterface) {
//     try {
//     } catch (error) {
//     }
// }

export function* chatsSaga() {
    yield takeLatest(ChatsActionsType.FETCH_CHATS, fetchChatsRequest)

}
