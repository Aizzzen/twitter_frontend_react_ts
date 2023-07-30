import React, {Fragment, useEffect} from 'react';
// @ts-ignore
import styles from "./ChatView.module.scss";
import Message from "./Message";

export const Messages = () => {

    return (
        <div className={`${styles.messages}`}>
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
                {id: 10, text: 'messagessscthethtmrjoi[hjnhc[rcjhth[tjhrjhrhtrhrthwrhrhss', stamp: new Date()},
            ]?.sort((a,b) => b.id - a.id).map((el: any, i: number) =>
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
    );
};
