import {useSelector} from 'react-redux';
import useFetch from '../hooks/useFetch';
import {fetchUsers} from '../redux/users/userActions';
import {selectActiveUser} from '../redux/users/userSelectors';

function UserPage() {
    useFetch(fetchUsers());
    const user = useSelector(selectActiveUser);
    return (
        <div className="flex flex-row gap-8 shadow w-fit m-auto overflow-auto mt-5 p-5">
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
            </div>
        </div>
    );
}

export default UserPage;
