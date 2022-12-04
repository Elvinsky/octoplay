import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {addUser, fetchUsers} from '../redux/users/userActions';
import {
    selectUserViaEmail,
    selectUserViaName,
} from '../redux/users/userSelectors';
function Registration() {
    useFetch(fetchUsers());
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secPassword, setSecPassword] = useState('');
    const [name, setName] = useState('');
    const [valid, setValid] = useState(true);
    const handleSetEmail = (e) => setEmail(e.target.value);
    const handleSetPassword = (e) => setPassword(e.target.value);
    const handleSetSecondPassword = (e) => setSecPassword(e.target.value);
    const handleSetName = (e) => setName(e.target.value);
    const userEmailCheck = useSelector((store) =>
        selectUserViaEmail(store, email)
    );
    const userNameCheck = useSelector((store) =>
        selectUserViaName(store, name)
    );

    const handleReg = useCallback(() => {
        const user = {
            id: Date.now().toString,
            email: email,
            password: password,
            name: name,
            createdAt: new Date().toLocaleDateString(),
        };
        if (userEmailCheck.length !== 0 || userNameCheck.length !== 0) {
            setValid(false);
            setEmail('');
            setName('');
            setSecPassword('');
            setPassword('');
            return;
        }
        dispatch(addUser(user));
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
        })
            .then((r) => r.json())
            .then(navigate('/login'));
    }, [
        dispatch,
        email,
        name,
        navigate,
        password,
        userEmailCheck.length,
        userNameCheck.length,
    ]);

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
                placeholder="name"
                onChange={handleSetName}
                value={name}
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
            <input
                placeholder="repeat password"
                onChange={handleSetSecondPassword}
                value={secPassword}
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
                        onClick={handleReg}
                        className="bg-neutral-200 p-1 text-lg transition-all duration-300 hover:bg-green-300"
                    >
                        Log in
                    </button>
                    <div
                        className={
                            valid ? 'invisible' : ' border border-red-600 p-1'
                        }
                    >
                        Email or name is ocupied
                    </div>
                </div>
                <Link
                    to="/login"
                    className="text-sm transition-all duration-300 hover:underline"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Registration;
