import { useEffect, useState } from 'react';

const HeroSection = () => {
    const roles = ["Back-End Engineer", "Software Engineer"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("")

    useEffect(()=> {
        const currentRole = roles[roleIndex];
        const visibleText = currentRole.substring(0, charIndex)
        setText(visibleText)

        let typingSpeed = isDeleting ? 60 : 100;
        let pauseBeforeDelete =1000;

        const timeout = setTimeout(()=> {
            if(!isDeleting && charIndex  < currentRole.length) {
                setCharIndex((prev)=> prev +1);
            } else if (isDeleting && charIndex > 0) {
                setCharIndex((prev)=> prev - 1);
            } else {
                if(!isDeleting) {
                    setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="text-center bg-gray-900 text-white px-4 min-h-screen flex items-center justify-center">
        <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Hello👋, I'm Ibrahim <span className="text-amber-400">Ibrahim Babatunde</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300">
                💻 I'm a{" "}
                <span className="text-blue font-semibold cursor-effect">{text}</span>
            </p>
        </div>
    </section>
  );
};

export default HeroSection;