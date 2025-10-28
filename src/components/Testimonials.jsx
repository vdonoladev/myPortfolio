const testimonials = [
  {
    name: "Mariana Alves",
    role: "Gerente de Marketing na StudioMKT",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "Trabalhar com o Víctor foi uma experiência excelente. Ele entendeu rapidamente o que nossa marca precisava e entregou um site moderno, rápido e fácil de gerenciar. O processo foi tranquilo do início ao fim.",
  },
  {
    name: "Rafael Pereira",
    role: "Fundador da RP Consultoria",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "O Víctor foi extremamente profissional e ágil. Sempre disponível para ajustar detalhes e garantir que tudo ficasse perfeito. Nosso novo site elevou muito a credibilidade da empresa.",
  },
  {
    name: "Camila Torres",
    role: "Diretora Criativa na Agência Lume",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "O que mais impressionou foi o cuidado do Víctor com a experiência do usuário. O site ficou leve, bonito e intuitivo — exatamente como queríamos. Recomendo sem pensar duas vezes.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Left side - Header */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Depoimentos de clientes satisfeitos
            </h2>
            <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">
              Histórias de sucesso de clientes que confiaram no meu trabalho e obtiveram resultados excepcionais.
            </p>
          </div>

          {/* Right side - testimonials */}

          <div className="lg:w-1/2 w-full">
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, key) => (
                <div
                  key={key}
                  className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold 
                      bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text 
                      text-transparent"
                      >
                        "
                      </div>
                    </div>

                    <div className="flex-grow">
                      <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
