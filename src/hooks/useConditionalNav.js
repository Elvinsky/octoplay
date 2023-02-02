import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function useConditionalNav(path) {
    const navigate = useNavigate();

    useEffect(() => {
        if (path === '/') {
            navigate('/userpage');
        }
    }, [navigate, path]);
}
