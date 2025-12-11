import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const images = [
  "https://i.ibb.co/JFdWK3Q2/Whats-App-Image-2025-12-07-at-07-22-38-2-Copie.jpg",
  "https://i.ibb.co/gMKT9rWQ/Whats-App-Image-2025-12-07-at-07-22-38-3-Copie.jpg",
  "https://i.ibb.co/pBZ5j5K6/Whats-App-Image-2025-12-07-at-07-22-39-Copie.jpg",
  "https://i.ibb.co/qMHc93Bd/Whats-App-Image-2025-12-07-at-07-22-39-1-Copie.jpg",
  "https://i.ibb.co/4Z28cZkB/Whats-App-Image-2025-12-07-at-07-22-33.jpg",
  "https://i.ibb.co/chKmbbDP/Whats-App-Image-2025-12-07-at-07-22-33-1.jpg",
  "https://i.ibb.co/hRdPnM7q/Whats-App-Image-2025-12-07-at-07-22-34.jpg",
  "https://i.ibb.co/WvrJtjYq/Whats-App-Image-2025-12-07-at-07-22-34-1.jpg",
  "https://i.ibb.co/HpKBqLRG/Whats-App-Image-2025-12-07-at-07-22-34-2.jpg",
  "https://i.ibb.co/gLzqnndD/Whats-App-Image-2025-12-07-at-07-22-35.jpg",
  "https://i.ibb.co/7tkfJkgV/Whats-App-Image-2025-12-07-at-07-22-35-1.jpg",
  "https://i.ibb.co/NdvDf1vz/Whats-App-Image-2025-12-07-at-07-22-36.jpg",
  "https://i.ibb.co/DPH2YVNd/Whats-App-Image-2025-12-07-at-07-22-37-2.jpg"
];

const projects = [
  {
    title: "Coussins de fauteuil",
    description: "Confort et élégance avec nos coussins aux motifs africains uniques.",
    tags: ["Décoration", "Confort"],
    image: images[0]
  },
  {
    title: "Décor mural",
    description: "Habillez vos murs avec nos créations artistiques originales.",
    tags: ["Art", "Décoration"],
    image: images[1]
  },
  {
    title: "Poufs",
    description: "Assises d'appoint confortables et colorées pour votre salon.",
    tags: ["Mobilier", "Confort"],
    image: images[2]
  },
  {
    title: "Boîtes cadeau",
    description: "Emballages soignés et réutilisables pour vos présents.",
    tags: ["Accessoire", "Cadeau"],
    image: images[3]
  },
  {
    title: "Mini tableau wax",
    description: "Petites touches artistiques en tissu wax pour égayer vos espaces.",
    tags: ["Art", "Wax"],
    image: images[4]
  },
  {
    title: "Carte d'Afrique en wax",
    description: "Représentation stylisée du continent africain en tissu.",
    tags: ["Décoration", "Culture"],
    image: images[5]
  },
  {
    title: "Sous tasse",
    description: "Protégez vos tables avec style grâce à nos sous-tasses artisanaux.",
    tags: ["Art de la table"],
    image: images[6]
  },
  {
    title: "Guirlandes",
    description: "Décoration festive et colorée pour toutes vos occasions.",
    tags: ["Décoration", "Fête"],
    image: images[7]
  },
  {
    title: "Bouteille déco",
    description: "Bouteilles recyclées et décorées à la main pour une touche unique.",
    tags: ["Recyclage", "Art"],
    image: images[8]
  },
  {
    title: "Porte-clés",
    description: "Accessoires du quotidien aux couleurs vibrantes.",
    tags: ["Accessoire", "Quotidien"],
    image: images[9]
  },
  {
    title: "Porte-bic en jacinthe et cauris",
    description: "Rangement de bureau naturel orné de coquillages cauris.",
    tags: ["Bureau", "Naturel"],
    image: images[10]
  },
  {
    title: "Carte menu mariage ethnique",
    description: "Papeterie événementielle personnalisée au style ethnique chic.",
    tags: ["Mariage", "Papeterie"],
    image: images[11]
  },
  {
    title: "Chemin de table et torchons",
    description: "Linge de maison aux motifs traditionnels pour une table accueillante.",
    tags: ["Linge de maison", "Tradition"],
    image: images[12]
  },
  {
    title: "Éventail",
    description: "Accessoire élégant et pratique pour se rafraîchir avec style.",
    tags: ["Accessoire", "Mode"],
    image: images[0]
  },
  {
    title: "Déco événement",
    description: "Scénographie complète pour vos événements aux thèmes africains.",
    tags: ["Événementiel", "Décoration"],
    image: images[1]
  },
  {
    title: "Fond photo studio à l'africaine",
    description: "Décors immersifs pour vos séances photos professionnelles.",
    tags: ["Studio", "Photo"],
    image: images[2]
  },
  {
    title: "Mobiliers en attente",
    description: "Projets de mobilier sur mesure en cours de réalisation.",
    tags: ["Mobilier", "Sur Mesure"],
    image: images[3]
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
            Nos Créalisations
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
