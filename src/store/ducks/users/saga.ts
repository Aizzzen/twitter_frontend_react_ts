import { call, put, takeLatest } from 'redux-saga/effects';
import { TagsApi } from '../../../services/api/tagsApi';
import { UserApi } from '../../../services/api/usersApi';
import { LoadingStatus } from '../../types';
import {setUsers, UsersActionsType} from "./actionCreators";

export function* fetchUsersRequest() {
    // try {
    //   // @ts-ignore
    //     const items = yield call(UserApi.fetchUsers);
    //     console.log(items)
    //   yield put(setUsers(items));
    // } catch (error) {
    //   alert('Ошибка при загрузке пользователей')
    // }
}

export function* usersSaga() {
    // yield takeLatest(UsersActionsType.FETCH_ITEMS, fetchUsersRequest);
}

