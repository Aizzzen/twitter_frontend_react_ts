import {axios} from "../../core/axios";
import {Tweet} from "../../store/ducks/tweets/contracts/state";


interface Response<T> {
    data: T
    status: string;
}

const api_url = process.env.REACT_APP_API_URL

// Promise который возвращает TweetsState['items']
export const TweetsApi = {
    async fetchTweets(): Promise<Response<Tweet[]>> {
        // const {data} = await axios.get('http://127.0.0.1:8000/api/v1/tweets/');
        const {data} = await axios.get(`${api_url}/tweets/`);
        console.log(data)
        console.log(process.env.REACT_APP_API_URL)
        return data;
    },
    async fetchTweetData(id: string): Promise<Response<Tweet>> {
        const {data} = await axios.get(`${api_url}/tweets/${id}/`);
        console.log(data[0]);
        return data[0];
    },
    async addTweet(payload: {text: string, media: File}): Promise<Response<Tweet>> {
        const formData = new FormData();
        formData.append('text', payload.text);
        formData.append('media', payload.media);
        const {data} = await axios.post(`${api_url}/tweets/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        console.log(data);
        return data;
    }
}

// export const uploadMedia = async (media: File, text: string): Promise<UploadMediaReturnProps> => {
//     const formData = new FormData();
//     formData.append('media', media);
//     formData.append('text', text);
//
//     const { data } = await axios.post('/upload', formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
//
//     return data;
//
// };
