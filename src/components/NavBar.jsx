import React from 'react'   

const navItems = [
    {name: 'Home', href: '#hero'},
    {name: 'About', href: '#about'},
    {name: 'Skills', href: '#skills'},
    {name: 'Projects', href: '#projects'},
    {name: 'Contact', href: '#contact'},

];

const NavBar = () => {
    const [isScrolled, setIsScrolled];

    useEffect(()=> {
        const handleScroll= ()=> {
            
        }
    })
    return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300")}>
        NavBar

    </nav>
  )
}

export default NavBar;
