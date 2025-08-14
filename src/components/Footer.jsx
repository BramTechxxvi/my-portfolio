const Footer = ()=> {
    return (
        <footer style={{ textAlign: 'center', padding: "1rem", color: "#e0e0e0" }}>
            <p>&copy; {new Date().getFullYear()} Ibrahim Ibrahim</p>
        </footer>
    );
}

export default Footer;


useEffect(() => {
    const currentRole = roles[roleIndex];
    const visibleText = currentRole.substring(0, charIndex);
    setText(visibleText);

    let typingSpeed = isDeleting ? 60 : 100;
    let pauseBeforeDelete = 1000;

    const timeout = setTimeout(() => {
        if (!isDeleting && charIndex < currentRole.length) {
            setCharIndex((prev) => prev + 1);
        } else if (isDeleting && charIndex > 0) {
            setCharIndex((prev) => prev - 1);
        } else {
            // Done typing, start deleting
            if (!isDeleting) {
                setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
            } else {
                // Done deleting, move to next role
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }
    }, typingSpeed);

    return () => clearTimeout(timeout);
}, [charIndex, isDeleting, roleIndex]);
