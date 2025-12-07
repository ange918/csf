import { Facebook, Instagram, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/andychris_creat?igsh=MTYyNTJkcmp3ejBrcA==",
      icon: <Instagram size={20} />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1ggniwYzDh/",
      icon: <Facebook size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/christelle-fassinou-0b54201ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <Linkedin size={20} />,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@andychris_creat?_r=1&_t=ZM-91EBtzjU5qC",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Galerie", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <img src="https://i.ibb.co/LzfYRzD8/log.jpg" alt="ANDYCHRIS" className="h-16 w-auto rounded-full" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              L'excellence de la mode et de la décoration afro-chic. Créations uniques, draping et costumes artistiques.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-primary hover:text-white p-2 rounded-full transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary text-sm uppercase tracking-widest font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-primary text-sm uppercase tracking-widest font-bold mb-6">Contactez-nous</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Mail className="text-primary shrink-0" size={20} />
                <div>
                  <span className="block text-white font-medium mb-1">Email</span>
                  <a href="mailto:andychriscreat@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                    andychriscreat@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary shrink-0" size={20} />
                <div>
                  <span className="block text-white font-medium mb-1">Téléphone</span>
                  <a href="tel:+2290161791627" className="text-gray-400 text-sm hover:text-white transition-colors">
                    +229 01 61 79 16 27
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-white font-serif font-bold">ANDYCHRIS</span>. Tous droits réservés.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm"
          >
            Retour en haut <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
