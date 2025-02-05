const CardPerfil = () => {
    return (
        <section className="h-screen bg-gray-100 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center py-5">
                <div className="relative bg-white shadow-lg rounded-lg border w-80 pt-16 pb-5 px-6 text-center">
                    <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2">
                        <img
                            className="w-24 h-24 rounded-full shadow-sm border-4 border-white"
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt="Profile"
                        />
                    </div>
                    <h5 className="text-primary font-bold text-lg mt-3">Rudr1gu</h5>
                    <p className="text-gray-600 text-sm mb-3">Desenvolvedor</p>
                    <div className="mt-4 flex justify-center space-x-4 bg-slate-200 w-full p-2 rounded-lg">
                        <a href="#" className="text-gray-800 hover:text-blue-600 text-2xl">
                        <i className='bx bxl-linkedin'></i>
                        </a>
                        <a href="#" className="text-gray-800 hover:text-purple-600 text-2xl">
                            <i className='bx bxl-github'  ></i>
                        </a>
                        <a href="#" className="text-gray-800 hover:text-pink-700 text-2xl">
                            <i className="bx bxl-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardPerfil;
