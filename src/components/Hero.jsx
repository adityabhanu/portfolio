import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import avatar from "../assets/avatar2.png";
import resume from "../assets/Aditya_Bhanu_Resume.pdf";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-6 py-20 gap-[120px]">
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
          Frontend Architect | Full Stack Engineer | Cloud Practitioner
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-accent text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            Contact Me
          </a>
          <a
            href={resume}
            download
            className="px-6 py-3 bg-white/20 rounded-xl hover:scale-105 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <div className="group [perspective:1000px]">
          <div
            className="
        relative w-72 h-72
        transition-transform duration-700
        [transform-style:preserve-3d]
        group-hover:[transform:rotateY(180deg)]
      "
          >
            {/* FRONT */}
            <div
              className="
          absolute inset-0
          rounded-full overflow-hidden
          border-4 border-white shadow-2xl
          [backface-visibility:hidden]
        "
            >
              <img
                src={profile}
                alt="Aditya"
                className="w-full h-full object-cover"
              />
            </div>

            {/* BACK */}
            <div
              className="
          absolute inset-0
          rounded-full overflow-hidden
          bg-white/20 backdrop-blur-xl
          border-4 border-white shadow-2xl
          flex items-center justify-center
          [transform:rotateY(180deg)]
          [backface-visibility:hidden]
        "
            >
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
