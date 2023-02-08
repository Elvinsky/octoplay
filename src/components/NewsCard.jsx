import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {deleteNewsItem, fetchNews} from '../redux/news/newsActions';
import {useCallback} from 'react';
import useFetch from '../hooks/useFetch';
import {selectNewsViaID} from '../redux/news/newsSelectors';
import CustomBackdrop from './Backdrop';
import EditNewsModal from './EditNewsModal';

export default function NewsCard({news, admin}) {
    console.log(news);
    // useFetch(fetchNews);
    // const news = useSelector((store) => selectNewsViaID(store, id));
    // React.useEffect(() => {
    //     console.log(news[0].content);
    // }, []);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleShowNews = () => {
        navigate(`/newspage/id-${news.id}`);
    };
    const handleDeleteItem = useCallback(() => {
        dispatch(deleteNewsItem(news.id));
        window.location.reload();
    }, [dispatch, news.id]);
    // if (news.length !== 1) return <CustomBackdrop />;
    // else {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea onClick={handleShowNews}>
                <CardMedia
                    component="img"
                    height="100"
                    image={news.thumbnailPic}
                    alt="news img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {news.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {news.content.substring(0, 40) + '...'}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <EditNewsModal id={news.id} />
                <Button
                    size="small"
                    color="primary"
                    hidden={admin ? false : true}
                    onClick={handleDeleteItem}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
    // }
}
