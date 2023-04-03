import React, {useCallback, useEffect, useRef, useState} from 'react';
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import {useStylesHomeStyle} from "../pages/Home/theme";

export const UploadMedia = () => {
    const classes = useStylesHomeStyle()
    const [media, setMedia] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClickMedia = () => {
        if(inputRef.current) {
            inputRef.current.click()
        }
    }

    const removeImage = (url: string) => {
        setMedia(prev => prev.filter(_url => _url !== url))
    }

    // useCallback - мемоизирует данные, чтобы ссылка не терялась
    const handleChangeMediaInput = useCallback((event: Event) => {
        if(event.target) {
            const target = event.target as HTMLInputElement
            const file = target.files?.[0]
            if(file) {
                const fileObj = new Blob([file])
                setMedia(prev => [...prev, URL.createObjectURL(fileObj)])
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
            <div className={classes.mediaList}>
                {media.map((url) => (
                    <>
                        <div
                            key={url}
                            className={classes.mediaListItem}
                            style={{ backgroundImage: `url(${url})` }}
                        >
                            <IconButton
                                className={classes.mediaListItemRemove}
                                onClick={(): void => removeImage(url)}
                            >
                                <ClearIcon style={{ fontSize: 15 }} />
                            </IconButton>
                        </div>

                    </>
                ))}
            </div>
            <IconButton onClick={handleClickMedia} color="primary">
                <ImageOutlinedIcon style={{ fontSize: 26 }} />
            </IconButton>
            <input ref={inputRef} type="file" hidden id="upload-media"/>
        </div>
    );
};
