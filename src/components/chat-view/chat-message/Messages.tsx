import React, {FC, Fragment, useEffect, useRef, useState} from 'react';
// @ts-ignore
import styles from "../ChatView.module.scss";
import Message from "./Message";
import {useDispatch, useSelector} from "react-redux";
import {selectChatItems, selectChatUser, selectIsNextLink} from "../../../store/ducks/chat/selectors";
import {selectUserData} from "../../../store/ducks/user/selectors";
import {fetchMoreMessages} from "../../../store/ducks/chat/actionCreators";

interface MessagesProps {
    chatId: string | number;
    offset?: number;
    setOffset?: any;
}

// type Msg = {
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
    const [scrollOnTop, setScrollOnTop] = useState<boolean>(false)
    // const [pegMessages, setPegMessages] = useState<boolean>(true) // string or null

    // @ts-ignore
    messagesStartRef?.current?.addEventListener('scroll', (e) => {
        if (e.target.scrollTop === 0) {
            setScrollOnTop(true)
        }
    })

    const scrollPagination = () => {
        // if (IsNextLink) {
        //      // http://127.0.0.1:8000/api/v1/chat/listmsgs/12/?limit=20/&offset=40
        //     dispatch(fetchMessages({chatId, offset}))
        //     request.then(res => {
        //         console.log(res.data.msgs.results.length)
        //         if (res.data.msgs.results.length !== 0) {
        //             addPegMessage(res.data.msgs.results)
        //             setOffset((prev: number) => prev + 20);
        //         } else {
        //             setPegMessages(false);
        //         }
        //     })
        // }
        // if (this.state.scrollBottom === true) {
        //     if (e.target.scrollTop < e.target.offsetHeight ) {
        //         this.setState({scrollBottom: false});
        //     }
        // } else {
        //     if (e.target.scrollTop === e.target.scrollHeight ) {
        //         this.setState({scrollBottom: true});
        //     }
        // }
    }

    // TODO: скролл при получении сообщений сделать
    useEffect(() => {
        // @ts-ignore
        messagesEndRef?.current?.scrollIntoView()
        window.scrollTo(0, 0)
    }, [messages])

    useEffect(() => {
        if(IsNextLink && scrollOnTop) {
            dispatch(fetchMoreMessages({chatId, offset}))
            setScrollOnTop(false)
            setOffset((prev: number) => prev + 20);
        }
    }, [scrollOnTop])

    return (
        <div ref={messagesStartRef} className={styles.messages}>
            {messages?.map((msg: any, i: number) =>
                <Fragment key={i}>
                    {msg.user === chatUser?.id && <Message msg={msg.text} stamp={msg.created_at} key={i} />}
                    {msg.user === userData.id && <Message msg={msg.text} stamp={msg.created_at} key={i} order={"mine"} />}
                </Fragment>
            )}
            <div ref={messagesEndRef}></div>
        </div>
    );
};
