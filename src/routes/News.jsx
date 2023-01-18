import {useSelector} from 'react-redux';
import DiscussionTile from '../components/DiscussionTile';
import NewsTile from '../components/NewsTile';
import useFetch from '../hooks/useFetch';
import {fetchNews} from '../redux/news/newsAction';
import {selectNews} from '../redux/news/newsSelectors';
import {fetchUsers} from '../redux/users/userActions';
import {selectActiveUser} from '../redux/users/userSelectors';

function News() {
    useFetch(fetchNews());
    const news = useSelector(selectNews);
    useFetch(fetchUsers());
    const active = useSelector(selectActiveUser);
    const id = +active[0].id;
    return (
        <div className="flex flex-col gap-7 w-3/4 m-auto mt-8">
            <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-semibold"> Recent news\</h1>
                <button
                    className={
                        id === 0
                            ? 'border border-black p-1 rounded custom-shadow text-xl w-[40px] h-[40px] transition-all duration-300 hover:bg-green-200 hover:scale-105'
                            : 'invisible'
                    }
                >
                    +
                </button>
            </div>
            <div className="custom-shadow w-[88%] flex flex-col p-3 m-auto gap-2">
                <div className="flex flex-row gap-5 flex-wrap items-center justify-center ">
                    <NewsTile width={620} height={290} />
                    <NewsTile width={330} height={290} />
                    <NewsTile width={292} height={220} />
                    <NewsTile width={353} height={220} />
                    <NewsTile width={293} height={220} />
                </div>
                <div className="text-xl font-medium rounded p-[6px] duration-300 transition-all hover:bg-green-200 hover:cursor-pointer w-fit">
                    Watch all News
                </div>
            </div>

            <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-semibold"> Latest discussions\</h1>
                <button
                    className={
                        id === 0
                            ? 'border border-black p-1 rounded custom-shadow text-xl w-[40px] h-[40px] transition-all duration-300 hover:bg-green-200 hover:scale-105'
                            : 'invisible'
                    }
                >
                    +
                </button>
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
