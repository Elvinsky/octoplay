import {useSelector} from 'react-redux';
import useFetch from '../hooks/useFetch';
import {fetchUsers} from '../redux/userActions';
import {selectActiveUser} from '../redux/userSelectors';

function UserPage() {
    useFetch(fetchUsers());
    const user = useSelector(selectActiveUser);
    return (
        <div className="flex flex-col p-5 m-2 gap-2">
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.id}</div>
            <div>{user.createdAt}</div>
            <div></div>
        </div>
    );
}

export default UserPage;
