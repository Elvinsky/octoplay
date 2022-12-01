import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './routes/Layout';
import Login from './routes/Login';
import Registration from './routes/Registration';
import UserPage from './routes/UserPage';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: '/userpage',
                    element: <UserPage />,
                },
            ],
        },

        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/registration',
            element: <Registration />,
        },
    ]);
    return <RouterProvider router={router} />;
}
export default App;
