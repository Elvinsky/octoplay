/* eslint-disable react-hooks/exhaustive-deps */
import {useMemo, useState} from 'react';

export default function useAdminCheck(deps = []) {
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState({});
    useMemo(() => {
        setUser(JSON.parse(localStorage.getItem('user'))[0]);
    }, []);
    useMemo(() => {
        const curUser = user;
        curUser.status === 'admin' ? setAdmin(true) : setAdmin(false);
    }, [user]);
    return [user, admin];
}
