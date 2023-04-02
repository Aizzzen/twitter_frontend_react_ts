import {LoginFormProps} from "../../pages/SignIn/components/LoginModal";
import {RegisterFormProps} from "../../pages/SignIn/components/RegisterModal";
import {axios} from "../../core/axios";


interface Response {
    data: any
}

export const UserApi = {
    async signIn(authData: LoginFormProps) {
        return await axios
            .post<Response>(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, authData)
            .then(response => {
                return response;
            })
    },
    async signUp(authData: RegisterFormProps) {
        return await axios
            // .post<Response>('/auth/users/', authData)
            .post<Response>(`${process.env.REACT_APP_API_URL}/auth/users/`, authData)
            .then(response => {
                return response
            })
    },
    async getMe() {
        return await axios
            .get<Response>(`${process.env.REACT_APP_API_URL}/auth/users/me/`)
            .then(response => {
                return response;
            })
    },
}
