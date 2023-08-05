import {UsersState} from "./contracts/state";
import {FetchUsersItemsActionInterface, SetUsersItemsActionInterface, UsersActionsType} from "./actionTypes";


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
