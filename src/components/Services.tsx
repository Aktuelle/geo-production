"use client";
import ScrollReveal from "./ScrollReveal";

const services = [
  { title: "Design", description: "Identité visuelle, logos, charte graphique." },
  { title: "Vidéo", description: "Montage, motion design, clips publicitaires." },
  { title: "Social Media", description: "Community management & création de contenu." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">Ce que nous faisons</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <ScrollReveal key={i}>
            <div className="bg-geo-black border border-gray-800 p-8 rounded-2xl hover:border-geo-yellow transition-colors group">
              <div className="w-12 h-12 mb-4 bg-geo-yellow/20 rounded-full flex items-center justify-center">
                <span className="text-geo-yellow text-2xl">●</span> {/* Icône placeholder */}
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">{s.title}</h3>
              <p className="text-geo-white/70">{s.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}