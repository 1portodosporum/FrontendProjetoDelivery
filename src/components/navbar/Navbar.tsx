import { LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import logo from "../../assets/logo aki.png";


function Navbar() {
    const { handleLogout, usuario } = useContext(AuthContext);
    const navigate = useNavigate();
    const [menuAberto, setMenuAberto] = useState(false);

    const toLogin = () => {
        handleLogout();
        navigate("/login");
    };

    return (
        <nav className="bg-orange-500 shadow-sm w-auto">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="logo aki" className="h-8 w-auto mr-2" />
                        </Link>
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
                                    <Link to="/pedidos" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                        Pedidos
                                    </Link>
                                    <Link to="/cadastrarproduto" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                        Cadastrar Produto
                                    </Link>
                                    <Link to="/cardapio" className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                                        Meus produtos
                                    </Link>
                                </>
                            )}
                            {usuario.token === "" && (
                                <button className="bg-green-600 duration-700 hover:bg-green-400 text-white px-8 py-3 rounded-full text-base font-semibold flex items-center" onClick={toLogin}>
                                    Entrar
                                    <LogIn className="ml-2 h-5 w-5" />
                                </button>
                            )}

                            {usuario.token !== "" && (
                                <div className="relative">
                                    <button onClick={() => setMenuAberto(!menuAberto)}>
                                        <img src={usuario.foto} alt="Perfil" className="w-[40px] h-[40px] rounded-full border-2 border-white cursor-pointer" />
                                    </button>

                                    {menuAberto && (
                                        <div className="absolute right-0 mt-2 w-48 bg-gray-100 rounded-md shadow-lg py-4 z-50 flex flex-col justify-center items-center p-2">
                                            <p className="block px-4 py-2 text-gray-800 text-sm  font-bold ">Olá {usuario.nome}</p>
                                            <button onClick={toLogin} className="bg-red-600 duration-700 hover:bg-red-400 text-white px-4 py-2 rounded-full text-base font-semibold flex items-center justify-center text-center w-2/3">
                                                Sair
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
