function Footer() {
    return (
        <footer className="bg-orange-500 rounded-lg shadow-sm dark:bg-orange-700 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Aiki Fome</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Sobre</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contato</a>
                        </li>
                    </ul>
                </div>
                <div className="sm:flex sm:items-center sm:justify-between mt-4">
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <hr className="my-6 border-yellow-300 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-white sm:text-center">
                    <p className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm "> &copy; 2025 Todos os direitos reservados | AIKI FOME
                        <i className='bx bx-anchor'></i> </p>
                </span>
            </div>
        </footer>
    );
}

export default Footer;