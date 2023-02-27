import {useCallback} from 'react';
import CustomBackdrop from '../components/Backdrop';
import useAdminCheck from '../hooks/useAdminCheck';
import useFetch from '../hooks/useFetch';
import {fetchPaginatedNews} from '../redux/news/newsActions';

function UserPage() {
    const [user, admin] = useAdminCheck();
    const handleLogOut = useCallback(() => {
        localStorage.removeItem('user');
        window.location.reload();
    }, []);
    useFetch(fetchPaginatedNews(0, 10));
    if (!user) return <CustomBackdrop />;
    return (
        <div className="flex flex-row justify-center m-auto w-full p-5 gap-5">
            <div className="flex flex-row gap-8 shadow-lg border border-[#0001] w-fit p-5">
                <div className=" bg-gray-200 w-52 h-96 m-2"></div>
                <div className="flex flex-col gap-4 items-start m-2">
                    <div className="flex flex-row items-center justify-center gap-3">
                        <div className="text-3xl font-semibold">
                            {user.name}
                        </div>
                        {admin && (
                            <div className="bg-[#f24949] w-fit p-1 font-bold text-lg rounded-lg">
                                Admin
                            </div>
                        )}
                    </div>
                    <div className="text-xl font-normal">
                        E-mail: {user.email}
                    </div>
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
            <div className="flex flex-col gap-3 w-fit shadow-lg border border-[#0001] p-5">
                <h1 className="text-2xl font-bold text-center">My List\</h1>
                <div className="flex flex-row gap-5">
                    <div className="flex flex-col gap-2 p-1 items-center">
                        <h1 className="text-xl font-semibold">My News\</h1>
                        <div className="flex flex-col gap-3 p-1 shadow-md border border-[#0001]"></div>
                    </div>
                    <div className="flex flex-col gap-2 p-1 items-center">
                        <h1 className="text-xl font-semibold">
                            My discussions\
                        </h1>
                        <div className="flex flex-col gap-3 p-1 shadow-md border border-[#0001]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
