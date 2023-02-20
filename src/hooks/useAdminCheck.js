import {useMemo, useState} from 'react';

export default function useAdminCheck(deps = []) {
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState();
    useMemo(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        user ? setUser(user[0]) : setUser(undefined);
    }, []);
    useMemo(() => {
        const curUser = user;
        if (curUser) {
            curUser.status === 'admin' ? setAdmin(true) : setAdmin(false);
        } else {
            setAdmin(false);
        }
    }, [user]);
    return [user, admin];
}
