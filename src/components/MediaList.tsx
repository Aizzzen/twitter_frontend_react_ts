import React, {FC, ReactElement} from 'react';
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import {useStylesHomeStyle} from "../pages/Home/theme";
import {ImageObj} from "./AddTweetForm";

interface MediaListProps {
    media?: string[] | Photo[];
    classes: ReturnType<typeof useStylesHomeStyle>
    removeImage?: (url: string) => void;
}

type Photo = {
    id: number;
    tweet_id: number;
    media: string;
}

export const MediaList: FC<MediaListProps> = ({media, classes, removeImage}: MediaListProps) => {
    if (media && !media.length) {
        return null
    }

    return (
        <div className={classes.mediaList}>
            {media && media.map((obj, i) => (
                    <div key={i} className={classes.mediaListItem}
                        // key={typeof obj === 'string' ? obj : obj.id}
                    >
                        <div>
                            <img
                                src={typeof obj === 'string' ? obj : `${process.env.REACT_APP_SERVER_URL}/media/${obj.media}`}
                            />
                        </div>
                        {removeImage && (
                            <IconButton
                                className={classes.mediaListItemRemove}
                                onClick={(): void => removeImage(typeof obj === 'string' ? obj : obj.media)}
                            >
                                <ClearIcon style={{ fontSize: 15 }} />
                            </IconButton>
                        )}
                    </div>
            ))}
        </div>
    );
};