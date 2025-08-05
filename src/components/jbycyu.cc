import { useEffect, useState } from "react";
import "../styles/HeroSection.css"; // Adjust path based on your structure

const HeroSection = () => {
  const roles = ["Frontend Engineer", "Software Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const visibleText = currentRole.substring(0, charIndex);
    setText(visibleText);

    let typingSpeed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        if (!isDeleting) {
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
    <section className="text-center px-4 min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          👋 Hello, I'm <span className="text-amber-400">sosososo</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300">
          💻 I'm a{" "}
          <span className="text-white font-semibold cursor-effect">
            {text}
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;



.cursor-effect::after {
  content: '|';
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
