import Avatar from '@material-ui/core/Avatar/Avatar';
import React, {FC, Fragment, useEffect, useRef, useState} from 'react';

// @ts-ignore
import styles from "./ChatView.module.scss";
import Message from "./Message";
import SearchIcon from "@material-ui/icons/Search";


export const Chat: FC = () => {
    const [text, setText] = useState()

    return (
        <div className={styles.chat}>
            {/*HEADER*/}
            <div className={styles.header}>
                <div className={styles.logo}>
                    <a className={styles.user} href="#">
                        {/*<img src={<Avatar/>} alt=""/>*/}
                    </a>
                    <div className={styles.meta}>
                        <h2 className={styles.name}>chatId</h2>
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

            {/*MAIN*/}
            <div className={styles.messages}>
                {/*{msg?.map((el: any, i: number) =>*/}
                {[
                    {id: 1, text: 'barry message', stamp: new Date()},
                    {id: 2, text: 'yunus message', stamp: new Date()},
                    {id: 3, text: 'message alens', stamp: new Date()},
                    {id: 4, text: 'messagessss', stamp: new Date()},
                    {id: 5, text: 'messagessss', stamp: new Date()},
                    {id: 6, text: 'messagessss', stamp: new Date()},
                    {id: 7, text: 'messagessss', stamp: new Date()},
                    {id: 8, text: 'messagessss', stamp: new Date()},
                    {id: 9, text: 'messagessss', stamp: new Date()},
                    {id: 10, text: 'messagessss', stamp: new Date()},
                ]?.sort((a,b) => b.id - a.id).map((el: any, i: number) =>
                    // <Fragment key={i}>
                    //     {el.senderId === phone_number ?
                    //         (<Message chatId={myNumber} msg={el.text} stamp={el.stamp} key={i} order={"mine"} />)
                    //         : (<Message chatId={chatId} msg={el.text} stamp={el.stamp} key={i} />)
                    //     }
                    // </Fragment>
                    <Fragment key={i}>
                        {
                            el.id % 2 !== 0 ? (
                                <Message chatId={el.id} msg={el.text} stamp={el.stamp} key={i} order={"mine"} />
                            ) : (
                                <Message chatId={el.id} msg={el.text} stamp={el.stamp} key={i} />
                            )
                        }
                    </Fragment>
                )}
            </div>

            {/*INPUT*/}
            <div className={styles.send_message}>
                {/*<img className={styles.iconSize} src={EmojiIcon} alt=""/>*/}
                {/*<img className={styles.iconSize} src={FileIcon} alt=""/>*/}
                <textarea
                    value={text}
                    // onChange={handleChange}
                    className={styles.new_message}
                    placeholder="Введите сообщение"
                />
                <img
                    className={styles.iconSize}
                    // src={SendIcon} alt=""
                    // onClick={text.length > 0 ? handleClick : undefined}
                />
            </div>
        </div>
    );
};