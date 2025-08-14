const Footer = ({ isHome })=> {
    return (
        <footer 
        className={`${ isHome? `bg-gray-900 text-gray-200` : `bg-gray-100 text-black`} text-center py-4`}
        >
            <p>&copy; {new Date().getFullYear()} Ibrahim Ibrahim</p>
        </footer>
    );
}

export default Footer;