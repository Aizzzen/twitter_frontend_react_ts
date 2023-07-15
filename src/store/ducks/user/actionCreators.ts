import { LoginFormProps } from '../../../pages/SignIn/components/LoginModal';
import { UserState } from './contracts/state';
import {
    FetchSignInActionInterface,
    FetchSignOutActionInterface,
    FetchSignUpActionInterface,
    FetchUpdateProfileActionInterface,
    FetchUserDataActionInterface,
    SetUserDataActionInterface,
    SetUserLoadingStatusActionInterface,
    UserActionsType
} from "./actionTypes";
import {RegisterFormProps} from "../../../pages/SignIn/components/RegisterModal";
import {ProfileFormProps} from "../../../components/ProfileModal";
import {FullRegisterFormProps} from "../../../pages/SignIn/components/FullRegisterModal";

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload,
});

export const fetchSignOut = (): FetchSignOutActionInterface => ({
    type: UserActionsType.SIGN_OUT,
});

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionInterface => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload,
});

export const fetchUserData = (): FetchUserDataActionInterface => ({
    type: UserActionsType.FETCH_USER_DATA,
});

export const fetchSignUp = (payload: RegisterFormProps | FullRegisterFormProps): FetchSignUpActionInterface => ({
    type: UserActionsType.FETCH_SIGN_UP,
    payload,
});

export const fetchUpdateProfile = (payload: ProfileFormProps): FetchUpdateProfileActionInterface => ({
    type: UserActionsType.FETCH_UPDATE_PROFILE,
    payload,
});

export const setUserLoadingStatus = (
    payload: UserState['status'],
): SetUserLoadingStatusActionInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload,
});

export type UserActions =
    | SetUserDataActionInterface
    | SetUserLoadingStatusActionInterface
    | FetchUserDataActionInterface
    | FetchSignOutActionInterface
    | FetchUpdateProfileActionInterface;

