/* eslint-disable react-hooks/exhaustive-deps */
import {useMemo, useState} from 'react';

export default function useAdminCheck(deps = []) {
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState({});
    useMemo(() => {
        const curUser = user;
        setUser(JSON.parse(localStorage.getItem('user'))[0]);
        curUser.status === 'admin' ? setAdmin(true) : setAdmin(false);
    }, deps);
    return [user, admin];
}
