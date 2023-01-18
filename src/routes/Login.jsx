import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {fetchUsers, loginUser} from '../redux/users/userActions';
import {selectUserViaEmail} from '../redux/users/userSelectors';

function Login() {
    useFetch(fetchUsers());
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(true);
    const handleSetEmail = (e) => setEmail(e.target.value);
    const handleSetPassword = (e) => setPassword(e.target.value);
    const activeUser = useSelector((store) => selectUserViaEmail(store, email));

    const handleLogin = useCallback(() => {
        if (activeUser.length === 0) {
            setValid(false);
            setEmail('');
            setPassword('');
            return;
        }
        if (activeUser[0].password !== password) {
            setValid(false);
            setEmail('');
            setPassword('');
            return;
        }
        setValid(true);
        dispatch(loginUser(activeUser));
        navigate('/userpage');
    }, [activeUser, dispatch, navigate, password]);

    return (
        <div className="flex flex-col gap-2 w-fit border border-black m-auto mt-8 p-1 shadow-lg items-center justify-between">
            <h1 className="text-2xl font-black flex items-center gap-2">
                OCTO PLAY
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3823/3823207.png"
                    alt="octo"
                    className="h-16"
                ></img>
            </h1>
            <input
                placeholder="e-mail"
                onChange={handleSetEmail}
                value={email}
                className={
                    valid
                        ? 'w-fit bg-neutral-200 text-xl p-1'
                        : 'w-fit bg-neutral-200 text-xl p-1 border border-red-600'
                }
            />

            <input
                placeholder="password"
                onChange={handleSetPassword}
                value={password}
                type="password"
                className={
                    valid
                        ? 'w-fit bg-neutral-200 text-xl p-1'
                        : 'w-fit bg-neutral-200 text-xl p-1 border border-red-600'
                }
            />

            <div className="flex flex-col gap-1 items-start mt-5">
                <div className="flex flex-row gap-2 items-center">
                    <button
                        onClick={handleLogin}
                        className="bg-neutral-200 p-1 text-lg transition-all duration-300 hover:bg-green-300"
                    >
                        Log in
                    </button>
                    <div
                        className={
                            valid ? 'invisible' : ' border border-red-600 p-1'
                        }
                    >
                        Invalid password or email
                    </div>
                </div>
                <Link
                    to="/registration"
                    className="text-sm transition-all duration-300 hover:underline"
                >
                    Register
                </Link>
            </div>
        </div>
    );
}

export default Login;
