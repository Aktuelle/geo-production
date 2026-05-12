"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourrez connecter un webhook ou Supabase
    alert("Message envoyé !");
  };

  return (
    <footer id="contact" className="bg-geo-black border-t border-gray-800 py-16 px-6">
      <ScrollReveal>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">Parlons de votre projet</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-geo-white placeholder-geo-white/50 focus:border-geo-yellow outline-none"
              required
              value={form.nom}
              onChange={(e) => setForm({ ...form, nom: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-geo-white placeholder-geo-white/50 focus:border-geo-yellow outline-none"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              placeholder="Votre message"
              rows={4}
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-geo-white placeholder-geo-white/50 focus:border-geo-yellow outline-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
            <button
              type="submit"
              className="bg-geo-yellow text-geo-black font-heading font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform"
            >
              Envoyer
            </button>
          </form>
          <p className="mt-8 text-sm text-geo-white/50">
            © {new Date().getFullYear()} Geo Production – Lomé, Togo
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
}