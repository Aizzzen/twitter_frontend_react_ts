import {useStylesHomeStyle} from "../pages/Home/theme";

import React, {FC, Fragment, ReactElement} from "react";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import {useSelector} from "react-redux";
import {selectIsTagsLoaded, selectTagsItems} from "../store/ducks/tags/selectors";
import {Link} from "react-router-dom";

interface TagsProps {
    // classes: ReturnType<typeof useStylesHomeStyle>;
}

export const Tags: FC<TagsProps> = ({}: TagsProps): ReactElement | null => {
    // const items = useSelector(selectTagsItems);
    // const isLoaded = useSelector(selectIsTagsLoaded);
    const classes = useStylesHomeStyle()

    // if(!isLoaded) {
    //     return null
    // }

    return (
        <Paper data-testid='tags-paper-container' className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {/*{items.map((item) => (*/}
                {/*    <Fragment key={item._id}>*/}
                {/*        <ListItem className={classes.rightSideBlockItem}>*/}
                {/*            <Link to={`/home/search?q=${item.name}`}>*/}
                {/*                <ListItemText*/}
                {/*                    primary={item.name}*/}
                {/*                    secondary={*/}
                {/*                    <Typography component="span" variant="body2" color="textSecondary">*/}
                {/*                        Твитов: {item.count}*/}
                {/*                    </Typography>*/}
                {/*                }*/}
                {/*                />*/}
                {/*            </Link>*/}
                {/*        </ListItem>*/}
                {/*        <Divider component="li" />*/}
                {/*    </Fragment>*/}
                {/*))}*/}
                <ListItem className={classes.rightSideBlockItem}>
                    <Link to={`/home/search?q=${1}`}>
                        <ListItemText
                            primary={'#кудапропалкоронавирус'}
                            secondary={
                                <Typography component="span" variant="body2" color="textSecondary">
                                    типоТвитов: 26
                                </Typography>
                            }
                        />
                    </Link>
                </ListItem>
                <Divider component="li" />
            </List>
        </Paper>
    )
}