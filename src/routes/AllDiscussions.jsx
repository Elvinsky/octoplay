import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import CustomBackdrop from '../components/Backdrop';
import DiscussionTile from '../components/DiscussionTile';
import useAdminCheck from '../hooks/useAdminCheck';
import useFetch from '../hooks/useFetch';
import {fetchDisc} from '../redux/discussions/discussionsActions';
import {
    selectDisc,
    selectDiscError,
    selectDiscLoading,
} from '../redux/discussions/discussionSelector';

function AllDiscussions() {
    useFetch(fetchDisc());
    const navigate = useNavigate();
    const discussions = useSelector(selectDisc);
    const discussionsError = useSelector(selectDiscError);
    const discussionsLoading = useSelector(selectDiscLoading);
    const [, admin] = useAdminCheck();
    const handleGoBack = useCallback(() => {
        navigate('/discussions');
    }, [navigate]);
    if (discussionsLoading && !discussionsError) return <CustomBackdrop />;
    return (
        <div className="flex flex-col gap-7 w-3/4 m-auto mt-8">
            <div className="flex flex-row gap-5 items-center">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/507/507257.png"
                    className="h-4 w-4"
                    alt="back"
                    onClick={handleGoBack}
                />
                <h1 className="text-3xl font-semibold">All News</h1>
                {/* {admin && <AddNewsModal />} */}
            </div>
            <div className="flex flex-row flex-wrap w-90% m-auto gap-5 items-center justify-center custom-shadow p-4">
                {discussions.map((item) => (
                    <DiscussionTile disc={item} admin={admin} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default AllDiscussions;
