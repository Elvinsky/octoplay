import {Button, Grid} from '@mui/material';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import CustomBackdrop from '../components/Backdrop';
import DiscussionTile from '../components/DiscussionTile';
import NewsCard from '../components/NewsCard';
import useFetch from '../hooks/useFetch';
import {fetchDisc} from '../redux/discussions/discActions';
import {selectDisc, selectDiscLoading} from '../redux/discussions/discSelector';
import {fetchRecentNews} from '../redux/news/newsActions';
import {selectNews, selectNewsLoading} from '../redux/news/newsSelectors';
import {fetchUsers} from '../redux/users/userActions';
import {selectActiveUser} from '../redux/users/userSelectors';

function News() {
    const navigate = useNavigate();
    useFetch(fetchRecentNews());
    useFetch(fetchDisc());

    const news = useSelector(selectNews);
    const disc = useSelector(selectDisc);
    const newsLoading = useSelector(selectNewsLoading);
    const discLoading = useSelector(selectDiscLoading);

    const dispatch = useDispatch();
    useFetch(() => dispatch(fetchUsers()));
    const user = useSelector(selectActiveUser);
    const admin = user[0].id === '0';
    const handleShowNews = useCallback(() => {
        navigate('/newspage/allnews');
    }, [navigate]);

    if (newsLoading || discLoading) return <CustomBackdrop />;
    else if (news.length === 0 || disc.length === 0) return <CustomBackdrop />;
    else if (!disc.map) return <CustomBackdrop />;
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
                <h1 className="text-3xl font-semibold"> Latest discussions\</h1>
            </div>
            {disc.map((item) => (
                <DiscussionTile admin={admin} key={item.id} disc={item} />
            ))}
        </div>
    );
}

export default News;
