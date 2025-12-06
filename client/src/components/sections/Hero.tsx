import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/portrait_of_african_fashion_designer.png";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Christelle FASSINOU - Afro Fashion Artist"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-primary text-lg md:text-xl uppercase tracking-[0.2em] mb-4 font-medium">
            La touche Afro-Chic
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Christelle Sènan M. <br /> FASSINOU
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-light mb-10 italic max-w-3xl mx-auto">
            “Accessoiriste, Costumière & Décoratrice Afro”
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary text-white hover:bg-white hover:text-black px-8 py-4 rounded-full uppercase tracking-widest text-sm font-bold transition-all duration-300 min-w-[200px]"
            >
              Voir mes créations
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-white text-white hover:border-primary hover:text-primary px-8 py-4 rounded-full uppercase tracking-widest text-sm font-bold transition-all duration-300 min-w-[200px]"
            >
              Me contacter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
