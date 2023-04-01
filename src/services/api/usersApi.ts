import {Tweet} from "../../store/ducks/tweets/contracts/state";
import axios from "axios";
import {LoginFormProps} from "../../pages/SignIn/components/LoginModal";


interface Response {
    data: any
}

export const UsersApi = {
    async signIn(authData: LoginFormProps): Promise<Response> {
        const {data} = await axios.post<Response>('/auth/jwt/create/', authData);
        console.log(data);
        return data;
    },
}