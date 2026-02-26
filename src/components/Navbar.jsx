import { Sun, Moon, Linkedin } from "lucide-react";

export default function Navbar({ dark, setDark }) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50
  backdrop-blur-xl
  bg-white/10 dark:bg-white/5
  border-b border-white/20 dark:border-white/10
  shadow-md"
    >
      {" "}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-lg tracking-wide text-white">
            Aditya Bhanu
          </h1>

          <div className="flex items-center gap-6">
            <a
              href="www.linkedin.com/in/aditya-bhanu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition text-white"
            >
              <Linkedin size={20} />
            </a>

            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
