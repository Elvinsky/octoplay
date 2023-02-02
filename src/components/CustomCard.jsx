import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deleteNewsItem} from '../redux/news/newsActions';
import {useCallback} from 'react';

export default function CustomCard({title, content, thumbnail, admin, id}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleShowNews = () => {
        navigate(`/newspage/id-${id}`);
    };
    const handleDeleteItem = useCallback(() => {
        dispatch(deleteNewsItem(id));
        window.location.reload();
    }, [dispatch, id]);
    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea onClick={handleShowNews}>
                <CardMedia
                    component="img"
                    height="100"
                    image={thumbnail}
                    alt="news img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content.substring(0, 40) + '...'}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Inspect
                </Button>
                <Button
                    size="small"
                    color="primary"
                    hidden={admin ? false : true}
                >
                    Edit
                </Button>
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
}
