const Sobre = () => {
    return ( 
        <div className="w-[1040px] h-screen relative bg-linear-270 from-black to-[#a33922] p-5 m-auto rounded-[10px]">
            <div className="w-full h-full flex flex-col gap-20 *:text-white rounded-[10px] bg-[#1C1716] p-8">
                <div className="flex gap-10 p-20">
                    <img src="uma foto minha" alt="foto aqui" />
                    <div>
                        <h2 className="text-2xl mb-5 font-semibold">Sobre mim</h2>
                        <h3 className="text-xl">Consigo <strong className="text-orange-600">desenvolver</strong> e ajustar interfaces web com foco em usabilidade e <strong className="text-orange-600">centralizada no usuário</strong></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sequi, hic architecto quo laboriosam nam recusandae expedita, fugiat doloribus iste perspiciatis repellendus nemo quis cumque voluptas, corrupti quaerat? Numquam, vero.</p>
                    </div>
                </div>
                
                <h2 className="text-2xl font-semibold">Projetos Pessoais</h2>
                <div className="grid grid-cols-3 *:border-1 gap-5">
                    <p>teste</p>
                    <p>teste</p>
                    <p>teste</p>
                </div>

                <h2 className="text-2xl font-semibold">Minhas skills</h2>
                html css js react github figma 
            </div>
        </div>
     );
}
 
export default Sobre;