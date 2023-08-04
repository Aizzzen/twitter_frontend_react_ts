import React, {FC, Fragment, useEffect, useRef, useState} from 'react';
// @ts-ignore
import styles from "../ChatView.module.scss";
import Message from "./Message";
import {useDispatch, useSelector} from "react-redux";
import {selectChatItems, selectChatUser, selectIsNextLink} from "../../../store/ducks/chat/selectors";
import {selectUserData} from "../../../store/ducks/user/selectors";
import {fetchMoreMessages} from "../../../store/ducks/chat/actionCreators";
import {number} from "yup";

interface MessagesProps {
    chatId: string | number;
    offset?: number;
    setOffset?: any;
}

// type Msg = {
//     id: number;
//     user: number;
//     text: string;
//     created_at: Date;
// }

export const Messages: FC<MessagesProps> = ({chatId, offset, setOffset}: MessagesProps) => {
    const dispatch = useDispatch()
    const messages = useSelector(selectChatItems)
    const chatUser = useSelector(selectChatUser)
    const userData = useSelector(selectUserData)
    const IsNextLink = useSelector(selectIsNextLink)
    const messagesEndRef = useRef(null)
    const messagesStartRef = useRef(null)
    const [scrolledOnTop, setScrolledOnTop] = useState<boolean>(false)
    // const [scrolledOnTopOnce, setScrolledOnTopOnce] = useState<boolean>(false)
    // const [chatMessEl, setChatMessEl] = useState<HTMLElement | null>(null)

    // TODO: скролл вниз при добавлении сообщения
    // TODO: сохранение скролла при подгрузке сообщений
    // TODO: пока что приходится выбирать одно из двух, и то с натяжкой

    // попробовать вынести состояние scrolledOnTop/Once в ипнут, чтобы при вводе включать и отключать его

    // @ts-ignore
    messagesStartRef?.current?.addEventListener('scroll', (e) => {
        if (e.target.scrollTop === 0) {
            setScrolledOnTop(true)
        }
    })

    useEffect(() => {
        // setChatMessEl(document.getElementById(`${messages[0]?.id}`))
        // console.log(chatMessEl)
        // if(!scrolledOnTopOnce) {
            // @ts-ignore
            messagesEndRef?.current?.scrollIntoView()
            window.scrollTo(0, 0)
        // }
    }, [messages])

    useEffect(() => {
        if(IsNextLink && scrolledOnTop) {
            dispatch(fetchMoreMessages({chatId, offset}))
            setScrolledOnTop(false)
            // setScrolledOnTopOnce(true)
            setOffset((prev: number) => prev + 20);
            // chatMessEl?.scrollIntoView()
            // console.log(chatMessEl)
        }
    }, [scrolledOnTop])

    return (
        <div ref={messagesStartRef} className={styles.messages}>
            {messages?.map((msg: any) =>
                <Fragment key={msg.id}>
                    {msg.user === chatUser?.id &&
                        <Message
                            msg={msg.text}
                            stamp={msg.created_at}
                            key={msg.id}
                            id={msg.id?.toString()}
                        />
                    }
                    {msg.user === userData.id &&
                        <Message
                            msg={msg.text}
                            stamp={msg.created_at}
                            key={msg.id}
                            id={msg.id?.toString()}
                            order={"mine"}
                        />
                    }
                </Fragment>
            )}
            <div ref={messagesEndRef}></div>
        </div>
    );
};
