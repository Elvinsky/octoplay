import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deleteNewsItem} from '../redux/news/newsActions';
import {useCallback} from 'react';
import EditNewsModal from './EditNewsModal';
import DeleteModal from './DeleteModal';

export default function NewsCard({news, admin, curPath}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleShowNews = () => {
        navigate(`/newspage/${news.id}`);
    };
    const handleDeleteItem = useCallback(() => {
        dispatch(deleteNewsItem(news.id));
        navigate(curPath);
    }, [curPath, dispatch, navigate, news]);

    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea onClick={handleShowNews}>
                <CardMedia
                    component="img"
                    height={390}
                    width={200}
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
            {admin && (
                <CardActions>
                    <EditNewsModal id={news.id} hidden={admin ? false : true} />
                    <DeleteModal
                        onDelete={handleDeleteItem}
                        classname={admin ? 'visible' : 'invisible'}
                    />
                </CardActions>
            )}
        </Card>
    );
}
