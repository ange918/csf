export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-white font-serif font-bold">ANDYCHRIS</span>. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
