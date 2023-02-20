import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from 'react';
import {useCallback} from 'react';
export default function DeleteModal({onDelete}) {
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback((status) => {
        setOpen(false);
    }, []);

    const handleDelete = useCallback(() => {
        onDelete();
    }, [onDelete]);

    return (
        <div>
            <Button
                color="error"
                variant="contained"
                sx={{maxWidth: 'fit-content', backgroundColor: '#801212'}}
                onClick={handleOpen}
            >
                Delete
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Disc</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete item?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
