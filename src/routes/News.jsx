import {Button, Grid} from '@mui/material';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import DiscussionTile from '../components/DiscussionTile';
import NewsCard from '../components/NewsCard';
import useFetch from '../hooks/useFetch';
import {addComment, addDisc} from '../redux/discussions/discActions';
import {fetchRecentNews} from '../redux/news/newsActions';
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
    const newsLoading = useSelector(selectNewsLoading);
    const newsError = useSelector(selectNewsError);
    const dispatch = useDispatch();
    useFetch(() => dispatch(fetchUsers()));
    const user = useSelector(selectActiveUser);
    const admin = user[0].id === '0';
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
                <div className="flex flex-row gap-4 flex-wrap items-center mb-4 justify-center">
                    {news.map((item) => (
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <NewsCard news={item} admin={admin} key={item.id} />
                        </div>
                    ))}
                </div>
                <Grid container justifyContent="center">
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={handleShowNews}
                    >
                        Show News
                    </Button>
                </Grid>
            </div>

            <div className="flex flex-row gap-5">
                {/* <Button
                    variant="contained"
                    onClick={() => {
                        dispatch(
                            addComment('1', {
                                id: '7',
                                discID: '1',
                                content: 'Comment content 1',
                                liked: '1200',
                                createdAt: '1400',
                                author: 'Ncik Mikhnevich',
                            })
                        );
                    }}
                /> */}
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
