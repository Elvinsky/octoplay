import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import useFetch from '../hooks/useFetch';
import {fetchUsers} from '../redux/users/userActions';
import {selectActiveUser} from '../redux/users/userSelectors';

function UserPage() {
    useFetch(fetchUsers());
    const user = useSelector(selectActiveUser);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem('user');
        window.location.reload();
    }, []);
    return (
        <div className="flex flex-row gap-8 custom-shadow w-fit m-auto overflow-auto mt-5 p-5">
            <div className=" bg-gray-200 w-52 h-96 m-2"></div>
            <div className="flex flex-col gap-4 items-start m-2">
                <div className="text-3xl font-semibold">{user[0].name}</div>
                <div className="text-xl font-normal">
                    E-mail: {user[0].email}
                </div>
                <div className="text-xl font-normal">ID: {user[0].id}</div>
                <div className="text-xl font-normal">
                    Date of registration: {user[0].createdAt}
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
