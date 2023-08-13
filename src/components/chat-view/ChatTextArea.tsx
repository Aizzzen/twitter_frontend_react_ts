import React, {FC} from 'react';
// @ts-ignore
import styles from "./ChatView.module.scss";
import Button from "@material-ui/core/Button";

interface ChatTextAreaProps {
    text: string;
    setText: any;
    sendMessage: (e: any) => void;
}

export const ChatTextArea: FC<ChatTextAreaProps> = ({text, setText, sendMessage}: ChatTextAreaProps) => {

    const handleChange = (textValue: string) => {
        setText(textValue)
    }

    return (
        <div className={styles.send_message}>
            {/*<img className={styles.iconSize} src={EmojiIcon} alt=""/>*/}
            {/*<img className={styles.iconSize} src={FileIcon} alt=""/>*/}
            <textarea
                value={text}
                onChange={e => handleChange(e.target.value)}
                className={styles.new_message}
                placeholder="Введите сообщение"
            />
            {/*<img*/}
            {/*    className={styles.iconSize}*/}
            {/*    // src={SendIcon} alt=""*/}
            {/*    // onClick={text.length > 0 ? handleClick : undefined}*/}
            {/*/>*/}
            <Button
                data-testid="button-textarea"
                color="primary"
                variant="contained"
                className={styles.iconSize}
                onClick={sendMessage}
            >
                Отправить сообщение
            </Button>
        </div>
    );
};
