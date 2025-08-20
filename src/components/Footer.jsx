const Footer = ({ isHome })=> {
    return (
        <footer 
    className={`${ isHome? `bg-gray-900 text-gray-200` : `bg-gray-100 text-black`} text-center px-8 py-5 sm:px-12 sm:py-7`}
        >
            <p>&copy; {new Date().getFullYear()} Ibrahim Ibrahim</p>
        </footer>
    );
}

export default Footer;