import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Rénovation Moderne",
    description: "Transformation complète d'un espace de vie avec des finitions haut de gamme. Intégration de matériaux nobles et d'un éclairage architectural pour créer une ambiance chaleureuse et contemporaine.",
    image: "https://i.ibb.co/JFdWK3Q2/Whats-App-Image-2025-12-07-at-07-22-38-2-Copie.jpg",
    tags: ["Design", "Rénovation", "Intérieur"]
  },
  {
    title: "Espace Cuisine & Salon",
    description: "Conception d'une aire ouverte maximisant la lumière naturelle. L'agencement fluide permet une transition harmonieuse entre la cuisine fonctionnelle et le salon convivial.",
    image: "https://i.ibb.co/gMKT9rWQ/Whats-App-Image-2025-12-07-at-07-22-38-3-Copie.jpg",
    tags: ["Cuisine", "Agencement", "Lumière"]
  },
  {
    title: "Détails Architecturaux",
    description: "Une attention particulière portée aux détails de construction et aux finitions. Chaque élément est soigneusement sélectionné pour contribuer à l'esthétique globale du projet.",
    image: "https://i.ibb.co/pBZ5j5K6/Whats-App-Image-2025-12-07-at-07-22-39-Copie.jpg",
    tags: ["Architecture", "Finitions", "Détail"]
  },
  {
    title: "Aménagement Sur Mesure",
    description: "Réalisation de mobilier et d'agencements sur mesure pour optimiser l'espace et répondre parfaitement aux besoins spécifiques des occupants.",
    image: "https://i.ibb.co/qMHc93Bd/Whats-App-Image-2025-12-07-at-07-22-39-1-Copie.jpg",
    tags: ["Sur Mesure", "Mobilier", "Optimisation"]
  }
];

export default function ProjectShowcase() {
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
            Nos Réalisations en Détail
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground md:text-lg max-w-[800px] mx-auto"
          >
            Découvrez la qualité et la précision de notre travail à travers ces projets récents.
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
                "flex flex-col gap-8 md:gap-16 items-center",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              <div className="flex-1 w-full relative group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative element */}
                <div className={cn(
                  "absolute -z-10 w-full h-full border-2 border-primary/20 rounded-2xl top-4 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0",
                  index % 2 === 0 ? "-left-4 group-hover:-translate-x-2 group-hover:-translate-y-2" : "-right-4 group-hover:translate-x-2 group-hover:-translate-y-2"
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
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
