import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const startDate = new Date("2018-10-01");
    const now = new Date();

    const totalMonths =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());

    const totalYears = totalMonths / 12;

    let current = 0;
    const interval = setInterval(() => {
      current += 0.5;
      if (current >= totalYears) {
        current = totalYears;
        clearInterval(interval);
      }
      setExperience(parseFloat(current.toFixed(1)));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-center">
      <h3 className="text-3xl font-bold mb-8">About Me</h3>

      {/* Animated Experience Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
      >
        {experience}+ Years Experience
      </motion.div>

      <p className="text-lg leading-relaxed opacity-90">
        I am a Software Engineer with strong expertise in frontend architecture,
        full stack web development, scalable platform engineering, and
        cloud-native application development. I have been building
        enterprise-grade web solutions with a focus on scalable frontend
        architecture, design systems, and performance-driven user experiences.
      </p>

      <p className="text-lg leading-relaxed opacity-90 mt-6">
        Currently at <span className="font-semibold">CNH Industrial</span>, I
        lead frontend delivery across multiple global platforms, architect
        modular Web Component-based systems, and drive the development of a
        centralized Design Language System used across brands. My experience
        spans Azure and AWS cloud ecosystems, CI/CD automation, REST API
        development, and secure enterprise integrations.
      </p>

      <p className="text-lg leading-relaxed opacity-90 mt-6">
        With a background in full-stack engineering across React, .NET Core,
        Node.js, and Python, I combine architectural thinking with hands-on
        execution to build scalable, maintainable, and high-impact digital
        products.
      </p>
    </section>
  );
}
