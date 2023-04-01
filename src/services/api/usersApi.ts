import {LoginFormProps} from "../../pages/SignIn/components/LoginModal";
import {axios} from "../../core/axios";


interface Response {
    data: any
}

export const UserApi = {
    async signIn(authData: LoginFormProps) {
        return await axios
            .post<Response>('/auth/jwt/create/', authData)
            .then(response => {
                return response;
            })
    },
    async getMe() {
        return await axios
            .get<Response>('/auth/users/me/')
            .then(response => {
                return response;
            })
    },
}

// @ts-ignore
window.UserApi = UserApi