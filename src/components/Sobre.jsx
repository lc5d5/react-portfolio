import { BiLogoCss3, BiLogoFigma, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoReact } from "react-icons/bi";

const Sobre = () => {
    return ( 
        <div className="w-[1040px] relative bg-linear-270 from-black to-[#a33922] p-5 m-auto rounded-[10px]">
            <div className="w-full h-full flex flex-col gap-20 *:text-white rounded-[10px] bg-[#1C1716] p-8">
                <div className="flex gap-20 p-20">
                    <img 
                    className="w-60 object-contain"
                    src="./perfil-foto.png" 
                    alt="foto aqui" />
                    <div>
                        <h2 className="text-2xl mb-10 font-semibold">Sobre mim</h2>
                        <h3 className="text-xl mb-3">Consigo <strong className="text-orange-600">desenvolver</strong> e ajustar interfaces web com foco em <strong className="text-orange-600">usabilidade</strong> e <strong className="text-orange-600">centralizada no usuário</strong></h3>
                        <p className="text-xs">Graduando em Análise e Desenvolvimento de Sistemas pelo SENAC/CE, com uma base prévia em Psicologia que me agrega soft skills como escuta ativa, empatia, comunicação e colaboração para produtos digitais e times multidisciplinares. Venho desenvolvendo há mais de 1 ano projetos práticos que podem ser vistos abaixo, praticando requisições a APIs e componentes responsivos, além de boas práticas de responsividade, acessibilidade e UX.</p>
                    </div>
                </div>
                
                <div className="px-20">
                    <h2 className="text-2xl font-semibold mb-6 -mt-20">Projetos Pessoais</h2>
                    <div className="grid grid-cols-3 *:border-1 *:border-orange-500 gap-5">
                        <p>teste</p>
                        <p>teste</p>
                        <p>teste</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-center">Minhas skills</h2>
                    <div className="flex *:flex *:flex-col justify-around gap-10">
                        <div>
                            <BiLogoHtml5 size={50} />
                            <p>HTML</p>
                        </div>
                        <div>
                            <BiLogoCss3 size={50} />
                            <p>CSS</p>
                        </div>
                        <div>
                            <BiLogoJavascript size={50} />
                            <p>JavaScript</p>
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
                </div>
            </div>
        </div>
     );
}
 
export default Sobre;