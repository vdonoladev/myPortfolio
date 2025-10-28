import { Check, Star } from "lucide-react";

const whatsappLinks = [
  {
    plan: "START",
    text: "Oi, quero começar com o Plano START e colocar meu negócio online com profissionalismo. Pode me ajudar a dar o primeiro passo?",
    url: "https://api.whatsapp.com/send?phone=5524998652938&text=Oi,%20quero%20come%C3%A7ar%20com%20o%20Plano%20START%20e%20colocar%20meu%20neg%C3%B3cio%20online%20com%20profissionalismo.%20Pode%20me%20ajudar%20a%20dar%20o%20primeiro%20passo%3F"
  },
  {
    plan: "PRO",
    text: "Oi, quero assinar o Plano PRO para minha empresa crescer e se destacar online. Vamos começar agora?",
    url: "https://api.whatsapp.com/send?phone=5524998652938&text=Oi,%20quero%20assinar%20o%20Plano%20PRO%20para%20minha%20empresa%20crescer%20e%20se%20destacar%20online.%20Vamos%20come%C3%A7ar%20agora%3F"
  },
  {
    plan: "PREMIUM",
    text: "Oi, quero o Plano PREMIUM para vender online e dominar meu mercado digital. Quero começar imediatamente!",
    url: "https://api.whatsapp.com/send?phone=5524998652938&text=Oi,%20quero%20o%20Plano%20PREMIUM%20para%20vender%20online%20e%20dominar%20meu%20mercado%20digital.%20Quero%20come%C3%A7ar%20imediatamente%21"
  },
];

const plans = [
  {
    name: "START",
    price: "990,00",
    description: "Comece online com confiança e profissionalismo.",
    features: [
      "Domínio próprio (.com.br)",
      "Hospedagem rápida e segura",
      "Email profissional",
      "Certificado SSL",
      "1 página personalizada",
      "Formulário + WhatsApp",
      "Links para redes sociais",
      "Design responsivo e moderno",
      "Google Maps integrado",
      "2 revisões inclusas",
      "30 dias de suporte grátis",
    ],
    mostPopular: false,
  },
  {
    name: "PRO",
    price: "1.490,00",
    description: "Cresça sua empresa com presença digital forte.",
    features: [
      "Domínio próprio (.com.br)",
      "Hospedagem premium",
      "Emails ilimitados",
      "Certificado SSL",
      "Até 5 páginas personalizadas",
      "SEO básico",
      "Design responsivo e profissional",
      "Google Maps integrado",
      "2 revisões + ajustes rápidos",
      "30 dias de suporte grátis",
      "Recursos extras para se destacar",
    ],
    mostPopular: true,
  },
  {
    name: "PREMIUM",
    price: "2.740,00",
    description: "Venda online e domine seu mercado digital.",
    features: [
      "Domínio próprio (.com.br)",
      "Hospedagem ultra rápida",
      "Emails ilimitados",
      "Certificado SSL",
      "Todas as páginas do PRO + loja virtual",
      "Design premium e responsivo",
      "SEO avançado",
      "Google Maps integrado",
      "Layout profissional",
      "3 revisões inclusas",
      "30 dias de suporte VIP",
      "Funcionalidades extras para vender mais",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  const getWhatsAppLink = (planName) => {
    const link = whatsappLinks.find(item => item.plan === planName);
    return link ? link.url : "#";
  };

  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Planos Profissionais
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Para Seu Negócio
            </span>
          </h2>
          <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
          {plans.map((plan, key) => (
            <div
              key={key}
              className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${
                plan.mostPopular
                  ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg" />
              {plan.mostPopular && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-white" />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text 
                  text-transparent"
                  >
                    R${plan.price}
                  </span>
                  <span className="text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base">
                    /ano
                  </span>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                {plan.features.map((feature, featureKey) => (
                  <li
                    key={featureKey}
                    className="flex items-start space-x-2 sm:space-x-3"
                  >
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppLink(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base text-center block ${
                  plan.mostPopular
                    ? "bg-gradient-to-b from-blue-500 to-cyan-500"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                Assinar
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-400 text-base text-xl">
            Precisa de um plano personalizado?{" "}
            <a href="mailto:contato.victordonolaferreira@outlook.com" className="text-blue-400 hover:text-blue-300">
              Entre em contato
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}