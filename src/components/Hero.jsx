import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import avatar from "../assets/avatar2.png";
import resume from "../assets/Aditya_Bhanu_Resume.pdf";

export default function Hero() {
  return (
    <section
      className="
        flex flex-col md:flex-row
        items-center justify-center
        max-w-6xl mx-auto
        px-6 py-16 md:py-20
        gap-12 md:gap-[120px]
        min-h-[90vh] md:min-h-screen
      "
    >
      {/* TEXT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Hi, I'm <span className="text-accent">Aditya</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl mb-6 opacity-90">
          Frontend Architect | Full Stack Engineer | Cloud Practitioner
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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

      {/* IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <div className="group [perspective:1000px]">
          <div
            className="
              relative
              w-56 h-56
              sm:w-64 sm:h-64
              md:w-72 md:h-72
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
                border-4 border-white shadow-2xl
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