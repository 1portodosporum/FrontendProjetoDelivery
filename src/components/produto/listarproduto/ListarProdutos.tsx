import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import ProdutoServices from "../../../services/ProdutoServices";
import Produto from "../../../models/Produto";
import CardProduto from "../cardproduto/CardProduto";
import { GlassWaterIcon, IceCream, Leaf, Pizza, Sandwich, Utensils, XCircle } from "lucide-react";
import { FallingLines } from "react-loader-spinner";

function ListarProdutos() {
    const navigate = useNavigate();
    const produtoServices = new ProdutoServices();

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
    const [somenteSaudaveis, setSomenteSaudaveis] = useState<boolean>(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function buscarProdutos() {
        setIsLoading(true);
        try {
            await produtoServices.listProdutos("/produtos", setProdutos, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                handleLogout();
            }
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado");
            navigate("/");
        }
    }, [token]);

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    const produtosFiltrados = produtos.filter((produto) => {
        return (
            (categoriaSelecionada ? produto.categoria === categoriaSelecionada : true) &&
            (somenteSaudaveis ? produto.saudavel : true)
        );
    });
    return (
        <>
            <section className="text-center flex-col h-1/3 flex items-center justify-items-center p-4 bg-orange-100">
                <div className="flex gap-3 mt-4">
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${somenteSaudaveis ? "bg-green-500 text-white" : "bg-orange-100 text-gray-800 hover:bg-orange-200"
                            }`}
                        onClick={() => setSomenteSaudaveis(!somenteSaudaveis)}
                    >
                        <Leaf size={20} /> Saudáveis
                    </button>
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg z-50  transition ${categoriaSelecionada === "Bebida" ? "bg-orange-500 text-white" : "bg-orange-100 text-gray-800 hover:bg-orange-200"
                            }`}
                        onClick={() => setCategoriaSelecionada("Bebida")}
                    >

                        <GlassWaterIcon size={20} /> Bebidas
                    </button>
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg z-50 transition ${categoriaSelecionada === "Comida" ? "bg-orange-500 text-white" : "bg-orange-100 text-gray-800 hover:bg-orange-200"
                            }`}
                        onClick={() => setCategoriaSelecionada("Comida")}
                    >
                        <Utensils size={20} />Comidas
                    </button>
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg z-50 transition ${categoriaSelecionada === "Sobremesa" ? "bg-orange-500 text-white" : "bg-orange-100 text-gray-800 hover:bg-orange-200"
                            }`}
                        onClick={() => setCategoriaSelecionada("Sobremesa")}
                    >
                        <IceCream size={20} /> Sobremesas
                    </button>
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg z-50 transition ${categoriaSelecionada === "Pizza" ? "bg-orange-500 text-white" : "bg-orange-100 text-gray-800 hover:bg-orange-200"
                            }`}
                        onClick={() => setCategoriaSelecionada("Pizza")}
                    >
                        <Pizza size={20} /> Pizza
                    </button>
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg z-50 transition ${categoriaSelecionada === "Lanche" ? "bg-orange-500 text-white" : "bg-orange-100 text-gray-800 hover:bg-orange-200"
                            }`}
                        onClick={() => setCategoriaSelecionada("Lanche")}
                    >
                        <Sandwich size={20} /> Lanches
                    </button>
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg z-50 transition ${categoriaSelecionada === "Vegano" ? "bg-orange-500 text-white" : "bg-orange-100 text-gray-800 hover:bg-orange-200"
                            }`}
                        onClick={() => setCategoriaSelecionada("Vegano")}
                    >
                        <Sandwich size={20} /> Veganos
                    </button>
                    <button
                        className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        onClick={() => setCategoriaSelecionada(null)}
                    >
                        <XCircle size={20} /> Mostrar Todos
                    </button>
                </div>
            </section>

            <section className="flex flex-wrap justify-center gap-4 p-10">
                {isLoading ?
                    <div className="flex justify-center items-center min-h-[100vh] min-w-[100vw]">
                        <FallingLines
                            color="#4fa94d"
                            width="100"
                            visible={true}
                        />
                    </div>
                    :
                    produtosFiltrados.map((produto) => <CardProduto key={produto.id} produto={produto} />)
                }
            </section>
        </>
    );
}

export default ListarProdutos;
