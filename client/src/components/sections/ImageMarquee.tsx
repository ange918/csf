import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

export default function ImageMarquee() {
  return (
    <section className="py-12 bg-black overflow-hidden relative border-y border-white/10">
      <div className="flex w-max">
        <motion.div
          className="flex gap-4 px-4"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed here
          }}
        >
          {/* Duplicate the list to create a seamless loop */}
          {[...images, ...images].map((src, index) => (
            <div 
              key={index} 
              className="relative w-[200px] h-[300px] md:w-[250px] md:h-[350px] shrink-0 rounded-lg overflow-hidden border border-white/20"
            >
              <img
                src={src}
                alt={`Realisation ${index}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
