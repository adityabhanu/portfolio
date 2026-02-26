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
      <div
        className="
          min-h-screen
          bg-gradient-to-br 
          from-indigo-500 via-purple-600 to-pink-500
          dark:from-black dark:via-gray-900 dark:to-indigo-950
          text-white dark:text-gray-200
          transition-all duration-500
        "
      >
        <Navbar dark={dark} setDark={setDark} />

        <main className="pt-20">
          <section
            id="hero"
            className="snap-start min-h-screen flex items-center"
          >
            <Hero />
          </section>

          <section
            id="about"
            className="snap-start min-h-screen flex items-center"
          >
            <About />
          </section>

          <section
            id="skills"
            className="snap-start min-h-screen flex items-center"
          >
            <Skills />
          </section>

          <section
            id="experience"
            className="snap-start min-h-screen flex items-center"
          >
            <Experience />
          </section>

          {/* <section
            id="projects"
            className="snap-start min-h-screen flex items-center"
          >
            <Projects />
          </section> */}

          <section
            id="contact"
            className="snap-start min-h-screen flex items-center"
          >
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}
