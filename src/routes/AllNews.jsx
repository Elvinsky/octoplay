import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {postNews} from '../api';
import NewsTile from '../components/NewsTile';
import useFetch from '../hooks/useFetch';
import {addNews, fetchNews} from '../redux/news/newsAction';
import {selectNews} from '../redux/news/newsSelectors';
import {fetchUsers} from '../redux/users/userActions';
import {selectActiveUser} from '../redux/users/userSelectors';

function AllNews() {
    useFetch(fetchNews());
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const news = useSelector(selectNews);
    useFetch(fetchUsers());
    const active = useSelector(selectActiveUser);
    const id = +active[0].id;
    const newsAddHandler = () => {
        const news = {
            id: '12',
            content: 'Some content number 12',
            liked: '1234',
            watched: '3200',
            thumbnailPic: 'https://via.placeholder.com/300',
            fullsizePic: 'https://via.placeholder.com/500',
            createdAt: '12/4/2022',
        };
        postNews(news);
        dispatch(addNews(news));
        navigate('/newspage/allnews');
    };
    return (
        <div className="flex flex-col gap-7 w-3/4 m-auto mt-8">
            <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-semibold"> All news\</h1>
                <button
                    className={
                        id === 0
                            ? 'border border-black p-1 rounded custom-shadow text-xl w-[40px] h-[40px] transition-all duration-300 hover:bg-green-200 hover:scale-105'
                            : 'invisible'
                    }
                    onClick={newsAddHandler}
                >
                    +
                </button>
            </div>
            <div
                className="flex flex-row flex-wrap w-[100%] m-auto gap-5 items-center
                       justify-start custom-shadow p-4"
            >
                {news.map((item) => (
                    <NewsTile
                        url={item.thumbnailPic}
                        createdAt={item.createdAt}
                        liked={item.liked}
                        watched={item.watched}
                    />
                ))}
            </div>
        </div>
    );
}

export default AllNews;
