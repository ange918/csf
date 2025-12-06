import { motion } from "framer-motion";
import { Scissors, Gem, Palette, Sofa } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: <Gem size={40} />,
      title: "Accessoires de Mode",
      desc: "Création de bijoux et parures uniques en matériaux nobles.",
    },
    {
      icon: <Scissors size={40} />,
      title: "Draping & Couture",
      desc: "Techniques de moulage sur mannequin pour des créations haute couture.",
    },
    {
      icon: <Palette size={40} />,
      title: "Costumes Artistiques",
      desc: "Conception pour scènes, clips vidéo et productions cinématographiques.",
    },
    {
      icon: <Sofa size={40} />,
      title: "Décoration Afro",
      desc: "Aménagement d'espaces intérieurs avec une touche africaine chic.",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm uppercase tracking-widest font-bold mb-2">Mes Expertises</h2>
          <h3 className="text-4xl font-serif font-bold text-black">Domaines de Compétence</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10 text-center"
            >
              <div className="bg-primary/5 text-primary p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{skill.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
