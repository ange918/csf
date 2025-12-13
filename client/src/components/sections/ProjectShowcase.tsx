import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const newCollectionImages = [
  "https://i.ibb.co/fcwhPYG/Whats-App-Image-2025-12-11-at-15-52-52.jpg",
  "https://i.ibb.co/P8pLPCk/Whats-App-Image-2025-12-11-at-15-52-51.jpg",
  "https://i.ibb.co/fwdHzxt/Whats-App-Image-2025-12-11-at-15-52-50.jpg",
  "https://i.ibb.co/svQgkK6N/Whats-App-Image-2025-12-11-at-15-52-49.jpg",
  "https://i.ibb.co/Dg5nYzWL/Whats-App-Image-2025-12-11-at-15-52-48.jpg",
  "https://i.ibb.co/0pFzqcLv/Whats-App-Image-2025-12-11-at-15-52-46.jpg",
  "https://i.ibb.co/842Lk94M/Whats-App-Image-2025-12-11-at-15-52-45-1.jpg",
  "https://i.ibb.co/v4J9Lkdq/Whats-App-Image-2025-12-11-at-15-52-45.jpg",
  "https://i.ibb.co/KpSwBBnT/Whats-App-Image-2025-12-11-at-15-52-44-1.jpg",
  "https://i.ibb.co/6JpHb2tL/Whats-App-Image-2025-12-11-at-15-52-44.jpg",
  "https://i.ibb.co/LzKCj4ky/Whats-App-Image-2025-12-11-at-15-52-43.jpg",
  "https://i.ibb.co/99SqJzVh/Whats-App-Image-2025-12-11-at-15-52-40.jpg",
  "https://i.ibb.co/Y4WSSGB2/Whats-App-Image-2025-12-11-at-15-52-39.jpg",
  "https://i.ibb.co/b5TnXN5n/Whats-App-Image-2025-12-11-at-15-52-38.jpg",
  "https://i.ibb.co/tPBJVhXT/Whats-App-Image-2025-12-11-at-15-52-37.jpg",
  "https://i.ibb.co/BH9tZdrZ/Whats-App-Image-2025-12-11-at-15-52-36.jpg",
  "https://i.ibb.co/Pzm9mhDb/Whats-App-Image-2025-12-11-at-15-52-35.jpg",
  "https://i.ibb.co/MDg4Srbz/Whats-App-Image-2025-12-11-at-15-52-34.jpg",
  "https://i.ibb.co/Y7mt1V2c/Whats-App-Image-2025-12-11-at-15-52-33.jpg",
  "https://i.ibb.co/5WQLXP0h/Whats-App-Image-2025-12-11-at-15-52-32.jpg",
  "https://i.ibb.co/KYrN0nd/Whats-App-Image-2025-12-11-at-15-52-30.jpg",
  "https://i.ibb.co/7N8LSdxC/Whats-App-Image-2025-12-11-at-15-52-29.jpg",
  "https://i.ibb.co/9mHh6Vgw/Whats-App-Image-2025-12-11-at-15-52-28-1.jpg",
  "https://i.ibb.co/QvBvpgz8/Whats-App-Image-2025-12-11-at-15-52-28.jpg",
  "https://i.ibb.co/dJ70MMTv/Whats-App-Image-2025-12-11-at-15-52-25.jpg"
];

