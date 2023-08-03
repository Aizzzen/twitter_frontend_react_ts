import React, {FC} from 'react';

// @ts-ignore
import styles from '../ChatView.module.scss';

interface MessageProps {
    id: string;
    order?: string;
    stamp: Date | string;
    msg: string;
}

const Message: FC<MessageProps> = ({id, order, msg, stamp}: MessageProps) => {
    const dateStamp = new Date(stamp)
    return (
        <div id={id} className={`${styles.message_item} ${order === "mine" ? styles.flex : ""}`} >
            <div className={`${order === "mine" ? styles.mine : styles.content}`} style={{position: 'relative'}}>
                <p className={styles.text}>{msg}</p>
                <h2 className={styles.stamp}>
                    {
                        typeof dateStamp === 'object' &&
                        true &&
                        'getHours' in dateStamp &&
                        dateStamp?.getHours() + ":" + (Number(dateStamp?.getMinutes()) < 10 ? "0" + dateStamp?.getMinutes() : dateStamp?.getMinutes())
                    }
                </h2>
            </div>
        </div>
    );
};

export default Message;