import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Dev",
    description:
      "Um portfólio single-page moderno e responsivo, feito para desenvolvedores que querem mostrar seu trabalho com estilo.",
    image: "/project/p1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://portfoliodev-vdonoladev.vercel.app/",
    githubUrl: "https://github.com/vdonoladev/portfolioDev",
  },
  {
    title: "Spotlight Portfolio",
    description:
      "Portfolio moderno e interativo com animações 3D e efeitos visuais impressionantes.",
    image: "/project/p2.png",
    tags: ["Next.js", "TypeScript", "React", "TailwindCSS", "Framer Motion", "Three.js", "Aceternity UI"],
    liveUrl: "https://spotlight-portfolio-vdonoladev.vercel.app/",
    githubUrl: "https://github.com/vdonoladev/SpotlightPortfolio",
  },
  {
    title: "App de Delivery",
    description:
      "Aplicativo mobile-first para delivery de comida com sistema de pedidos, rastreamento em tempo real e avaliações.",
    image: "/project/p3.png",
    tags: ["React Native", "Firebase", "API Rest"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/vdonoladev",
  },
  {
    title: "Landing Page Corporativa",
    description:
      "Website institucional com design moderno, animações suaves e otimização SEO para empresa de tecnologia.",
    image: "/project/p4.png",
    tags: ["Next.js", "Tailwind", "SEO"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/vdonoladev",
  },
  {
    title: "Sistema de Gestão",
    description:
      "ERP personalizado para gestão de estoque, vendas e clientes com relatórios detalhados e integração com APIs.",
    image: "/project/p5.png",
    tags: ["Vue.js", "Laravel", "MySQL"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/vdonoladev",
  },
  {
    title: "Portfólio Interativo",
    description:
      "Site portfólio com animações 3D, transições suaves e design responsivo para destacar projetos criativos.",
    image: "/project/p6.png",
    tags: ["Three.js", "React", "GSAP"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/vdonoladev",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Projetos que
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Fazem a Diferença
            </span>
          </h2>
          <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi, cada um com sua história
            e desafios únicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                  {project.tags.map((tag, tagKey) => (
                    <span
                      key={tagKey}
                      className="px-2 sm:px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
                  >
                    <span>Ver Projeto</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}