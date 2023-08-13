import React, {FC, useEffect, useRef, useState} from 'react';
// @ts-ignore
import styles from "./ChatView.module.scss";
import {Messages} from "./chat-message/Messages";
import {fetchMessages, receiveMessages} from "../../store/ducks/chat/actionCreators";
import {w3cwebsocket as W3CWebSocket} from "websocket";
import {useDispatch, useSelector} from "react-redux";
import {selectUserData} from "../../store/ducks/user/selectors";
import {ChatTextArea} from "./ChatTextArea";
import {selectChatItems, selectChatUser} from "../../store/ducks/chat/selectors";


export const Chat: FC = () => {
    const dispatch = useDispatch()
    const userData = useSelector(selectUserData)
    const chatUser = useSelector(selectChatUser)
    const messages = useSelector(selectChatItems)
    const [text, setText] = useState<string>('')
    const path = window.location.pathname.split('/')
    const chatId = path[path.length-2]
    const client = new W3CWebSocket(`ws://127.0.0.1:8000/ws/api/v1/chat/${chatId}/`);
    const [offset, setOffset] = useState<number>(40)

    const addMessage = (msg: any) => {
        let message = JSON.parse(msg);
        // setOffset(prev => prev++)
        let new_msg = {"text": message.message, "user": message.user_id, created_at: Date.now()}
        dispatch(receiveMessages(new_msg))
    }

    const sendMessage = (e: any) => {
        e.preventDefault();
        if(text.length > 0) {
            client.send(JSON.stringify(
                {
                    "user_id": userData.id,
                    "message": text,
                }
            ));
        } else {
            alert('Невозможно отправить пустое сообщение')
        }
        setText('')
    }

    useEffect(() => {
        dispatch(fetchMessages({chatId}))
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        client.onmessage = (e: any) => {
            addMessage(e.data);
        }
    }, [])

    return (
        <div className={styles.chat}>
            {/*HEADER*/}
            <div className={styles.header}>
                <div className={styles.logo}>
                    <a className={styles.user} href="#">
                        {/*<img src={<Avatar/>} alt=""/>*/}
                    </a>
                    <div className={styles.meta}>
                        <h2 className={styles.name}>
                            {chatUser?.fullname ? chatUser?.fullname : ''}&nbsp;
                            @{chatUser?.username}
                        </h2>
                        <h2 className={styles.status}>был(а) недавно</h2>
                    </div>
                </div>
                <div className={styles.actions}>
                </div>
            </div>

            <Messages chatId={chatId} offset={offset} setOffset={setOffset}/>

            <ChatTextArea text={text} setText={setText} sendMessage={sendMessage}/>
        </div>
    );
};