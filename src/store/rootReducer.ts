import {combineReducers} from "redux";
import {tweetsReducer} from "./ducks/tweets/reducer";
import {tagsReducer} from "./ducks/tags/reducer";
import {tweetReducer} from "./ducks/tweet/reducer";
import {userReducer} from "./ducks/user/reducer";
import {usersReducer} from "./ducks/users/reducer";
import {chatsReducer} from "./ducks/chats/reducer";
import {chatReducer} from "./ducks/chat/reducer";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tweet: tweetReducer,
    tags: tagsReducer,
    user: userReducer,
    users: usersReducer,
    chats: chatsReducer,
    chat: chatReducer,
})