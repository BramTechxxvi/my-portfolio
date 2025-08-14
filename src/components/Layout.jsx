import { Outlet, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

  return (
    <>
    <Header isHome={isHome} />
    <main>
        <Outlet />
    </main>
    </>
  )
}
