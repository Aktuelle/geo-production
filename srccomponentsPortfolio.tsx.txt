"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

interface Project {
  id: number;
  titre: string;
  categorie: string;
  image_url: string;
  video_url: string;
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from("projets").select("*").order("id", { ascending: false });
      if (data) setProjects(data);
    };
    fetchProjects();
  }, []);

  // Fallback statique si la BDD est vide
  const displayProjects = projects.length ? projects : [
    { id: 1, titre: "[TITRE_PROJET_1]", categorie: "Vidéo", image_url: "/videos/thumb1.jpg", video_url: "/videos/projet1.webm" },
    { id: 2, titre: "[TITRE_PROJET_2]", categorie: "Design", image_url: "/videos/thumb2.jpg", video_url: "/videos/projet2.webm" },
    { id: 3, titre: "[TITRE_PROJET_3]", categorie: "Social", image_url: "/videos/thumb3.jpg", video_url: "/videos/projet3.webm" },
    { id: 4, titre: "[TITRE_PROJET_4]", categorie: "Vidéo", image_url: "/videos/thumb4.jpg", video_url: "/videos/projet4.webm" },
  ];

  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">Nos réalisations</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {displayProjects.map((project, index) => (
          <ScrollReveal key={project.id}>
            <div className={`relative group overflow-hidden rounded-2xl ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <img src={project.image_url} alt={project.titre} className="w-full h-full object-cover aspect-video" />
              <motion.div
                className="absolute inset-0 bg-geo-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <video src={project.video_url} autoPlay muted loop className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-heading font-bold">{project.titre}</h3>
                  <p className="text-geo-yellow">{project.categorie}</p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}