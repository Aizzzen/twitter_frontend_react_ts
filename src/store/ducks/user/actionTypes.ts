import { Action } from 'redux';
import {LoginFormProps} from "../../../pages/SignIn/components/LoginModal";
import {User} from "./contracts/state";
import {LoadingStatus} from "../../types";
import {RegisterFormProps} from "../../../pages/SignIn/components/RegisterModal";
import {ProfileFormProps} from "../../../components/ProfileModal";
import {FullRegisterFormProps} from "../../../pages/SignIn/components/FullRegisterModal";

export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
    FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
    FETCH_USER_DATA = 'user/FETCH_USER_DATA',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
    SIGN_OUT = 'user/SIGN_OUT',
    FETCH_UPDATE_PROFILE = 'FETCH_UPDATE_PROFILE',
}

export interface FetchSignOutActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SIGN_OUT;
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_IN;
    payload: LoginFormProps;
}

export interface FetchSignUpActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_UP;
    payload: RegisterFormProps | FullRegisterFormProps;
}

export interface FetchUpdateProfileActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_UPDATE_PROFILE;
    payload: ProfileFormProps;
}

export interface FetchUserDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.FETCH_USER_DATA;
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA;
    payload: User | undefined;
}

export interface SetUserLoadingStatusActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_LOADING_STATE;
    payload: LoadingStatus;
}

