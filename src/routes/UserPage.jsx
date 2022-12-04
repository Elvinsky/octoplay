import {useSelector} from 'react-redux';
import useFetch from '../hooks/useFetch';
import {fetchUsers} from '../redux/users/userActions';
import {selectActiveUser} from '../redux/users/userSelectors';

function UserPage() {
    useFetch(fetchUsers());
    const user = useSelector(selectActiveUser);
    return (
        <div className="flex flex-row gap-12 shadow w-fit m-auto">
            <div className=" bg-gray-200 w-52 h-96 m-2"></div>
            <div className="flex flex-col gap-2 justify-center items-start m-2">
                <div className="text-2xl">{user[0].name}</div>
                <div>E-mail: {user[0].email}</div>
                <div>ID: {user[0].id}</div>
                <div>Date of registration: {user[0].createdAt}</div>
            </div>
        </div>
    );
}

export default UserPage;
