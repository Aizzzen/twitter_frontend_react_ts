import React from 'react';

// @ts-ignore
import styles from './Empty.module.scss'

export const EmptyChatsList = () => {
    return (
        <div className={styles.message_box}>
            <h6 className={styles.message_title}>Здесь будут ваши чаты</h6>
        </div>
    );
};
