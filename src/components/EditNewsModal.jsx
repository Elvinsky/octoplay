import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from 'react';
import {Grid} from '@mui/material';
import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {patchNewsItem} from '../redux/news/newsActions';
import CustomBackdrop from '../components/Backdrop';

export default function EditNewsModal({id, news, onEditCheck}) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(news.title);
    const [content, setContent] = useState(news.content);
    const [url, setUrl] = useState(news.fullsizePic);
    const [thUrl, setThUrl] = useState(news.thumbnailPic);
    const [valid, setValid] = useState(true);

    const dispatch = useDispatch();

    const handleClickOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback((status) => {
        setOpen(false);
    }, []);
    const handleSubmit = useCallback(() => {
        if (
            title.length === 0 ||
            content.length === 0 ||
            url.length === 0 ||
            thUrl === 0
        ) {
            setValid(false);
            return;
        } else {
            const UPDnews = {
                id: Date.now().toString(),
                title: title,
                content: content,
                liked: news.liked,
                watched: news.watched,
                thumbnailPic: thUrl,
                fullsizePic: url,
                createdAt: new Date().toLocaleDateString(),
            };
            dispatch(patchNewsItem(UPDnews, id));
            onEditCheck();
            setOpen(false);
        }
    }, [
        content,
        dispatch,
        id,
        news.liked,
        news.watched,
        onEditCheck,
        thUrl,
        title,
        url,
    ]);
    const handleSetTitle = useCallback((e) => {
        setTitle(e.target.value);
    }, []);
    const handleSetContent = useCallback((e) => {
        setContent(e.target.value);
    }, []);
    const handleSetUrl = useCallback((e) => {
        setUrl(e.target.value);
    }, []);
    const handleSetThumbUrl = useCallback((e) => {
        setThUrl(e.target.value);
    }, []);
    if (!news) return <CustomBackdrop />;
    return (
        <div>
            <Button size="small" color="primary" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit News</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To edit news enter information bellow
                    </DialogContentText>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                error={valid ? false : true}
                                autoFocus
                                margin="dense"
                                id="title"
                                label="Title"
                                type="text"
                                fullWidth
                                required
                                onChange={handleSetTitle}
                                value={title}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={valid ? false : true}
                                autoFocus
                                margin="dense"
                                id="content"
                                label="Content"
                                type="text"
                                fullWidth
                                multiline
                                required
                                onChange={handleSetContent}
                                value={content}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={valid ? false : true}
                                autoFocus
                                margin="dense"
                                id="url"
                                label="Picture URL"
                                type="text"
                                required
                                onChange={handleSetUrl}
                                value={url}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={valid ? false : true}
                                autoFocus
                                margin="dense"
                                id="thumbUrl"
                                label="Thumbnail picture URL"
                                type="text"
                                required
                                onChange={handleSetThumbUrl}
                                value={thUrl}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Edit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
