import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
// import {useDispatch} from 'react-redux';
// import {useLocation, useNavigate} from 'react-router-dom';
// import {useCallback} from 'react';

export default function CustomCard({title, content, thumbnail, admin}) {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const location = useLocation();
    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea>
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
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}
