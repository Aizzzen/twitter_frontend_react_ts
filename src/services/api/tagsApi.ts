import axios from "axios";
import {TagsState} from "../../store/tags/contracts/state";

export const TagsApi = {
    fetchTags(): Promise<TagsState['items']> {
        return axios
            // .get('http://localhost:3001/tags')
            .get('/tags') // json server проксирует 3001
            // .get('https://trycode.pw/c/6BRBO.json')
            // .get('https://trycode.pw/c/2OBQ1.json')
            .then(({data}) => data)
    }
}