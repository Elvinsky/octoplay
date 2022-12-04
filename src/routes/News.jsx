import {useSelector} from 'react-redux';
import useFetch from '../hooks/useFetch';
import {fetchNews} from '../redux/news/newsAction';
import {selectNews} from '../redux/news/newsSelectors';

function News() {
    useFetch(fetchNews());
    const news = useSelector(selectNews);
    console.log(news);
    return <div></div>;
}

export default News;
