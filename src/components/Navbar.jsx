import { Sun, Moon } from "lucide-react";

export default function Navbar({ dark, setDark }) {
  return (
    <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
      <h1 className="font-bold text-2xl">Aditya Bhanu</h1>
      <button
        onClick={() => setDark(!dark)}
        className="p-2 rounded-full bg-white/20 hover:bg-white/30"
      >
        {dark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
}