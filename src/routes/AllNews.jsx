import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import AddNewsModal from '../components/AddNewsModal';
import NewsTile from '../components/NewsTile';
import useFetch from '../hooks/useFetch';
import {fetchNews} from '../redux/news/newsAction';
import {selectNews} from '../redux/news/newsSelectors';

function AllNews() {
    useFetch(fetchNews());
    const navigate = useNavigate();
    const news = useSelector(selectNews);
    return (
        <div className="flex flex-col gap-7 w-3/4 m-auto mt-8">
            <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-semibold"> All news\</h1>
                <AddNewsModal />
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
                        id={item.id}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default AllNews;
