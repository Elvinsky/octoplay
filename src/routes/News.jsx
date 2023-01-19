import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import DiscussionTile from '../components/DiscussionTile';
import NewsTile from '../components/NewsTile';
import useFetch from '../hooks/useFetch';
import {fetchNews} from '../redux/news/newsAction';
import {selectNews} from '../redux/news/newsSelectors';
import {fetchUsers} from '../redux/users/userActions';
import {selectActiveUser} from '../redux/users/userSelectors';

function News() {
    const navigate = useNavigate();
    useFetch(fetchNews());
    const news = useSelector(selectNews);

    const handleShowNews = useCallback(() => {
        navigate('/newspage/allnews');
    }, [navigate]);
    return (
        <div className="flex flex-col gap-7 w-3/4 m-auto mt-8">
            <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-semibold"> Recent news\</h1>
            </div>
            <div className="custom-shadow flex flex-col p-3 m-auto gap-2">
                <div className="flex flex-row gap-4 flex-wrap items-center justify-center ">
                    <NewsTile
                        watched={620}
                        liked={290}
                        createdAt="01/19/2023"
                        url="https://via.placeholder.com/620x290?text=News+Placeholder"
                    />
                    <NewsTile
                        watched={620}
                        liked={290}
                        createdAt="01/19/2023"
                        url="https://via.placeholder.com/330x290?text=News+Placeholder"
                    />
                    <NewsTile
                        watched={298}
                        liked={220}
                        createdAt="01/19/2023"
                        url="https://via.placeholder.com/298x220?text=News+Placeholder"
                    />
                    <NewsTile
                        watched={350}
                        liked={220}
                        createdAt="01/19/2023"
                        url="https://via.placeholder.com/350x220?text=News+Placeholder"
                    />
                    <NewsTile
                        watched={282}
                        liked={220}
                        createdAt="01/19/2023"
                        url="https://via.placeholder.com/282x220?text=News+Placeholder"
                    />
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
