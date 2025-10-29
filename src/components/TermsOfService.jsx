import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function TermsOfService() {
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
        <h1 className="text-5xl font-bold mb-6 text-white">Termos de Serviço</h1>
        <p className="text-gray-300 text-lg mb-4">
          Estes termos regem o uso do site e serviços fornecidos. Ao acessar ou usar o site, você concorda com estes termos.
        </p>
        <p className="text-gray-300 text-lg mb-4">
          O site é fornecido “no estado em que se encontra” e o uso é de responsabilidade do usuário. 
          Reservamo-nos o direito de alterar os termos e serviços a qualquer momento.
        </p>
        <p className="text-gray-300 text-lg mb-4">
          O conteúdo fornecido não deve ser reproduzido ou utilizado sem autorização. Para dúvidas ou solicitações de permissão, contate-nos:
          <a href="mailto:contato.victordonolaferreira@outlook.com" className="text-blue-400 ml-1">contato.victordonolaferreira@outlook.com</a>.
        </p>
      </section>
      <Footer />
    </>
  );
}
