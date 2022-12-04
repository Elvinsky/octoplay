import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {fetchUsers} from '../redux/users/userActions';
import {selectActiveUser} from '../redux/users/userSelectors';
function ProtectedRoute({children}) {
    useFetch(fetchUsers());
    const user = useSelector(selectActiveUser);
    if (!user) return <Navigate to="/login" />;
    return children;
}

export default ProtectedRoute;
