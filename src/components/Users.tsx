import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Button from "@material-ui/core/Button/Button";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import Divider from "@material-ui/core/Divider/Divider";
import {useStylesHomeStyle} from "../pages/Home/theme";
import {useSelector} from "react-redux";
import {selectUsersItems} from "../store/ducks/users/selectors";

export const Users = () => {
    const classes = useStylesHomeStyle();
    // const items = useSelector(selectUsersItems)

    return (
        <Paper data-testid='users-paper-container' className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Кого читать</b>
            </Paper>
            <List>
                {/*{*/}
                {/*    items.map((obj) => (*/}
                {/*        <ListItem className={classes.rightSideBlockItem}>*/}
                {/*            <ListItemAvatar>*/}
                {/*                <Avatar*/}
                {/*                    alt="Remy Sharp"*/}
                {/*                />*/}
                {/*            </ListItemAvatar>*/}
                {/*            <ListItemText*/}
                {/*                primary={obj?.username}*/}
                {/*                secondary={*/}
                {/*                    <Typography component="span" variant="body2" color="textSecondary">*/}
                {/*                        @FavDockOfShame*/}
                {/*                    </Typography>*/}
                {/*                }*/}
                {/*            />*/}
                {/*            <Button color="primary">*/}
                {/*                <PersonAddIcon />*/}
                {/*            </Button>*/}
                {/*        </ListItem>*/}
                {/*    ))*/}
                {/*}*/}
                <ListItem className={classes.rightSideBlockItem}>
                    <ListItemAvatar>
                        <Avatar
                            alt="Remy Sharp"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Yunus Gadamurov"
                        secondary={
                            <Typography component="span" variant="body2" color="textSecondary">
                                Kono Dio da
                            </Typography>
                        }
                    />
                    <Button color="primary">
                        <PersonAddIcon />
                    </Button>
                </ListItem>
                <Divider component="li" />
            </List>
        </Paper>
    );
};
