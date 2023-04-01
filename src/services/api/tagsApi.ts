import axios from "axios";
import {TagsState} from "../../store/ducks/tags/contracts/state";

export const TagsApi = {
    fetchTags(): Promise<TagsState['items']> {
        return axios
            // .get('http://localhost:3001/tags')
            .get('http://127.0.0.1:8000/api/v1/tags') // json server проксирует 3001
            // .get('https://trycode.pw/c/6BRBO.json')
            // .get('https://trycode.pw/c/2OBQ1.json')
            .then(({data}) => data)
    }
}