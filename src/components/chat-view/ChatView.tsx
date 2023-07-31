import React, {FC, useEffect, useState} from 'react';
// @ts-ignore
import styles from "./ChatView.module.scss";
import {Messages} from "./chat-message/Messages";
import {fetchMessages, receiveMessages} from "../../store/ducks/chat/actionCreators";
import {w3cwebsocket as W3CWebSocket} from "websocket";
import {useDispatch, useSelector} from "react-redux";
import {selectUserData} from "../../store/ducks/user/selectors";
import {ChatTextArea} from "./ChatTextArea";


export const Chat: FC = () => {
    const dispatch = useDispatch()
    const userData = useSelector(selectUserData)
    const [text, setText] = useState<string>('')
    const path = window.location.pathname.split('/')
    const id = path[path.length-2]
    const client = new W3CWebSocket('ws://127.0.0.1:8000/ws/api/v1/chat/' + id + '/');

    const addMessage = (msg: any) => {
        let message = JSON.parse(msg);
        let new_msg = {"text": message.message, "user": message.user_id}
        dispatch(receiveMessages(new_msg))
    }

    const sendMessage = (e: any) => {
        e.preventDefault();
        client.send(JSON.stringify(
            {
                "user_id": userData.id,
                "message": text,
            }
        ));
        setText('')
    }

    useEffect(() => {
        dispatch(fetchMessages(id))
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        client.onmessage = (e: any) => {
            // console.log(e.data, 'e.data')
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
                        <h2 className={styles.name}>Yunus Gadamurov</h2>
                        <h2 className={styles.status}>был(а) недавно</h2>
                    </div>
                </div>
                <div className={styles.actions}>
                    {/*<img className={styles.icon_size} alt="">*/}
                    {/*    <SearchIcon/>*/}
                    {/*</img>*/}
                    {/*<img className={styles.icon_size} src={MoreIcon} alt=""/>*/}
                </div>
            </div>

            <Messages text={text} setText={setText}/>

            <ChatTextArea text={text} setText={setText} sendMessage={sendMessage}/>
        </div>
    );
};