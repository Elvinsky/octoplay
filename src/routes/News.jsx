import {useSelector} from 'react-redux';
import DiscussionTile from '../components/DiscussionTile';
import NewsTile from '../components/NewsTile';
import useFetch from '../hooks/useFetch';
import {fetchNews} from '../redux/news/newsAction';
import {selectNews} from '../redux/news/newsSelectors';

function News() {
    useFetch(fetchNews());
    const news = useSelector(selectNews);
    return (
        <div className="flex flex-col gap-7 w-3/4 m-auto mt-8">
            <h1 className="text-3xl font-semibold"> Recent news\</h1>
            <div className="custom-shadow flex flex-row gap-5 flex-wrap p-5 m-auto mt-5 items-center justify-center w-[90%]">
                <NewsTile width={620} height={290} />
                <NewsTile width={330} height={290} />
                <NewsTile width={292} height={220} />
                <NewsTile width={353} height={220} />
                <NewsTile width={293} height={220} />
            </div>
            <h1 className="text-3xl font-semibold"> Latest discussions\</h1>
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
