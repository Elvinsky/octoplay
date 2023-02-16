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
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import {useCallback} from 'react';
import {fetchNews, patchNewsItem} from '../redux/news/newsActions';
import useFetch from '../hooks/useFetch';
import {selectNewsViaID} from '../redux/news/newsSelectors';

export default function EditNewsModal({id, hidden}) {
    useFetch(fetchNews);
    const news = useSelector((store) => selectNewsViaID(store, id));

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(news[0].title);
    const [content, setContent] = useState(news[0].content);
    const [url, setUrl] = useState(news[0].fullsizePic);
    const [thUrl, setThUrl] = useState(news[0].thumbnailPic);
    const [valid, setValid] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

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
                liked: news[0].liked,
                watched: news[0].watched,
                thumbnailPic: thUrl,
                fullsizePic: url,
                createdAt: new Date().toLocaleDateString(),
            };
            dispatch(patchNewsItem(id, UPDnews));
            navigate(location.pathname);
            setOpen(false);
        }
    }, [
        content,
        dispatch,
        id,
        location.pathname,
        navigate,
        news,
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
                                error={valid ? 0 : 1}
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
                                error={valid ? 0 : 1}
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
                                error={valid ? 0 : 1}
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
                                error={valid ? 0 : 1}
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
