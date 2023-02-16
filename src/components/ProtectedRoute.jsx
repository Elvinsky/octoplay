import {Navigate} from 'react-router-dom';
import useAdminCheck from '../hooks/useAdminCheck';
function ProtectedRoute({children}) {
    const [user] = useAdminCheck();
    if (!user) return <Navigate to="/login" />;
    return children;
}

export default ProtectedRoute;
