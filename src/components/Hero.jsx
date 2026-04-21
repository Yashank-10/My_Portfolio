import { useEffect, useRef } from "react";
import profileImage from "../assets/profile-removebg-preview.png";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <header className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 sm:px-8">
      <div className="mb-8">
        <img
          src={profileImage}
          alt="Yashank profile"
          className="animate-bounce-slow w-52 h-52 sm:w-64 sm:h-64 rounded-full object-cover"
        />
      </div>

      <div ref={textRef} className="reveal text-center max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
          Crafting solutions  <br className="hidden sm:block" />
          for real-world problems
          
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          Building smart systems that solve real problems. 
          I'm Yashank — a CSE
          student focused on Full Stack Development and Machine Learning. From
          AI-powered tools to scalable web apps, I turn ideas into impactful
          solutions.
        </p>
        <a
          href="#projects"
          className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 transform"
        >
          See My Work
        </a>
      </div>
    </header>
  );
}
