import {Button, Grid} from '@mui/material';
import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import CustomBackdrop from '../components/Backdrop';
import DiscussionTile from '../components/DiscussionTile';
import NewsCard from '../components/NewsTile';
import useAdminCheck from '../hooks/useAdminCheck';
import useFetch from '../hooks/useFetch';
import {fetchRecentDisc} from '../redux/discussions/discussionsActions';
import {
    selectDisc,
    selectDiscLoading,
} from '../redux/discussions/discussionSelector';
import {deleteNewsItem, fetchRecentNews} from '../redux/news/newsActions';
import {selectNews, selectNewsLoading} from '../redux/news/newsSelectors';

function News() {
    const [wasEdited, setWasEdited] = useState(false);
    const navigate = useNavigate();
    useFetch(fetchRecentNews(), [wasEdited]);
    useFetch(fetchRecentDisc());

    const news = useSelector(selectNews);
    const disc = useSelector(selectDisc);
    const newsLoading = useSelector(selectNewsLoading);
    const discLoading = useSelector(selectDiscLoading);
    const [, admin] = useAdminCheck();
    const dispatch = useDispatch();
    const handleShowNews = useCallback(() => {
        navigate('/newspage/allnews');
    }, [navigate]);
    const handleShowDiscussions = useCallback(() => {
        navigate('/discussions/alldiscussions');
    }, [navigate]);
    const handleDeleteItem = useCallback(
        (id) => {
            dispatch(deleteNewsItem(id));
            setWasEdited(!wasEdited);
        },
        [dispatch, wasEdited]
    );
    const handleShowNewsDetails = useCallback(
        (id) => {
            navigate(`/newspage/${id}`);
        },
        [navigate]
    );
    const handleEditCheck = useCallback(() => {
        setWasEdited(!wasEdited);
    }, [wasEdited]);
    if (newsLoading || discLoading) return <CustomBackdrop />;
    else if (news.length === 0 || disc.length === 0) return <CustomBackdrop />;
    else if (!disc.map) return <CustomBackdrop />;
    else if (!news.map) return <CustomBackdrop />;
    return (
        <div className="flex flex-col gap-7 w-3/4 m-auto mt-8 bg-[#00717172] p-3 rounded-md custom-shadow text-white">
            <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-semibold"> Recent news\</h1>
            </div>
            <div className="custom-shadow flex flex-col p-5 m-auto gap-2 bg-[#11929272] rounded-[10px] mx-1">
                <div className="flex flex-row gap-4 flex-wrap items-center mb-4 justify-center">
                    {news.map((item) => (
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <NewsCard
                                news={item}
                                admin={admin}
                                key={item.id}
                                onEditCheck={handleEditCheck}
                                onDelete={handleDeleteItem}
                                onShowNews={handleShowNewsDetails}
                            />
                        </div>
                    ))}
                </div>
                <Grid container justifyContent="center">
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={handleShowNews}
                        sx={{
                            backgroundColor: '#09b3b3',
                            border: '0',
                        }}
                    >
                        Show More
                    </Button>
                </Grid>
            </div>

            <div className="flex flex-row gap-5">
                <h1 className="text-3xl font-semibold"> Latest discussions\</h1>
            </div>
            {disc.map((item) => (
                <DiscussionTile admin={admin} key={item.id} disc={item} />
            ))}
            <Grid container justifyContent="center">
                <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={handleShowDiscussions}
                    sx={{
                        backgroundColor: '#09b3b3',
                        border: '0',
                    }}
                >
                    Show More
                </Button>
            </Grid>
        </div>
    );
}

export default News;
