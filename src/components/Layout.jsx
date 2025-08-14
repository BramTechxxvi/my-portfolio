import { Outlet } from "react-router-dom";


const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    
  return (
    <div>Layout</div>
  )
}
