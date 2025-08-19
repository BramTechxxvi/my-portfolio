import { Outlet, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import BottomNav from "./BottomNav";

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

  return (
    <>
    <Header isHome={isHome} />
    <main className="relative min-h-screen">
        <Outlet />
        <BottomNav />
    </main>
    <Footer isHome={isHome} />
    </>
  )
}

export default Layout;