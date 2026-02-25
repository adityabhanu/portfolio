import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 gap-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h2 className="text-5xl font-extrabold mb-6">
          Hi, I'm <span className="text-accent">Aditya</span>
        </h2>
        <p className="text-xl mb-6">
          Frontend Architect | Micro-Frontend Specialist | Cloud Engineer
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="px-6 py-3 bg-accent text-black rounded-xl font-semibold hover:scale-105 transition">Contact Me</a>
          <a href="/Aditya_Bhanu_Resume.pdf" download className="px-6 py-3 bg-white/20 rounded-xl hover:scale-105 transition">Download Resume</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <img
          src="/profile.jpg"
          alt="Aditya"
          className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-2xl"
        />
      </motion.div>
    </section>
  );
}