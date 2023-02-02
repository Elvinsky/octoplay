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
import {useNavigate} from 'react-router-dom';
import {useCallback} from 'react';
import {addNews} from '../redux/news/newsActions';

export default function AddNewsModal(hidden) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');
    const [thUrl, setThUrl] = useState('');
    const [valid, setValid] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            const news = {
                id: Date.now().toString(),
                title: title,
                content: content,
                liked: 0,
                watched: 0,
                thumbnailPic: thUrl,
                fullsizePic: url,
                createdAt: new Date().toLocaleDateString(),
            };
            dispatch(addNews(news));
            navigate('/newspage/allnews');
            setOpen(false);
        }
    }, [title, content, url, thUrl, dispatch, navigate]);

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
            <Button variant="contained" onClick={handleClickOpen}>
                Add News
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add News</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add news enter information bellow
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
                    <Button onClick={handleSubmit}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
