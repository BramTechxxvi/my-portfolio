const Footer = ()=> {
    return (
        <footer style={{ textAlign: 'center', padding: "1rem", color: "#e0e0e0" }}>
            <p>&copy; {new Date().getFullYear()} Ibrahim Ibrahim</p>
        </footer>
    );
}

export default Footer;


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
