import {Button} from '@mui/material';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import CustomBackdrop from '../components/Backdrop';
import DeleteModal from '../components/DeleteModal';
import EditNewsModal from '../components/EditNewsModal';
import useAdminCheck from '../hooks/useAdminCheck';
import useFetch from '../hooks/useFetch';
import {deleteNewsItem, fetchNewsById} from '../redux/news/newsActions';
import {
    selectNews,
    selectNewsError,
    selectNewsLoading,
} from '../redux/news/newsSelectors';

function NewsDetails() {
    const {id} = useParams();
    useFetch(fetchNewsById(id));
    const news = useSelector(selectNews);
    const newsLoading = useSelector(selectNewsLoading);
    const newsError = useSelector(selectNewsError);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [, admin] = useAdminCheck();
    const handleDeleteItem = useCallback(() => {
        dispatch(deleteNewsItem(id));
    }, [dispatch, id]);

    const handleGoBack = useCallback(() => {
        navigate('/newspage');
    }, [navigate]);

    if (news.length === 0) return <CustomBackdrop />;
    if (newsLoading && !newsError) return <CustomBackdrop />;
    else {
        return (
            <div className=" flex flex-col gap-3 w-3/4 custom-shadow p-4 my-5 m-auto bg-[#00717172] rounded-md text-white">
                <div className="flex flex-col gap-2">
                    <Button
                        variant="contained"
                        size="small"
                        sx={{maxWidth: 100}}
                        onClick={handleGoBack}
                    >
                        Back
                    </Button>
                    <div className=" text-2xl font-semibold">{news.title}</div>
                </div>

                <img
                    src={news.fullsizePic}
                    alt="newsPic"
                    className=" max-w-lg self-center"
                />
                <div className=" text-lg font-normal">{news.content}</div>
                <div className="text-sm font-thin">{news.createdAt}</div>
                {admin && (
                    <div className="flex flex-row">
                        <EditNewsModal id={id} news={news} />
                        <DeleteModal
                            hidden={admin ? false : true}
                            onDelete={handleDeleteItem}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default NewsDetails;
