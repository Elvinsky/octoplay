import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './routes/Home';
import Layout from './routes/Layout';
import Login from './routes/Login';
import News from './routes/News';
import Registration from './routes/Registration';
import Streams from './routes/Streams';
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
                {
                    path: '/news',
                    element: <News />,
                },
                {
                    path: '/streams',
                    element: <Streams />,
                },
                {
                    path: '/home',
                    element: <Home />,
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
