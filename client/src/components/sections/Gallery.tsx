import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Direct ImgBB links provided by user
const galleryImages = [
  "https://i.ibb.co/FbcYKvmz/Whats-App-Image-2025-12-05-at-22-21-20-1.jpg",
  "https://i.ibb.co/pj068TGz/Whats-App-Image-2025-12-05-at-22-21-20-2.jpg",
  "https://i.ibb.co/jPC4m9Bb/Whats-App-Image-2025-12-05-at-22-21-21.jpg",
  "https://i.ibb.co/vCTZ7bQv/Whats-App-Image-2025-12-05-at-22-21-21-2.jpg",
  "https://i.ibb.co/bj7FykJ9/Whats-App-Image-2025-12-05-at-22-21-21-1.jpg",
  "https://i.ibb.co/xt2zh06q/Whats-App-Image-2025-12-05-at-22-21-22.jpg",
  "https://i.ibb.co/xS1pS9BH/Whats-App-Image-2025-12-05-at-22-21-22-1.jpg",
  "https://i.ibb.co/5hhK1jp6/Whats-App-Image-2025-12-05-at-22-21-23-1.jpg",
  "https://i.ibb.co/qLY0JsCM/Whats-App-Image-2025-12-05-at-22-21-23.jpg",
  "https://i.ibb.co/C51wS785/Whats-App-Image-2025-12-05-at-22-21-24.jpg",
  "https://i.ibb.co/HDB8NWkr/Whats-App-Image-2025-12-05-at-22-21-23-2.jpg",
  "https://i.ibb.co/xKFCJtg1/Whats-App-Image-2025-12-05-at-22-21-24-1.jpg",
  "https://i.ibb.co/3mHGgyMN/Whats-App-Image-2025-12-05-at-22-21-24-2.jpg",
  "https://i.ibb.co/kkbXcpm/Whats-App-Image-2025-12-05-at-22-21-24-3.jpg",
  "https://i.ibb.co/35qBQNr3/Whats-App-Image-2025-12-05-at-22-21-25.jpg",
  "https://i.ibb.co/v47XWbg0/Whats-App-Image-2025-12-05-at-22-21-25-1.jpg",
  "https://i.ibb.co/vvTQXtLX/Whats-App-Image-2025-12-05-at-22-21-25-2.jpg",
  "https://i.ibb.co/MD54PLJg/Whats-App-Image-2025-12-05-at-22-21-25-3.jpg",
  "https://i.ibb.co/cSk4pv27/Whats-App-Image-2025-12-05-at-22-21-26.jpg",
  "https://i.ibb.co/9kq8chhK/Whats-App-Image-2025-12-05-at-22-21-26-1.jpg",
  "https://i.ibb.co/jZ3c53Yh/Whats-App-Image-2025-12-05-at-22-21-26-2.jpg",
  "https://i.ibb.co/kVDsFtZJ/Whats-App-Image-2025-12-05-at-22-21-26-3.jpg",
  "https://i.ibb.co/B5bxQFFN/Whats-App-Image-2025-12-05-at-22-21-27.jpg",
  "https://i.ibb.co/rfNprdj4/Whats-App-Image-2025-12-05-at-22-21-27-1.jpg",
  "https://i.ibb.co/sp4yzN8x/Whats-App-Image-2025-12-05-at-22-21-27-2.jpg",
  "https://i.ibb.co/hJQrWvzv/Whats-App-Image-2025-12-05-at-22-21-27-3.jpg",
  "https://i.ibb.co/Y7T8cQ08/Whats-App-Image-2025-12-05-at-22-21-28.jpg",
  "https://i.ibb.co/h1hQsQ9Z/Whats-App-Image-2025-12-05-at-22-21-28-1.jpg",
  "https://i.ibb.co/SwLfgMFm/Whats-App-Image-2025-12-05-at-22-21-28-2.jpg",
  "https://i.ibb.co/xKrNJ3Rx/Whats-App-Image-2025-12-05-at-22-21-29.jpg",
  "https://i.ibb.co/Kpb2Sb5y/Whats-App-Image-2025-12-05-at-22-21-29-1.jpg",
  "https://i.ibb.co/1GqT4vD3/Whats-App-Image-2025-12-05-at-22-21-29-2.jpg",
  "https://i.ibb.co/SX6Tmnsq/Whats-App-Image-2025-12-05-at-22-21-29-3.jpg",
  "https://i.ibb.co/TDJCnrSx/Whats-App-Image-2025-12-05-at-22-21-30.jpg",
  "https://i.ibb.co/1ynfNgr/Whats-App-Image-2025-12-05-at-22-21-30-1.jpg"
];

const galleryItems = galleryImages.map((src, index) => ({
  id: index + 1,
  src: src,
  title: `Création ${index + 1}`
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
              transition={{ delay: index * 0.02 }} 
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
