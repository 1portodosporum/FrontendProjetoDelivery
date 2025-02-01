import {  SquarePen, Trash2 } from "lucide-react";
import Pedido from "../../../models/Pedido";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";


interface CardPedidoProps {
    pedido: Pedido;
}

const CardPedido = ({ pedido }: CardPedidoProps) => {

    const { usuario } = useContext(AuthContext);

    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-80 border border-gray-200">
            <div className="px-6 py-4">
                <div className="flex justify-between items-center">
                    <h5 className="text-lg font-semibold text-gray-800">Pedido #{pedido.id}</h5>
                    {pedido.data_pedido && (
                    <p className="text-gray-500 text-sm">
                        Data: {pedido.data_pedido ? new Date(pedido.data_pedido).toLocaleDateString() : ""}
                    </p>
                )}
                </div>
                <p className="text-gray-600">Cliente: <span className="font-medium">{pedido.usuario?.nome}</span></p>
                <p className="text-gray-600">Produto: <span className="font-medium">{pedido.produto?.nome}</span></p>
                <p className="text-gray-600">Quantidade: <span className="font-medium">{pedido.quantidade}</span></p>
                <p className="text-green-600 font-bold mt-2">Total: R$ {pedido.preco_total?.toFixed(2)}</p>
                <p className={`mt-2 px-3 py-1 inline-block rounded-lg text-sm font-medium 
                    ${pedido.status === "Pendente" ? "bg-yellow-200 text-yellow-700" :
                        pedido.status === "Finalizado" ? "bg-green-200 text-green-700" :
                            "bg-red-200 text-red-700"}`}>
                    {pedido.status}
                </p>
            </div>

            <div className="flex flex-row-reverse justify-between px-6 py-4 border-t border-gray-200">
            
                {
                    usuario.tipo === "Restaurante" && (
                        <button className="p-2 rounded-full text-blue-500 hover:bg-blue-100 transition"> 
                            <SquarePen size={20} />
                        </button>
                    )
                }
                <button className="p-2 rounded-full text-red-500 hover:bg-red-100 transition">
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    );
};

export default CardPedido;
