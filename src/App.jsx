/* import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
*/

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import CookieSettings from "./components/CookieSettings";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Pricing />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-settings" element={<CookieSettings />} />
      </Routes>
    </div>
  );
}

export default App;
