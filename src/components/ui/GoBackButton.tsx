import React, {FC, ReactElement} from 'react';
import {ArrowBack} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import {useNavigate} from "react-router-dom";

export const GoBackButton: FC = (): ReactElement => {
    const navigate = useNavigate()

    const handleClickBack = () => {
        navigate(-1)
    }

    return (
        <IconButton onClick={handleClickBack} style={{ marginRight: 20 }} color='primary'>
            <ArrowBack />
        </IconButton>
    );
};
