import React from 'react';
import { Container, Grid, InputAdornment, Paper, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined';

import { Navbar } from '../components/Navbar';
import { SearchTextField } from '../components/SearchTextField';
import { useDispatch } from 'react-redux';
import { fetchTweets } from '../store/ducks/tweets/actionCreators';
import { Tags } from '../components/Tags';
import { fetchTags } from '../store/ducks/tags/actionCreators';
import {useStylesHomeStyle} from "./Home/theme";
import {Routes} from "react-router-dom";
import {Users} from "../components/Users";

interface Layout {
    children: React.ReactNode;
}

export const Layout: React.FC<Layout> = ({ children }): React.ReactElement => {
    const classes = useStylesHomeStyle();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch]);

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>
                    <Navbar classes={classes} />
                </Grid>
                <Grid sm={8} md={6} item>
                    <Routes>
                        {children}
                    </Routes>
                </Grid>
                <Grid sm={3} md={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск по типоТвиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <Tags classes={classes} />
                        <Users  />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};
