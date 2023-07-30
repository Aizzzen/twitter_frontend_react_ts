import React, {FC} from 'react';

// @ts-ignore
import styles from './ChatView.module.scss';

interface MessageProps {
    order?: string;
    chatId: string | number;
    stamp: Date | string;
    msg: string;
}

const Message: FC<MessageProps> = ({order, chatId, msg, stamp}: MessageProps) => {
    return (
        <div className={`${styles.message_item} ${order === "mine" ? styles.flex : ""}`}>
            <div className={`${order === "mine" ? styles.mine : styles.content}`} style={{position: 'relative'}}>
                <h2 className={styles.name}>~ {chatId}</h2>
                <p className={styles.text}>{msg}</p>
                <h2 className={styles.stamp}>
                    {
                        typeof stamp === 'object' &&
                        true &&
                        'getHours' in stamp &&
                        stamp?.getHours() + ":" + (Number(stamp?.getMinutes()) < 10 ? "0" + stamp?.getMinutes() : stamp?.getMinutes())
                    }
                </h2>
            </div>
        </div>
    );
};

export default Message;