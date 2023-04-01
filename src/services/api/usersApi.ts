import axios from "axios";
import {LoginFormProps} from "../../pages/SignIn/components/LoginModal";


interface Response {
    data: any
}

export const UsersApi = {
    async signIn(authData: LoginFormProps) {
        return await axios
            .post<Response>('/auth/jwt/create/', authData)
            .then(response => {
                return response;
            })
    },
}