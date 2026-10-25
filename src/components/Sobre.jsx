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
                    <h2 className="text-2xl font-semibold">Projetos Pessoais</h2>
                    <div className="grid grid-cols-3 *:border-1 gap-5">
                        <p>teste</p>
                        <p>teste</p>
                        <p>teste</p>
                    </div>
                </div>
                <h2 className="text-2xl font-semibold">Minhas skills</h2>
                html css js react github figma 
            </div>
        </div>
     );
}
 
export default Sobre;