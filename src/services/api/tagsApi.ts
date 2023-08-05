import axios from "axios";
import {TagsState} from "../../store/ducks/tags/contracts/state";

export const TagsApi = {
    fetchTags(): Promise<TagsState['items']> {
        return axios
            .get('http://127.0.0.1:8000/api/v1/tags')
            .then(({data}) => data)
    }
}