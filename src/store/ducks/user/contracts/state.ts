import { LoadingStatus } from "../../../types";

export interface User {
    // _id?: string;
    // email: string;
    // fullname: string;
    // username: string;
    // password: string;
    // confirmHash: string;
    // confirmed?: boolean;
    // location?: string;
    // about?: string;
    // website?: string;
    refresh: string;
    access: string;
}

export interface UserState {
    data: any | undefined;
    status: LoadingStatus;
}

