import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:adityabhanu08@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-accent text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            <Mail size={18} /> Email
          </a>

          <a
            href="tel:+917529976825"
            className="flex items-center gap-2 px-6 py-3 bg-white/20 rounded-xl hover:scale-105 transition"
          >
            <Phone size={18} /> Call
          </a>

          <a
            href="www.linkedin.com/in/aditya-bhanu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-xl hover:scale-105 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
