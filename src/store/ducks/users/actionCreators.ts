import { Action } from 'redux';
import { User } from '../user/contracts/state';
import {UsersState} from "./contracts/state";

export enum UsersActionsType {
    SET_ITEMS = 'users/SET_ITEMS',
    FETCH_ITEMS = 'tags/FETCH_ITEMS',
}

export interface SetUsersItemsActionInterface extends Action<UsersActionsType> {
    type: UsersActionsType.SET_ITEMS;
    payload: User[];
}

export interface FetchUsersItemsActionInterface extends Action<UsersActionsType> {
    type: UsersActionsType.FETCH_ITEMS;
}

export const setUsers = (payload: UsersState['items']): SetUsersItemsActionInterface => ({
    type: UsersActionsType.SET_ITEMS,
    payload,
});

export const fetchUsers = (): FetchUsersItemsActionInterface => ({
    type: UsersActionsType.FETCH_ITEMS,
});

export type UsersActions =
    | SetUsersItemsActionInterface
    | FetchUsersItemsActionInterface;
