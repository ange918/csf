import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

import img1 from "@assets/generated_images/african_gold_jewelry_accessories.png";
import img2 from "@assets/generated_images/fashion_draping_mannequin.png";
import img3 from "@assets/generated_images/african_chic_interior_decor.png";
import img4 from "@assets/generated_images/artistic_costume_design.png";

// Duplicate images to create a fuller grid
const galleryItems = [
  { id: 1, src: img1, category: "Accessoires", title: "Parure Royale" },
  { id: 2, src: img2, category: "Draping", title: "Robe Soirée Wax" },
  { id: 3, src: img3, category: "Décoration", title: "Salon Moderne" },
  { id: 4, src: img4, category: "Costumes", title: "Scène Théâtre" },
  { id: 5, src: img1, category: "Accessoires", title: "Bracelet Or" },
  { id: 6, src: img2, category: "Draping", title: "Création Unique" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryItems[0]>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm uppercase tracking-widest font-bold mb-2">Portfolio</h2>
          <h3 className="text-4xl font-serif font-bold text-black">Galerie de Créations</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl aspect-square"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <span className="text-primary text-xs uppercase tracking-widest font-bold mb-2">{item.category}</span>
                <h4 className="text-2xl font-serif font-bold mb-4">{item.title}</h4>
                <ZoomIn className="text-white/80" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <div 
              className="max-w-4xl w-full max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[85vh] rounded-md"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-2xl font-serif">{selectedImage.title}</h3>
                <p className="text-primary uppercase text-sm tracking-widest">{selectedImage.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
