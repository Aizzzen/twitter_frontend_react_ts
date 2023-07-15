import {LoginFormProps} from "../../pages/SignIn/components/LoginModal";
import {RegisterFormProps} from "../../pages/SignIn/components/RegisterModal";
import {axios} from "../../core/axios";
import {ProfileFormProps} from "../../components/ProfileModal";
import {FullRegisterFormProps} from "../../pages/SignIn/components/FullRegisterModal";


interface Response {
    data: any
}

const api_url = process.env.REACT_APP_API_URL

export const UserApi = {
    async signIn(authData: LoginFormProps) {
        return await axios
            .post<Response>(`${api_url}/auth/jwt/create/`, authData)
            .then(response => {
                return response;
            })
    },
    async signUp(authData: RegisterFormProps | FullRegisterFormProps) {
        return await axios
            .post<Response>(`${api_url}/auth/users/`, authData)
            .then(response => {
                return response
            })
    },
    async getMe() {
        return await axios
            .get<Response>(`${api_url}/auth/users/me/`)
            .then(response => {
                return response;
            })
    },
    async getCurrentUserData() {
        return await axios
            .get<Response>(`${api_url}/user-data/`)
            .then(response => {
                console.log(response)
                return response;
            })
    },
    async updateProfile(payload: ProfileFormProps) {
        const {data} = await axios.put<Response>(`${api_url}/user-data/`, payload)
        console.log(data)
        return data
    },
    // async fetchUsers() {
    //     return await axios
    //         .get<Response>(`${api_url}/users-list/`)
    //         .then(response => {
    //             console.log(response)
    //             return response;
    //         })
    // },
}
