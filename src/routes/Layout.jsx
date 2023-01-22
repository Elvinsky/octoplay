import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Layout() {
    return (
        <div className="w-[90%] m-auto p-2 ">
            <Header />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default Layout;
