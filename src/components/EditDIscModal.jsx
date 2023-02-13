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
import {useNavigate} from 'react-router-dom';
import {useCallback} from 'react';
import useFetch from '../hooks/useFetch';
import {fetchDiscById} from '../redux/discussions/discActions';
import {
    selectDisc,
    selectDiscError,
    selectDiscLoading,
} from '../redux/discussions/discSelector';
import {patchDisc} from '../utils/api';
import CustomBackdrop from './Backdrop';

export default function EditDiscModal({id, hidden}) {
    useFetch(fetchDiscById(id));
    const disc = useSelector(selectDisc);
    const discLoading = useSelector(selectDiscLoading);
    const discError = useSelector(selectDiscError);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(disc.title);
    const [content, setContent] = useState(disc.content);
    const [thUrl, setThUrl] = useState(disc.thumbnailPic);
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
        if (title.length === 0 || content.length === 0 || thUrl === 0) {
            setValid(false);
            return;
        } else {
            const UPDdisc = {
                id: Date.now().toString(),
                title: title,
                content: content,
                liked: disc.liked,
                watched: disc.watched,
                thumbnailPic: thUrl,
                createdAt: new Date().toLocaleDateString(),
            };
            dispatch(patchDisc(UPDdisc, id));
            navigate(`/discussions/${id}`);
            setOpen(false);
        }
    }, [content, disc, dispatch, id, navigate, thUrl, title]);
    const handleSetTitle = useCallback((e) => {
        setTitle(e.target.value);
    }, []);
    const handleSetContent = useCallback((e) => {
        setContent(e.target.value);
    }, []);
    const handleSetThumbUrl = useCallback((e) => {
        setThUrl(e.target.value);
    }, []);
    if (discLoading && !discError) return <CustomBackdrop />;
    else {
        return (
            <div>
                <Button
                    color="error"
                    variant="contained"
                    hidden={hidden}
                    sx={{maxWidth: 'fit-content', marginLeft: '2em'}}
                    onClick={handleClickOpen}
                >
                    Edit
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit Disc</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To edit disc enter information bellow
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
}
