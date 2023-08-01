import React from 'react';
import {useStylesHomeStyle} from "../pages/Home/theme";
import {useSelector} from "react-redux";
import {selectIsTweetsLoading} from "../store/ducks/tweets/selectors";
import {selectChatsItems} from "../store/ducks/chats/selectors";
import {ChatItem} from "./ChatItem";
import CircularProgress from "@material-ui/core/CircularProgress";

export const ChatList = () => {
    const classes = useStylesHomeStyle();
    const chats = useSelector(selectChatsItems);
    const isLoading = useSelector(selectIsTweetsLoading);

    return (
        <>
            {
                isLoading ? (
                    <div className={classes.tweetsCentred}>
                        <CircularProgress />
                    </div>
                ) : (
                    chats.map((chat: any) => (
                        <ChatItem key={chat[0]} chat_id={chat[0]} fullname={chat[1].fullname} username={chat[1].username} classes={classes}/>
                    ))
                )
            }
        </>
    );
};
