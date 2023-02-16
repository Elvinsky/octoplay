import {Button, TextField} from '@mui/material';
import {useCallback, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import CustomBackdrop from '../components/Backdrop';
import CommentTile from '../components/CommentTile';
import DeleteModal from '../components/DeleteModal';
import EditDiscModal from '../components/EditDIscModal';
import useAdminCheck from '../hooks/useAdminCheck';
import useFetch from '../hooks/useFetch';
import {
    addComment,
    deleteDiscItem,
    fetchComments,
    fetchDiscById,
} from '../redux/discussions/discussionsActions';
import {
    selectComments,
    selectDisc,
    selectDiscLoading,
    selectDiscError,
} from '../redux/discussions/discussionSelector';
import {fetchUsers} from '../redux/users/userActions';
import {dateCompare} from '../utils/utilities';

function Discussion() {
    const {id} = useParams();

    const [openComments, setOpenComments] = useState(false);
    const [openReduct, setOpenReduct] = useState(false);
    const [text, setText] = useState('');
    const [selectedStart, setSelectedStart] = useState(0);
    const [selectedEnd, setSelectedEnd] = useState(0);
    const [symbolCount, setSymbolCount] = useState(0);
    const [available, setAvailable] = useState(true);
    const [user, admin] = useAdminCheck();

    useFetch(fetchDiscById(id));
    useFetch(fetchComments(id));
    useFetch(fetchUsers());

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const disc = useSelector(selectDisc);
    const discLoading = useSelector(selectDiscLoading);
    const discError = useSelector(selectDiscError);
    const comments = useSelector(selectComments);
    comments.sort(dateCompare);

    const handleShowComments = useCallback(() => {
        setOpenComments(!openComments);
    }, [openComments]);
    const handleopenReduct = useCallback(() => {
        setOpenReduct(!openReduct);
    }, [openReduct]);
    const handleGoBack = useCallback(() => {
        navigate('/newspage');
    }, [navigate]);
    const handleSelection = (event) => {
        setSelectedStart(event.target.selectionStart);
        setSelectedEnd(event.target.selectionEnd);
    };
    const handleDelete = useCallback(() => {
        dispatch(deleteDiscItem(disc.id));
        navigate('/newspage');
    }, [disc.id, dispatch, navigate]);
    const formatText = (format) => {
        const selectedText = text.substring(selectedStart, selectedEnd);
        const beforeSelection = text.substring(0, selectedStart);
        const afterSelection = text.substring(selectedEnd);

        if (format === 'bold') {
            setText(
                beforeSelection + `<b>${selectedText}</b>` + afterSelection
            );
        } else if (format === 'italic') {
            setText(
                beforeSelection + `<i>${selectedText}</i>` + afterSelection
            );
        } else if (format === 'underline') {
            setText(
                beforeSelection + `<u>${selectedText}</u>` + afterSelection
            );
        }
    };
    const handlePublish = useCallback(() => {
        const comment = {
            discussionID: id.toString(),
            id: Date.now().toString(),
            content: text,
            liked: 0,
            createdAt: new Date().toLocaleDateString(),
            author: user[0].name,
        };
        dispatch(addComment(id, comment));
        // navigate(`/discussion/${id}`);
        setText('');
    }, [dispatch, id, text, user]);

    useMemo(() => {
        if (symbolCount >= 500 || symbolCount <= 0) {
            setAvailable(false);
        } else {
            setAvailable(true);
        }
    }, [symbolCount]);

    const handleChangeText = useCallback((event) => {
        const newText = event.target.value;
        setText(newText);
        setSymbolCount(newText.length);
    }, []);
    if (disc.length === 0) return <CustomBackdrop />;
    if (discLoading && !discError) return <CustomBackdrop />;
    else {
        return (
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className=" flex flex-col gap-3 w-3/4 custom-shadow p-4 my-5 m-auto">
                    <div className="flex flex-row gap-4 w-[68%] items-center">
                        <Button
                            variant="contained"
                            size="small"
                            sx={{maxWidth: 100}}
                            onClick={handleGoBack}
                        >
                            Back
                        </Button>
                        <h1 className=" font-semibold text-2xl">
                            {disc.title}
                        </h1>
                    </div>
                    <div className="flex ml-3">{disc.content}</div>
                    <div className="flex flex-row gap-3">
                        <div className="flex flex-row gap-1 items-center ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{disc.createdAt}</span>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <span>{disc.watched}</span>
                        </div>
                    </div>
                    <div className="flex self-center">
                        {openComments ? (
                            <div className="flex flex-row gap-3">
                                <Button
                                    size="medium"
                                    variant="outlined"
                                    sx={{maxWidth: 'fit-content'}}
                                    onClick={handleShowComments}
                                >
                                    Hide Comments
                                </Button>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    sx={{maxWidth: 'fit-content'}}
                                    onClick={handleopenReduct}
                                >
                                    Write
                                </Button>
                            </div>
                        ) : (
                            <Button
                                size="medium"
                                variant="outlined"
                                sx={{maxWidth: 'fit-content'}}
                                onClick={handleShowComments}
                            >
                                Show Comments
                            </Button>
                        )}
                        {admin ? (
                            <div className="flex flex-row gap-2 self-end">
                                <EditDiscModal discussion={disc} />
                                <DeleteModal onDelete={handleDelete} />
                            </div>
                        ) : null}
                    </div>
                </div>

                {openComments ? (
                    <div className="flex flex-col gap-3 justify-start items-start w-[60%]">
                        {openReduct ? (
                            <div className="flex flex-col gap-2 mb-5 w-full">
                                <TextField
                                    error={available ? 0 : 1}
                                    placeholder="Enter comment here..."
                                    value={text}
                                    id="comment"
                                    name="comment"
                                    className="resize-none w-[100%] border border-black rounded-md p-2"
                                    onChange={handleChangeText}
                                    onSelect={handleSelection}
                                />
                                <div className="flex flex-row gap-3 w-full items-center">
                                    <Button
                                        onClick={() => formatText('bold')}
                                        size="small"
                                        variant="outlined"
                                        className=" shadow-md"
                                    >
                                        Bold
                                    </Button>
                                    <Button
                                        onClick={() => formatText('italic')}
                                        size="small"
                                        variant="outlined"
                                        className=" shadow-md"
                                    >
                                        Italic
                                    </Button>
                                    <Button
                                        onClick={() => formatText('underline')}
                                        size="small"
                                        variant="outlined"
                                        className=" shadow-md"
                                    >
                                        Underline
                                    </Button>
                                    <p>{symbolCount}/500</p>
                                    <Button
                                        disabled={available ? 0 : 1}
                                        size="small"
                                        variant="contained"
                                        className="shadow-md"
                                        sx={{marginLeft: 'auto'}}
                                        onClick={handlePublish}
                                    >
                                        Publish
                                    </Button>
                                </div>
                            </div>
                        ) : null}
                        {comments.map((item) => (
                            <CommentTile
                                content={item.content}
                                author={item.author}
                                createdAt={item.createdAt}
                                key={Date.now().toString()}
                            />
                        ))}
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Discussion;
