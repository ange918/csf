import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import img1 from "@assets/generated_images/african_gold_jewelry_accessories.png";
import img2 from "@assets/generated_images/fashion_draping_mannequin.png";
import img3 from "@assets/generated_images/african_chic_interior_decor.png";
import img4 from "@assets/generated_images/artistic_costume_design.png";

// Placeholder images for the 35 items. 
// REPLACE the 'src' values below with your direct ImgBB links (e.g., "https://i.ibb.co/...")
const galleryImages = [
  img1, img2, img3, img4, img1, img2, img3, img4, img1, 
  img2, img3, img4, img1, img2, img3, img4, img1, img2,
  img3, img4, img1, img2, img3, img4, img1, img2, img3,
  img4, img1, img2, img3, img4, img1, img2, img3
];

const galleryItems = galleryImages.map((src, index) => ({
  id: index + 1,
  src: src,
  title: `Création ${index + 1}` // Placeholder title
}));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryItems[0]>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm uppercase tracking-widest font-bold mb-2">Portfolio</h2>
          <h3 className="text-4xl font-serif font-bold text-black">Galerie de Créations</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }} // Faster stagger for many items
              className="group relative cursor-pointer overflow-hidden rounded-lg aspect-square bg-gray-100"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Subtle overlay on hover, no text */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
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
              className="max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
