import {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Layout() {
    // const navigate = useNavigate();
    // useEffect(() => {
    //     navigate('/userpage');
    // }, [navigate]);
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
