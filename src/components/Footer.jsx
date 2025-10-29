import { Github, Linkedin, Mail } from "lucide-react";

/* const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "API Reference",
    "Status",
  ],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};
*/

const footerLinks = {
  Product: [
    { name: "Features", url: "/features" },
    { name: "Pricing", url: "/pricing" },
    { name: "Security", url: "/security" },
    { name: "Roadmap", url: "https://github.com/vdonoladev/roadmap" },
    { name: "Changelog", url: "https://github.com/vdonoladev/changelog" },
  ],
  Company: [
    { name: "About", url: "/about" },
    { name: "Blog", url: "https://vdonoladev.com/blog" },
    { name: "Careers", url: "/careers" },
    { name: "Press", url: "#" },
    { name: "Partners", url: "#" },
  ],
  Resources: [
    { name: "Documentation", url: "https://docs.vdonoladev.com" },
    { name: "Help Center", url: "/help" },
    { name: "Community", url: "https://discord.gg/vdonoladev" },
    { name: "API Reference", url: "https://api.vdonoladev.com" },
    { name: "Status", url: "https://status.vdonoladev.com" },
  ],
  Legal: [
    { name: "Privacy", url: "/privacy" },
    { name: "Terms", url: "/terms" },
    { name: "Cookie Policy", url: "/cookies" },
    { name: "Licenses", url: "#" },
    { name: "Compliance", url: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main footer content - hidden on mobile, visible on sm and up */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
              <div className="rounded-lg">
                <img
                  src="/logo.png"
                  alt="vdonoladev Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-white">vdonola</span>
                <span className="text-blue-400">dev</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
              Desenvolvimento de sites e aplicações modernas, rápidas e
              responsivas, criadas sob medida para sua marca.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="https://linkedin.com/in/vdonoladev/"
                target="_blank"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://github.com/vdonoladev/"
                target="_blank"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Github className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:contato.victordonolaferreira@outlook.com"
                target="_blank"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Footer links - visible on sm and up */}
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                    {category}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map(({ name, url }) => (
                      <li key={name}>
                        <a
                          href={url}
                          target={url.startsWith("http") ? "_blank" : "_self"}
                          rel={
                            url.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t-0 sm:border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Víctor Donola Ferreira. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
