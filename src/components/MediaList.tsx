import React, {FC} from 'react';
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import {useStylesHomeStyle} from "../pages/Home/theme";

interface MediaListProps {
    media?: string[] | Photo[] | any;
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
            {media && media.map((obj: any, i: any) => (
                    <div key={i} className={classes.mediaListItem}>
                        <div>
                            <img
                                alt=''
                                src={obj.media}
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
