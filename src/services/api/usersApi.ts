import {LoginFormProps} from "../../pages/SignIn/components/LoginModal";
import {RegisterFormProps} from "../../pages/SignIn/components/RegisterModal";
import {axios} from "../../core/axios";


interface Response {
    data: any
}

export const UserApi = {
    async signIn(authData: LoginFormProps) {
        return await axios
            .post<Response>('http://127.0.0.1:8000/api/v1/auth/jwt/create/', authData)
            .then(response => {
                return response;
            })
    },
    async signUp(authData: RegisterFormProps) {
        return await axios
            // .post<Response>('/auth/users/', authData)
            .post<Response>('http://127.0.0.1:8000/api/v1/auth/users/', authData)
            .then(response => {
                return response
            })
    },
    async getMe() {
        return await axios
            .get<Response>('http://127.0.0.1:8000/api/v1/auth/users/me/')
            .then(response => {
                return response;
            })
    },
}