const projects = [
  {
    title: "Coussins de fauteuil",
    description: "Confort et élégance avec nos coussins aux motifs africains uniques.",
    tags: ["Décoration", "Confort"],
    image: "https://i.ibb.co/MxGtZ0MR/Whats-App-Image-2025-12-07-at-07-22-38.jpg"
  },
  {
    title: "Décor mural",
    description: "Habillez vos murs avec nos créations artistiques originales.",
    tags: ["Art", "Décoration"],
    image: "https://i.ibb.co/hRdPnM7q/Whats-App-Image-2025-12-07-at-07-22-34.jpg"
  },
  {
    title: "Poufs",
    description: "Assises d'appoint confortables et colorées pour votre salon.",
    tags: ["Mobilier", "Confort"],
    image: "https://i.ibb.co/pB7PzHwM/Whats-App-Image-2025-12-07-at-07-22-36-2.jpg"
  },
  {
    title: "Boîtes cadeau",
    description: "Emballages soignés et réutilisables pour vos présents.",
    tags: ["Accessoire", "Cadeau"],
    image: "https://i.ibb.co/pBZ5j5K6/Whats-App-Image-2025-12-07-at-07-22-39-Copie.jpg"
  },
  {
    title: "Mini tableau wax",
    description: "Petites touches artistiques en tissu wax pour égayer vos espaces.",
    tags: ["Art", "Wax"],
    image: "https://i.ibb.co/7tc68K4N/Whats-App-Image-2025-12-07-at-07-22-37-1.jpg"
  },
  {
    title: "Carte d'Afrique en wax",
    description: "Représentation stylisée du continent africain en tissu.",
    tags: ["Décoration", "Culture"],
    image: "https://i.ibb.co/HpKBqLRG/Whats-App-Image-2025-12-07-at-07-22-34-2.jpg"
  },
  {
    title: "Sous tasse",
    description: "Protégez vos tables avec style grâce à nos sous-tasses artisanaux.",
    tags: ["Art de la table"],
    image: "https://i.ibb.co/qMHc93Bd/Whats-App-Image-2025-12-07-at-07-22-39-1-Copie.jpg"
  },
  {
    title: "Chemin de table et torchons",
    description: "Linge de maison aux motifs traditionnels pour une table accueillante.",
    tags: ["Linge de maison", "Tradition"],
    image: "https://i.ibb.co/7tkfJkgV/Whats-App-Image-2025-12-07-at-07-22-35-1.jpg"
  },
  {
    title: "Mobiliers en attente",
    description: "Projets de mobilier sur mesure en cours de réalisation.",
    tags: ["Mobilier", "Sur Mesure"],
    image: "https://i.ibb.co/chKmbbDP/Whats-App-Image-2025-12-07-at-07-22-33-1.jpg"
  },
  {
    title: "Les merveilles des cauris",
    description: "Une sélection variée de nos plus belles réalisations. Cliquez pour découvrir notre galerie complète.",
    tags: ["Collection", "Galerie", "Exclusif"],
    image: newCollectionImages[0],
    galleryImages: newCollectionImages
  }
];

export default function ProjectShowcase() {
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (images: string[]) => {
    setSelectedGallery(images);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedGallery) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedGallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedGallery) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length);
    }
  };

  return (
    <section className="py-24 bg-background overflow-hidden" id="projets">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Nos Réalisations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground md:text-lg max-w-[800px] mx-auto"
          >
            Découvrez la diversité de nos créations artisanales, alliant tradition et modernité.
          </motion.p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={cn(
                "flex flex-col gap-8 md:gap-16 items-center cursor-pointer group/card",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
              onClick={() => project.galleryImages && openGallery(project.galleryImages)}
            >
              <div className="flex-1 w-full relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover/card:scale-105 transition-transform duration-700"
                  />
                  {project.galleryImages && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 bg-black/30">
                      <span className="text-white border border-white px-4 py-2 rounded-full uppercase text-sm tracking-widest font-medium">
                        Voir la galerie
                      </span>
                    </div>
                  )}
                </div>
                {/* Decorative element */}
                <div className={cn(
                  "absolute -z-10 w-full h-full border-2 border-primary/20 rounded-2xl top-4 transition-transform duration-500 group-hover/card:translate-x-0 group-hover/card:translate-y-0",
                  index % 2 === 0 ? "-left-4 group-hover/card:-translate-x-2 group-hover/card:-translate-y-2" : "-right-4 group-hover/card:translate-x-2 group-hover/card:-translate-y-2"
                )} />
              </div>

              <div className="flex-1 space-y-6 md:px-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover/card:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                {project.galleryImages && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openGallery(project.galleryImages!);
                    }}
                    className="mt-4 px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors uppercase text-sm font-medium tracking-wider rounded-full"
                  >
                    Voir la galerie
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={closeGallery}
          >
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            >
              <X size={32} />
            </button>

            <div className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedGallery[currentImageIndex]}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
                
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm text-white text-sm">
                  {currentImageIndex + 1} / {selectedGallery.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
