import { LogIn, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";





function Navbar() {

    const {handleLogout, usuario} = useContext(AuthContext);

    return (
        <nav className="bg-orange-500 shadow-sm w-auto">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center">
                            <ShoppingBag className="h-8 w-8 text-white" />
                            <span className="ml-2 text-2xl font-semibold text-white">AIKI FOME</span>
                        </a>
                    </div>

                   
                    <div className="md:flex md:items-center md:space-x-6">
                        <div className="ml-10 flex items-center space-x-4">
                            <Link to="/home" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                Início
                            </Link>

                            {usuario.tipo === "Cliente" && (
                                <>
                                    <Link to="/cardapio" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                        Cardápio
                                    </Link>
                                    <Link to="/meuspedidos" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                        Meus Pedidos
                                    </Link>
                                </>
                            )}

                            {usuario.tipo === "Restaurante" && (
                                <>
                                    <Link to="/cadastrarpedido" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                        Cadastrar Pedido
                                    </Link>
                                    <Link to="/cadastrarproduto" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                        Cadastrar Produto
                                    </Link>

                                    <Link to="/cardapio" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                        Meus produtos
                                    </Link>     
                                    
                                </>
                            )}
                            <button className="bg-red-600 duration-700 hover:bg-red-400 text-white px-8 py-3 rounded-full text-base font-semibold flex items-center" onClick={handleLogout}>
                                Sair
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
