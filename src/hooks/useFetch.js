import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
export default function useFetch(arg) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(arg);
    }, []);
}
