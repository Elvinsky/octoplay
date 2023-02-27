import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

// No references of this. Should we delete?
export default function useConditionalNav(path) {
    const navigate = useNavigate();

    useEffect(() => {
        if (path === '/') {
            navigate('/userpage');
        }
    }, [navigate, path]);
}
