import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function PrivacyPolicy() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <section className="py-16 sm:py-20 px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-white">Política de Privacidade</h1>
        <p className="text-gray-300 text-lg mb-4">
          Aqui você explica como coleta, usa e protege os dados dos usuários do seu site. 
          Por exemplo: informações de contato, cookies, formulários de contato, etc.
        </p>
        <p className="text-gray-300 text-lg mb-4">
          As informações fornecidas pelos usuários serão utilizadas apenas para fins de comunicação e melhorias nos serviços oferecidos. 
          Nunca vendemos ou compartilhamos seus dados com terceiros sem consentimento.
        </p>
        <p className="text-gray-300 text-lg">
          Para qualquer dúvida sobre esta política, entre em contato pelo nosso email: 
          <a href="mailto:contato.victordonolaferreira@outlook.com" className="text-blue-400 ml-1">contato.victordonolaferreira@outlook.com</a>.
        </p>
      </section>
      <Footer />
    </>
  );
}
