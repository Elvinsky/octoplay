import {useSelector, useDispatch} from 'react-redux';
import AddNewsModal from '../components/AddNewsModal';
import NewsCard from '../components/NewsCard';
import useFetch from '../hooks/useFetch';
import {fetchNews} from '../redux/news/newsActions';
import {
    selectNews,
    selectNewsError,
    selectNewsLoading,
} from '../redux/news/newsSelectors';
import {fetchUsers} from '../redux/users/userActions';
import {selectActiveUser} from '../redux/users/userSelectors';

function AllNews() {
    useFetch(() => dispatch(fetchNews()));
    useFetch(() => dispatch(fetchUsers()));
    const dispatch = useDispatch();
    const user = useSelector(selectActiveUser);
    const news = useSelector(selectNews);
    const newsLoading = useSelector(selectNewsLoading);
    const newsError = useSelector(selectNewsError);
    const admin = user[0].id === '0';

    if (!newsError && newsLoading) return <div>Loading</div>;
    else {
        return (
            <div className="flex flex-col gap-7 w-3/4 m-auto mt-8">
                <div className="flex flex-row gap-5">
                    <h1 className="text-3xl font-semibold">All News</h1>
                    {admin && <AddNewsModal />}
                </div>
                <div className="flex flex-row flex-wrap w-90% m-auto gap-5 items-center justify-center custom-shadow p-4">
                    {news.map((item) => (
                        <NewsCard
                            thumbnail={item.thumbnailPic}
                            createdAt={item.createdAt}
                            content={item.content}
                            liked={item.liked}
                            watched={item.watched}
                            id={item.id}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default AllNews;
