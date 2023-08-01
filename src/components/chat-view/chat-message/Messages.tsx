import React, {FC, Fragment, useEffect, useRef} from 'react';
// @ts-ignore
import styles from "../ChatView.module.scss";
import Message from "./Message";
import {useDispatch, useSelector} from "react-redux";
import {selectChatItems, selectChatUser} from "../../../store/ducks/chat/selectors";
import {selectUserData} from "../../../store/ducks/user/selectors";
import {fetchMessages, receiveMessages} from "../../../store/ducks/chat/actionCreators";
import {w3cwebsocket as W3CWebSocket} from "websocket";

type Msg = {
    user: number;
    text: string;
    created_at: Date;
}

export const Messages: FC = () => {
    const messages = useSelector(selectChatItems)
    const chatUser = useSelector(selectChatUser)
    const userData = useSelector(selectUserData)
    const messagesEndRef = useRef(null)

    useEffect(() => {
        console.log(messages)
        // @ts-ignore
        messagesEndRef?.current?.scrollIntoView()
        window.scrollTo(0, 0)
    }, [messages])

    return (
        <div className={`${styles.messages}`}>
            {messages?.map((msg: any, i: number) =>
                <Fragment key={i}>
                    {msg.user === chatUser.id && <Message msg={msg.text} stamp={msg.created_at} key={i} />}
                    {msg.user === userData.id && <Message msg={msg.text} stamp={msg.created_at} key={i} order={"mine"} />}
                </Fragment>
            )}
            <div ref={messagesEndRef}></div>
        </div>
    );
};
