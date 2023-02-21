import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import CustomBackdrop from '../components/Backdrop';
import useAdminCheck from '../hooks/useAdminCheck';
import useFetch from '../hooks/useFetch';
import {fetchPaginatedNews} from '../redux/news/newsActions';
import {selectNews, selectNewsAmount} from '../redux/news/newsSelectors';

function UserPage() {
    const [user] = useAdminCheck();
    const handleLogOut = useCallback(() => {
        localStorage.removeItem('user');
        window.location.reload();
    }, []);
    useFetch(fetchPaginatedNews(0, 10));
    const amount = useSelector(selectNewsAmount);
    const news = useSelector(selectNews);
    console.log(amount, news);
    if (!user) return <CustomBackdrop />;
    return (
        <div className="flex flex-row gap-8 custom-shadow w-fit m-auto overflow-auto mt-5 p-5">
            <div className=" bg-gray-200 w-52 h-96 m-2"></div>
            <div className="flex flex-col gap-4 items-start m-2">
                <div className="text-3xl font-semibold">{user.name}</div>
                <div className="text-xl font-normal">E-mail: {user.email}</div>
                <div className="text-xl font-normal">ID: {user.id}</div>
                <div className="text-xl font-normal">
                    Date of registration: {user.createdAt}
                </div>
                <button
                    className="p-1 bg-red-200 text-xl font-normal rounded-sm transition-all duration-300 hover:scale-105"
                    onClick={handleLogOut}
                >
                    Log Out
                </button>
            </div>
        </div>
    );
}

export default UserPage;
