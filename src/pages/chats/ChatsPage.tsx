import React, {useEffect, useState} from 'react';
import Paper from "@material-ui/core/Paper";
import AddPersonIcon from '@material-ui/icons/PersonAddOutlined';
import {useStylesHomeStyle} from "../Home/theme";
import Typography from "@material-ui/core/Typography";
import {ChatList} from "../../components/ChatList";
import {useDispatch} from "react-redux";
import {fetchChats} from "../../store/ducks/chats/actionCreators";
import {Chat} from "../../components/chat-view/ChatView";
import Button from "@material-ui/core/Button";
import {ChatCreateModal} from "../../components/ChatCreateModal";

export const ChatsPage = () => {
    const classes = useStylesHomeStyle();
    const dispatch = useDispatch()
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const currentPath = window.location.pathname

    const handleCreateChatModal = () => {
        setVisibleModal(true)
    }

    useEffect(() => {
        dispatch(fetchChats())
    }, [dispatch])

    return (
        <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant='outlined' style={{justifyContent: 'space-between'}}>
                <Typography variant='h6'>типоЧаты</Typography>
                {currentPath === '/chats' &&
                    <Button
                        color='primary'
                        onClick={handleCreateChatModal}
                    >
                        <AddPersonIcon/>
                    </Button>}
            </Paper>
            {currentPath === '/chats' ? (
                <ChatList/>
            ) : (
                <Chat/>
            )}
            {visibleModal && <ChatCreateModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} />}
        </Paper>
        );
};
