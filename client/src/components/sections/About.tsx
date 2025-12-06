import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";
import profileImage from "@assets/generated_images/portrait_of_african_fashion_designer.png"; // Reusing or could use another if generated

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://i.ibb.co/Q7rWQvYB/Whats-App-Image-2025-12-06-at-14-48-05.jpg" 
                alt="Christelle FASSINOU" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-2xl z-0 hidden md:block"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-primary text-sm uppercase tracking-widest font-bold mb-2">À Propos</h2>
            <h3 className="text-4xl font-serif font-bold text-black mb-8">L'Art de l'Élégance Afro</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Christelle FASSINOU, de nationalité béninoise, résidant à Porto-Novo, incarne la fusion parfaite entre tradition et modernité. Passionnée par l'art sous toutes ses formes, elle s'est imposée comme une figure incontournable de la mode afro-contemporaine.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              En tant que CEO d'ANDYCHRIS, elle explore les matières, les textures et les couleurs pour créer des pièces uniques qui racontent une histoire. Son expertise s'étend de la création d'accessoires minutieux à la décoration d'intérieur, en passant par le costume de scène.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">+10 Événements</h4>
                  <p className="text-sm text-gray-500">Participation à des défilés de mode majeurs</p>
                </div>
              </div>

              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">2ème Place</h4>
                  <p className="text-sm text-gray-500">Trophée meilleur accessoiriste Afrique (Côte d’Ivoire)</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
