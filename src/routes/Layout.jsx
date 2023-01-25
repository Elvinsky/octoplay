import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import HeaderMUI from '../components/HeaderMUI';
import useConditionalNav from '../hooks/useConditionalNav';

function Layout() {
    const location = useLocation();
    useConditionalNav(location.pathname);
    return (
        <div className="m-auto p-2 ">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
