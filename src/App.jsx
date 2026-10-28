import { useState } from "react";
import {
  BiSolidCircle,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoGithub,
  BiLogoFigma,
  BiLogoTypescript,
  BiLogoTailwindCss,
} from "react-icons/bi";

const App = () => {
  const tamanho = 5;
  const [ativa, setAtiva] = useState(0);

  const colunas = Array.from({ length: tamanho }, (_, i) =>
    i === ativa ? "2fr" : "1fr",
  ).join(" ");

  const cards = [
    {
      formatacao: "*:text-white",
      secao: "Home",
      titulo: "Lucas Gonçalves",
      texto: "Desenvolvedor Front-end",
    },
    {
      formatacao: "bg-white *:text-black",
      secao: "Sobre mim",
      titulo: "Sobre",
      texto:
        "Graduando em Análise e Desenvolvimento de Sistemas pelo SENAC/CE, com uma base prévia em Psicologia. Venho desenvolvendo há mais de 1 ano projetos práticos, praticando requisições a APIs e componentes responsivos, além de boas práticas de responsividade, acessibilidade e UX.",
    },
    {
      formatacao: "*:text-white",
      secao: "Minhas skills",
      titulo: "Skills",
      texto: (
        <div className="flex *:flex *:flex-col *:items-center gap-10">
          <div>
            <BiLogoHtml5 size={50} />
            <p>HTML</p>
          </div>
          <div>
            <BiLogoCss3 size={50} />
            <p>CSS</p>
          </div>
          <div>
            <BiLogoTailwindCss size={50}/>
            <p>TailwindCSS</p>
          </div>
          <div>
            <BiLogoJavascript size={50} />
            <p>JavaScript</p>
          </div>
          <div>
            <BiLogoTypescript size={50}/>
            <p>TypeScript</p>
          </div>
          <div>
            <BiLogoReact size={50} />
            <p>React</p>
          </div>
          <div>
            <BiLogoGithub size={50} />
            <p>Github</p>
          </div>
          <div>
            <BiLogoFigma size={50} />
            <p>Figma</p>
          </div>
        </div>
      ),
    },
    {
      formatacao: "bg-white *:text-black",
      secao: "Projetos",
      titulo: "",
      texto: (
        <div className="grid grid-cols-3 *:border-2 *:rounded-xl gap-3 *:p-3">
          <div>
            <p>teste</p>
            <a
            className="bg-black text-white rounded-xl p-1" 
            href="https://gt04-react-fakestore.onrender.com/">Live site</a>
          </div>
          <div>a</div>
          <div>b</div>
        </div>
      ),
    },
    {
      formatacao: "*:text-white",
      secao: "Contato",
      titulo: "a",
      texto: "Expresso com um toque de leite.",
    },
  ];

  return (
    <div className="bg-black h-screen p-8 flex flex-col justify-center">
      <div className="flex h-200">
        {Array.from({ length: tamanho }, (_, i) => (
          <div
            key={i}
            onClick={() => setAtiva(i)}
            className={`transition-[flex-grow,width] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden flex
          ${
            i === ativa
              ? "rounded-4xl grow-5 border-2 border-red-700 w-300"
              : `rounded-full w-25 border border-red-700 ${(i === 1 || i === 3) ? "bg-white *:text-red-600" : "text-white" }`
          }`}
          >
            {i === ativa ? (
              <div
                className={`flex flex-col h-full w-full px-16 ${cards[i].formatacao}`}
              >
                <div className="flex flex-col items-end mb-20">
                  <BiSolidCircle className="mt-3 fill-red-600" size={20} />
                  <BiSolidCircle className="-mt-3 fill-red-600" size={70} />
                </div>
                <div className="flex flex-col justify-around h-full">
                  <div>
                    <h2 className="font-bold text-[80px] inline-block whitespace-nowrap">
                      {cards[i].titulo}
                    </h2>
                    <p className="text-lg">{cards[i].texto}</p>
                  </div>
                  <div>
                    <h3>{cards[i].secao}</h3>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-end justify-center w-full h-full p-8 hover:bg-red-600 hover:text-white hover:cursor-pointer ease-in duration-300">
                <span className="text-xs font-medium tracking-widest whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                  {cards[i].secao}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
