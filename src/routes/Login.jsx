import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {fetchUsers, loginUser} from '../redux/userActions';

function Login() {
    useFetch(fetchUsers());
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAddUser = () => {
        const user = {
            id: Date.now().toString(),
            email: 'krakazabra@gmail.com',
            password: '1234',
            name: 'Nickita',
            createdAt: new Date().toLocaleDateString(),
        };
        dispatch(loginUser(user));
        navigate('/');
    };
    return (
        <div>
            <button onClick={handleAddUser}>Add active user</button>
        </div>
    );
}

export default Login;
