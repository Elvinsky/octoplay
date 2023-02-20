import {Outlet, useLocation} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useConditionalNav from '../hooks/useConditionalNav';

function Layout() {
    const location = useLocation();
    useConditionalNav(location.pathname);
    return (
        <div className="m-auto bg-gradient-to-b from-[#323232] to-[#141414]">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
