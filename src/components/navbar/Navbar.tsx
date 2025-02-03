import { LogIn, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import logo from "../../assets/logo aki.png"

function Navbar() {

    const { handleLogout, usuario } = useContext(AuthContext);

    const navigate = useNavigate();

    const toLogin = () => {
        handleLogout();
        navigate("/login");
    }

    return (
        <nav className="bg-orange-500 shadow-sm w-auto ">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <span className="ml-2 text-2xl font-semibold text-white">
                                <img src={logo} alt="logo aki"  className="h-8 w-auto mr-2"/>
                            </span>
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
                            {
                                usuario.token === "" && (
                                    <button className="bg-green-600 duration-700 hover:bg-green-400 text-white px-8 py-3 rounded-full text-base font-semibold flex items-center" onClick={toLogin}>
                                        Login
                                        <LogIn className="ml-2 h-5 w-5" />
                                    </button>
                                )
                            }

                            {
                                usuario.token !== "" && (
                                    <button className="bg-red-600 duration-700 hover:bg-red-400 text-white px-8 py-3 rounded-full text-base font-semibold flex items-center" onClick={toLogin}>
                                        Sair
                                        <LogIn className="ml-2 h-5 w-5" />
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
