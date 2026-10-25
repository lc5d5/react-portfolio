import { BiLogoGithub, BiLogoLinkedin, BiMenu } from "react-icons/bi";
import { Link } from "react-router";

const Home = () => {
    return ( 
        <div className="w-[1040px] h-screen relative bg-linear-270 from-black to-[#a33922] p-5 m-auto rounded-[10px]">
            <div className="w-full h-full flex gap-20 *:text-white rounded-[10px] bg-[#1C1716] p-8">
                <div className="flex flex-col h-full justify-between *:cursor-pointer *:fill-white">
                        <BiMenu size={20} />
                        <div class="flex flex-col gap-4">
                            <BiLogoLinkedin size={20} />
                            <BiLogoGithub size={20} />
                        </div>
                        <p class="rotate-270 text-xs -ml-10 mb-20 cursor-none">Seja bem-vindo(a)!</p>
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="mb-3">Olá!</h2>
                    <h1 className="text-5xl">Sou <strong>Lucas Gonçalves</strong>.</h1>
                    <p className="mt-4">Desenvolver Front-end de Fortaleza - CE.</p>
                    <div className="absolute">
                        <div className="relative w-145 h-1 left-25 bg-white top-9"></div>
                    </div>
                </div>

                <img
                className="w-48 object-contain" 
                src="./peep-sitting-6.png" 
                alt="Desenho de um homem sorrindo sentado de pernas cruzadas." />
            </div>
            <Link to="sobre" class="relative bottom-60 left-43 inline flex justify-start bg-orange-600 text-bold cursor-pointer p-3 rounded-2xl text-white">Saiba Mais</Link>
        </div>
     );
}
 
export default Home;