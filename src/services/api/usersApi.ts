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
        return await axios.post(`${api_url}/auth/jwt/create/`, authData)
    },
    async signUp(authData: RegisterFormProps | FullRegisterFormProps) {
        return await axios.post(`${api_url}/auth/users/`, authData)
    },
    async getCurrentUserData(): Promise<any> {
        return await axios.get(`${api_url}/user-data/`)
    },
    async updateProfile(payload: ProfileFormProps) {
        return await axios.put(`${api_url}/user-data/`, payload)
    },
    // async getMe() {
    //     return await axios
    //         .get<Response>(`${api_url}/auth/users/me/`)
    //         .then(response => {
    //             return response;
    //         })
    // },
    // async fetchUsers() {
    //     return await axios
    //         .get<Response>(`${api_url}/users-list/`)
    //         .then(response => {
    //             return response;
    //         })
    // },
}
