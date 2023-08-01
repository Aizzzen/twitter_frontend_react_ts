import React, {FC, Fragment, useEffect} from 'react';
// @ts-ignore
import styles from "../ChatView.module.scss";
import Message from "./Message";
import {useDispatch, useSelector} from "react-redux";
import {selectChatItems, selectChatUser} from "../../../store/ducks/chat/selectors";
import {selectUserData} from "../../../store/ducks/user/selectors";
import {fetchMessages, receiveMessages} from "../../../store/ducks/chat/actionCreators";
import {w3cwebsocket as W3CWebSocket} from "websocket";

interface MessageProps {
    text: string;
    setText: any;
}

type Msg = {
    user: number;
    text: string;
    created_at: Date;
}

export const Messages: FC<MessageProps> = ({text, setText}: MessageProps) => {
    const messages = useSelector(selectChatItems)
    const chatUser = useSelector(selectChatUser)
    const userData = useSelector(selectUserData)
    // const sortedMessages = messages?.reverse()

    useEffect(() => {
        console.log(messages)
    }, [])

    return (
        <div className={`${styles.messages}`}>
            {messages?.map((msg: any, i: number) =>
                <Fragment key={i}>
                    {msg.user === chatUser.id && <Message msg={msg.text} stamp={msg.created_at} key={i} />}
                    {msg.user === userData.id && <Message msg={msg.text} stamp={msg.created_at} key={i} order={"mine"} />}
                </Fragment>
            )}
        </div>
    );
};
