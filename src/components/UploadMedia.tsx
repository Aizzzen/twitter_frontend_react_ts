import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import {useStylesHomeStyle} from "../pages/Home/theme";
import {ImageObj} from "./AddTweetForm";
import {MediaList} from "./MediaList";


interface UploadMediaProps {
    media: ImageObj[];
    onChangeMedia: (callback: (prev: ImageObj[]) => ImageObj[]) => void;
}

export const UploadMedia: FC<UploadMediaProps> = ({media, onChangeMedia}: UploadMediaProps) => {
    const classes = useStylesHomeStyle()
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClickMedia = () => {
        if(inputRef.current) {
            inputRef.current.click()
        }
    }

    const removeImage = (url: string) => {
        onChangeMedia(prev => prev.filter(obj => obj.blobUrl !== url))
    }

    // useCallback - мемоизирует данные, чтобы ссылка не терялась
    const handleChangeMediaInput = useCallback((event: Event) => {
        if(event.target) {
            const target = event.target as HTMLInputElement
            const file = target.files?.[0]
            if(file) {
                const fileObj = new Blob([file])
                onChangeMedia(prev => [...prev, {
                    blobUrl: URL.createObjectURL(fileObj),
                    file
                }])
            }
        }
    }, [])

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.addEventListener('change', handleChangeMediaInput)
        }
        return () => {
            if(inputRef.current) {
                inputRef.current.removeEventListener('change', handleChangeMediaInput)
            }
        }
    }, [])

    return (
        <div>
            <MediaList media={media.map(obj => obj.blobUrl)} classes={classes} removeImage={removeImage}/>
            <IconButton onClick={handleClickMedia} color="primary">
                <ImageOutlinedIcon style={{ fontSize: 26 }} />
            </IconButton>
            <input ref={inputRef} type="file" multiple hidden id="upload-media"/>
        </div>
    );
};
