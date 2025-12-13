import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Timeline() {
  const education = [
    { year: "2018", title: "Licence Professionnelle", desc: "Anglais Américain" },
    { year: "2015", title: "BTS Communication", desc: "Communication d'entreprise" },
    { year: "2012", title: "BAC", desc: "Série Scientifique" },
  ];

  const experience = [
    { year: "Présent", title: "CEO Andychris", desc: "Direction artistique et création de la marque" },
    { year: "2019-2021", title: "Assistante ASA à la FBF", desc: "Fédération Béninoise de Football" },
    { year: "2016-2018", title: "Secrétaire", desc: "SB CONSTRUCTION" },
  ];

  return (
    <section id="timeline" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm uppercase tracking-widest font-bold mb-2">Mon Parcours</h2>
          <h3 className="text-4xl font-serif font-bold text-white">Formation & Expérience</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={28} />
              <h4 className="text-2xl font-serif">Diplômes & Formation</h4>
            </div>
            <div className="space-y-8 border-l border-white/20 pl-8 ml-3 relative">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-neutral-900 bg-primary"></span>
                  <span className="text-primary text-sm font-bold tracking-wider block mb-1">{item.year}</span>
                  <h5 className="text-xl font-bold mb-1">{item.title}</h5>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary" size={28} />
              <h4 className="text-2xl font-serif">Expérience Professionnelle</h4>
            </div>
            <div className="space-y-8 border-l border-white/20 pl-8 ml-3 relative">
              {experience.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-neutral-900 bg-primary"></span>
                  <span className="text-primary text-sm font-bold tracking-wider block mb-1">{item.year}</span>
                  <h5 className="text-xl font-bold mb-1">{item.title}</h5>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
