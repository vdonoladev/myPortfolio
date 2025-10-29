import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function CookieSettings() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <section className="py-16 sm:py-20 px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-white">Configurações de Cookies</h1>
        <p className="text-gray-300 text-lg mb-4">
          Nosso site <strong>não utiliza cookies</strong> para rastrear sua navegação ou coletar dados pessoais. 
        </p>
        <p className="text-gray-300 text-lg">
          Isso significa que sua experiência é privada e segura, sem armazenamento de informações adicionais no seu dispositivo.
        </p>
      </section>
      <Footer />
    </>
  );
}
