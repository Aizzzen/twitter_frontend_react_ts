import { LoadingStatus } from "../../../types";

export interface User {
    id: number;
    // email: string;
    // fullname: string;
    username: string;
    refresh: string;
    access: string;
}

export interface UserState {
    data: any | undefined;
    status: LoadingStatus;
}

