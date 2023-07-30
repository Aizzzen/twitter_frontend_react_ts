import Avatar from '@material-ui/core/Avatar/Avatar';
import React, {FC, Fragment, useEffect, useRef, useState} from 'react';

// @ts-ignore
import styles from "./ChatView.module.scss";
import Message from "./Message";
import SearchIcon from "@material-ui/icons/Search";
import {Messages} from "./Messages";


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

            <Messages/>

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