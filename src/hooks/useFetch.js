import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
export default function useFetch(arg, deps = []) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(arg);
    }, deps);
}
