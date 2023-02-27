import {useMemo} from 'react';
import {USER_TYPE} from '../constants/user-type';

export default function useAdminCheck() {
    const user = useMemo(
        () => JSON.parse(localStorage.getItem('user'))?.[0],
        []
    );
    // ! better to just return the USER_TYPE here
    // and check the status in place, or define a function, like isAdmin(user)
    const isAdmin = useMemo(
        () => user?.status === USER_TYPE.ADMIN,
        [user?.status]
    );
    return [user, isAdmin];
}
