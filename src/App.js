import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AllNews from './routes/AllNews';
import Home from './routes/Home';
import Layout from './routes/Layout';
import Login from './routes/Login';
import News from './routes/News';
import Streams from './routes/Streams';
import UserPage from './routes/UserPage';
import Registration from './routes/Registration';
import NewsDetails from './routes/NewsDetails';
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
                    path: '/newspage',
                    element: <News />,
                },
                {
                    path: '/newspage/id-:id',
                    element: <NewsDetails />,
                },
                {
                    path: '/newspage/allnews',
                    element: <AllNews />,
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
