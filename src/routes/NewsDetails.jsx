import {Button} from '@mui/material';
import {maxWidth} from '@mui/system';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import CustomBackdrop from '../components/Backdrop';
import EditNewsModal from '../components/EditNewsModal';
import useFetch from '../hooks/useFetch';
import {deleteNewsItem, fetchNewsById} from '../redux/news/newsActions';
import {selectNews} from '../redux/news/newsSelectors';
import {fetchUsers} from '../redux/users/userActions';
import {selectActiveUser} from '../redux/users/userSelectors';

function NewsDetails() {
    const {id} = useParams();
    useFetch(fetchNewsById(id));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const news = useSelector(selectNews);
    useFetch(() => dispatch(fetchUsers()));
    const user = useSelector(selectActiveUser);
    const admin = user[0].id === '0';

    const handleDeleteItem = useCallback(() => {
        dispatch(deleteNewsItem(id));
        window.location.reload();
    }, [dispatch, id]);
    const handleGoBack = () => {
        navigate('/newspage');
    };
    if (news.length === 1) {
        return (
            <div className=" flex flex-col gap-3 w-3/4 custom-shadow p-4 my-5 m-auto">
                <div className="flex flex-col gap-2">
                    <Button
                        variant="contained"
                        size="small"
                        sx={{maxWidth: 100}}
                        onClick={handleGoBack}
                    >
                        Back
                    </Button>
                    <div className=" text-2xl font-semibold">
                        {news[0].title}
                    </div>
                </div>

                <img
                    src={news[0].fullsizePic}
                    alt="newsPic"
                    className=" max-w-lg self-center"
                />
                <div className=" text-lg font-normal">{news[0].content}</div>
                <div className="text-sm font-thin">{news[0].createdAt}</div>
                <div className="flex flex-row">
                    <EditNewsModal id={id} />
                    <Button
                        size="small"
                        color="primary"
                        hidden={admin ? false : true}
                        onClick={handleDeleteItem}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        );
    } else {
        return <CustomBackdrop />;
    }
}

export default NewsDetails;
