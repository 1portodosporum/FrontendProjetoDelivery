import { ShoppingBag, LogIn } from 'lucide-react';

function Navbar() {
    return (
        <nav className="bg-orange-500 shadow-sm">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center">
                            <ShoppingBag className="h-8 w-8 text-white" />
                            <span className="ml-2 text-2xl font-semibold text-white">AIKI FOME</span>
                        </a>
                    </div>

                   
                    <div className="md:flex md:items-center">
                        <div className="ml-10 flex items-center space-x-4">
                            <a href="#" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                Início
                            </a>
                            <a href="#" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                Cardápio
                            </a>
                            <button className="bg-yellow-400 duration-700 hover:bg-yellow-500 text-white px-8 py-3 rounded-full text-base font-semibold flex items-center">
                                Login
                                <LogIn className="ml-2 h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
