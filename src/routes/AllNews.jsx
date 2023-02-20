import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import AddNewsModal from '../components/AddNewsModal';
import CustomBackdrop from '../components/Backdrop';
import NewsCard from '../components/NewsCard';
import useAdminCheck from '../hooks/useAdminCheck';
import useFetch from '../hooks/useFetch';
import {deleteNewsItem, fetchNews} from '../redux/news/newsActions';
import {
    selectNews,
    selectNewsError,
    selectNewsLoading,
} from '../redux/news/newsSelectors';

function AllNews() {
    useFetch(fetchNews());
    const news = useSelector(selectNews);
    const newsLoading = useSelector(selectNewsLoading);
    const newsError = useSelector(selectNewsError);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [, admin] = useAdminCheck();
    const handleGoBack = useCallback(() => {
        navigate('/newspage');
    }, [navigate]);
    const handleDeleteItem = useCallback(
        (id) => {
            dispatch(deleteNewsItem(id));
            navigate('/newspage');
        },
        [dispatch, navigate]
    );
    const handleShowNewsDetails = useCallback(
        (id) => {
            navigate(`/newspage/${id}`);
        },
        [navigate]
    );
    if (!newsError && newsLoading) return <CustomBackdrop />;
    else {
        return (
            <div className="flex flex-col gap-7 w-3/4 m-auto mt-8">
                <div className="flex flex-row gap-5 items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/507/507257.png"
                        className="h-4 w-4"
                        alt="back"
                        onClick={handleGoBack}
                    />
                    <h1 className="text-3xl font-semibold">All News</h1>
                    {admin && <AddNewsModal />}
                </div>
                <div className="flex flex-row flex-wrap w-90% m-auto gap-5 items-center justify-center custom-shadow p-4">
                    {news.map((item) => (
                        <NewsCard
                            news={item}
                            admin={admin}
                            key={item.id}
                            curPath={'/newspage/allnews'}
                            onDelete={handleDeleteItem}
                            onShowNews={handleShowNewsDetails}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default AllNews;
