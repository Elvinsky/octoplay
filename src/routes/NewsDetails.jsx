import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import CustomBackdrop from '../components/Backdrop';
import useFetch from '../hooks/useFetch';
import {fetchNewsById} from '../redux/news/newsAction';
import {selectNews} from '../redux/news/newsSelectors';

function NewsDetails() {
    const {id} = useParams();
    useFetch(fetchNewsById(id));
    const news = useSelector(selectNews);
    if (news.length === 1) {
        return (
            <div className=" flex flex-col gap-3 w-3/4 custom-shadow p-4 my-5 m-auto">
                <div className=" text-2xl font-semibold">{news[0].title}</div>
                <img
                    src={news[0].fullsizePic}
                    alt="newsPic"
                    className=" max-w-lg self-center"
                />
                <div className=" text-lg font-normal">{news[0].content}</div>
                <div className="text-sm font-thin">{news[0].createdAt}</div>
            </div>
        );
    } else {
        return <CustomBackdrop />;
    }
}

export default NewsDetails;
