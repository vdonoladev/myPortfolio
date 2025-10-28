export const codeExamples = {
  "App.jsx": `import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => res.json())
      .then(json => { setData(json); setLoading(false); });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Últimas tarefas</h1>
      {loading ? <p>Carregando...</p> :
        <ul className="list-disc pl-6">{data.map(item => <li key={item.id}>{item.title}</li>)}</ul>
      }
    </div>
  );
}`,
  "Hero.jsx": `import { useState, useEffect } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const message = "Transformando ideias em experiências digitais!";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, i));
      i++;
      if(i > message.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return <h1 className="text-4xl font-bold text-center p-6">{text}</h1>;
}`,
  "Navbar.jsx": `import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const items = ["Home", "Projetos", "Contato", "Sobre"];
  const results = items.filter(i => i.toLowerCase().includes(query.toLowerCase()));

  return (
    <nav className="p-4 bg-gray-800 text-white flex flex-col sm:flex-row sm:justify-between">
      <div className="flex items-center justify-between">
        <span className="font-bold text-xl">Vdonoladev</span>
        <button onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && <ul className="flex flex-col sm:flex-row gap-4 mt-2">{items.map(i => <li key={i}>{i}</li>)}</ul>}
      <input
        type="text"
        placeholder="Buscar..."
        className="mt-2 p-1 rounded text-black"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {query && <ul className="bg-gray-700 p-2 mt-1 rounded">{results.map(r => <li key={r}>{r}</li>)}</ul>}
    </nav>
  );
}`,
};

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "🌐",
    title: "Fetch Dinâmico",
    content: "Carrega dados reais via API e mostra loading",
  },
  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "⚡",
    title: "Texto Animado",
    content: "Efeito de digitação animada e dinâmica no Hero",
  },
  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "📂",
    title: "Navbar Interativa",
    content: "Menu responsivo com search e dropdown",
  },
};
