import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="text-center py-20">
      <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
      <div className="flex justify-center gap-6">
        <a href="mailto:adityabhanu08@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-accent text-black rounded-xl font-semibold hover:scale-105 transition">
          <Mail size={18}/> Email Me
        </a>
        <a href="tel:+917529976825" className="flex items-center gap-2 px-6 py-3 bg-white/20 rounded-xl hover:scale-105 transition">
          <Phone size={18}/> Call Me
        </a>
      </div>
    </section>
  );
}