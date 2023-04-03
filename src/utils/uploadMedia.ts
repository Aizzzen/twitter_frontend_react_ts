import axios from 'axios';
import {Tweet} from "../store/ducks/tweets/contracts/state";


const api_url = process.env.REACT_APP_API_URL

interface UploadMediaReturnProps {
}

export const uploadMedia = async (media: File, text: string): Promise<UploadMediaReturnProps> => {
    const formData = new FormData();
    formData.append('media', media);
    formData.append('text', text);

    const { data } = await axios.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return data;

};

// async addTweet(payload: string): Promise<Response<Tweet>> {
//     const {data} = await axios.post(`${api_url}/tweets/`, {text: payload});
//     console.log(data);
//     return data;
// }