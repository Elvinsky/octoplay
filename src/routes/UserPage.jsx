import {useSelector} from 'react-redux';
import useFetch from '../hooks/useFetch';
import {fetchUsers} from '../redux/userActions';
import {selectActiveUser} from '../redux/userSelectors';

function UserPage() {
    useFetch(fetchUsers());
    const user = useSelector(selectActiveUser);
    return (
        <div className="flex flex-col p-5 m-2 gap-2">
            <div>{user[0].name}</div>
            <div>{user[0].email}</div>
            <div>{user[0].id}</div>
            <div>{user[0].createdAt}</div>
            <div></div>
        </div>
    );
}

export default UserPage;
