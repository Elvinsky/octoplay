import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import DiscussionTile from '../components/DiscussionTile';
import NewsTile from '../components/NewsTile';
import useFetch from '../hooks/useFetch';
import {fetchRecentNews} from '../redux/news/newsAction';
import {
    selectNews,
    selectNewsError,
    selectNewsLoading,
} from '../redux/news/newsSelectors';
import {fetchUsers} from '../redux/users/userActions';
import {selectActiveUser} from '../redux/users/userSelectors';

function News() {
    const navigate = useNavigate();
    useFetch(fetchRecentNews());
    const news = useSelector(selectNews);
    console.log('news: ', news);
    const newsLoading = useSelector(selectNewsLoading);
    const newsError = useSelector(selectNewsError);

    const handleShowNews = useCallback(() => {
        navigate('/newspage/allnews');
    }, [navigate]);
    if (!newsError && newsLoading) return <div>Loading</div>;
    return (
        <div className="flex flex-col gap-7 w-3/4 m-auto mt-8">
            <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-semibold"> Recent news\</h1>
            </div>
            <div className="custom-shadow flex flex-col p-3 m-auto gap-2">
                <div className="flex flex-row gap-4 flex-wrap items-center justify-center ">
                    {news.slice(-5).map((item) => (
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <NewsTile
                                watched={item.watched}
                                liked={item.liked}
                                createdAt={item.createdAt}
                                url={item.thumbnailPic}
                                key={item.id}
                            />
                        </div>
                    ))}
                </div>
                <div
                    onClick={handleShowNews}
                    className="text-xl font-medium rounded p-[6px] duration-300 transition-all hover:bg-green-200 hover:cursor-pointer w-fit shadow-lg"
                >
                    Watch all News
                </div>
            </div>

            <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-semibold"> Latest discussions\</h1>
            </div>

            <DiscussionTile
                title={'Disc1'}
                date={new Date().toLocaleDateString()}
                watched={1200}
                likes={430}
            />
            <DiscussionTile
                title={'Disc2'}
                date={new Date().toLocaleDateString()}
                watched={1200}
                likes={430}
            />
            <DiscussionTile
                title={'Disc3'}
                date={new Date().toLocaleDateString()}
                watched={1200}
                likes={430}
            />
            <DiscussionTile
                title={'Disc4'}
                date={new Date().toLocaleDateString()}
                watched={1200}
                likes={430}
            />
            <DiscussionTile
                title={'Disc5'}
                date={new Date().toLocaleDateString()}
                watched={1200}
                likes={430}
            />
        </div>
    );
}

export default News;
