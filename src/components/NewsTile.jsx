import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions} from '@mui/material';
import {useCallback} from 'react';
import EditNewsModal from './EditNewsModal';
import DeleteModal from './DeleteModal';

export default function NewsCard({
    news,
    admin,
    onDelete,
    onShowNews,
    onEditCheck,
}) {
    const handleShowNews = useCallback(() => {
        onShowNews(news.id);
    }, [news.id, onShowNews]);
    const handleDelete = useCallback(() => {
        onDelete(news.id);
    }, [news.id, onDelete]);
    const handleEditCheck = useCallback(() => {
        onEditCheck();
    }, [onEditCheck]);
    return (
        <Card sx={{maxWidth: 345, backgroundColor: 'rgba(0, 255, 10, 0.1)'}}>
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
                    <EditNewsModal
                        id={news.id}
                        news={news}
                        onEditCheck={handleEditCheck}
                    />
                    <DeleteModal
                        onDelete={handleDelete}
                        classname={admin ? 'visible' : 'invisible'}
                    />
                </CardActions>
            )}
        </Card>
    );
}
