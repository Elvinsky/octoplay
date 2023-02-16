import {useEffect, useState} from 'react';

export default function useAdminCheck(deps) {
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState({});
    useEffect(() => {
        const curUser = user;
        setUser(JSON.parse(localStorage.getItem('user'))[0]);
        curUser.status === 'admin' ? setAdmin(true) : setAdmin(false);
    }, [user]);
    return [user, admin];
}
