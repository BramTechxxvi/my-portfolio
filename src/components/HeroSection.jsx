import { useEffect, useState } from 'react';

const HeroSection = () => {
    const roles = ["Back-End Engineer", "Software Engineer"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("")

    useEffect(()=> {
        const currentRole = roles[roleIndex];
        const visibleText = currentRole.subString(0, charIndex)
        setText(visibleText)

        let typingSpeed = isDeleting ? 60 : 100;

        const timeout = setTimeout(()=> {
            if(!isDeleting && charIndex  < currentRole.length) {
                setCharIndex((prev)=> prev +1);
            } else if (isDeleting && charIndex > 0) {
                setCharIndex((prev)=> prev - 1);
                setRoleIndex((prev)=> (prev + 1) % roles.length);
            } else {
                if(!isDeleting) {
                    setIsDeleting(true);
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

  return (
    <div>HeroSection</div>
  )
}
