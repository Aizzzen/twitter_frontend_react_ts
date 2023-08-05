import React from 'react';

// @ts-ignore
import styles from './Empty.module.scss'

export const EmptyTweetList = () => {
    return (
        <div className={styles.message_box}>
            <h6 className={styles.message_title}>Здесь будут ваши твиты</h6>
        </div>
    );
};
