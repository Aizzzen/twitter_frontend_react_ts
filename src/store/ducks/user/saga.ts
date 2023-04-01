import { call, put, takeLatest } from 'redux-saga/effects';
import { UsersApi } from '../../../services/api/usersApi';
import { LoadingStatus } from '../../types';
import { setUserData, setUserLoadingStatus } from './actionCreators';
import {FetchSignInActionInterface, UserActionsType} from "./actionTypes";

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
    try {
        yield put(setUserLoadingStatus(LoadingStatus.LOADING));
        const {data} = yield call(UsersApi.signIn, payload);
        console.log(data)
        window.localStorage.setItem('Bearer', data.access);
        yield put(setUserData(data));
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR));
    }
}

// export function* fetchUserDataRequest() {
//     try {
//         yield put(setUserLoadingStatus(LoadingStatus.LOADING));
//         const { data } = yield call(AuthApi.getMe);
//         yield put(setUserData(data));
//     } catch (error) {
//         yield put(setUserLoadingStatus(LoadingStatus.ERROR));
//     }
// }
//
// export function* fetchSignUpRequest({ payload }: FetchSignUpActionInterface) {
//     try {
//         yield put(setUserLoadingStatus(LoadingStatus.LOADING));
//         yield call(AuthApi.signUp, payload);
//         yield put(setUserLoadingStatus(LoadingStatus.SUCCESS));
//     } catch (error) {
//         yield put(setUserLoadingStatus(LoadingStatus.ERROR));
//     }
// }

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
    // yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
    // yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest);
}
