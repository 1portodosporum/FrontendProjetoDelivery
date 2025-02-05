import TimeDesenvolvimento from "../../../models/TimeDesenvolvimento";

interface CardPerfilProps {
    desenvolvedor: TimeDesenvolvimento;
}

const CardPerfil = ({desenvolvedor}: CardPerfilProps) => {
    return (
            <div className="flex flex-col items-center justify-center py-5">
                <div className="relative bg-white shadow-lg rounded-lg border w-80 pt-16 pb-5 px-6 text-center">
                    <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
                        <img
                            className="w-[130px] h-[130px] rounded-full shadow-sm border-4 border-gray-100 transition-transform duration-300 hover:scale-95"
                            src={desenvolvedor.imagem}
                            alt="Profile"
                        />
                    </div>
                    <h5 className="text-primary font-bold text-lg mt-3">{desenvolvedor.nome}</h5>
                    <p className="text-gray-600 text-sm mb-3">{desenvolvedor.funcao}</p>
                    <div className="mt-4 flex justify-center space-x-4 bg-gray-100 w-full p-2 rounded-lg shadow-sm">
                        <a href={desenvolvedor.linkedin} className="text-gray-800 hover:text-blue-600 text-2xl transition-transform duration-300 hover:-translate-y-1">
                        <i className='bx bxl-linkedin'></i>
                        </a>
                        <a href={desenvolvedor.github} className="text-gray-800 hover:text-purple-600 text-2xl transition-transform duration-300 hover:-translate-y-1">
                            <i className='bx bxl-github'></i>
                        </a>
                        <a href={desenvolvedor.instagram} className="text-gray-800 hover:text-pink-700 text-2xl transition-transform duration-300 hover:-translate-y-1">
                            <i className="bx bxl-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
    );
}

export default CardPerfil;
