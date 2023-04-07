import {LoginFormProps} from "../../pages/SignIn/components/LoginModal";
import {RegisterFormProps} from "../../pages/SignIn/components/RegisterModal";
import {axios} from "../../core/axios";


interface Response {
    data: any
}

const api_url = process.env.REACT_APP_API_URL

export const UserApi = {
    async signIn(authData: LoginFormProps) {
        return await axios
            .post<Response>(`${api_url}/auth/jwt/create/`, authData)
            .then(response => {
                console.log(response)
                return response;
            })
    },
    async signUp(authData: RegisterFormProps) {
        return await axios
            .post<Response>(`${api_url}/auth/users/`, authData)
            .then(response => {
                console.log(response)
                return response
            })
    },
    async getMe() {
        return await axios
            .get<Response>(`${api_url}/auth/users/me/`)
            .then(response => {
                console.log(response)
                return response;
            })
    },
}
