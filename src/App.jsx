import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 dark:from-black dark:via-gray-900 dark:to-indigo-950 text-white dark:text-gray-200 min-h-screen transition-all duration-500">
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}