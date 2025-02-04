import { SquarePen, Trash2 } from "lucide-react";
import Pedido from "../../../models/Pedido";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import PedidoServices from "../../../services/PedidoServices";
import { ToastAlert } from "../../../utils/ToastAlert";
import { useNavigate } from "react-router-dom";

interface CardPedidoProps {
    pedido: Pedido;
}

const CardPedido = ({ pedido }: CardPedidoProps) => {
    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    const navigate = useNavigate();

    const setPedido = () => { 
        return pedido;
    };

    const [modalDeleteAberto, setModalDeleteAberto] = useState(false);
    const [modalEditarAberto, setModalEditarAberto] = useState(false);
    const [novoStatus, setNovoStatus] = useState(pedido.status);

    const pedidoServices = new PedidoServices();

    const abrirModal = () => setModalDeleteAberto(true);
    const fecharModal = () => setModalDeleteAberto(false);
    const abrirModalEditar = () => setModalEditarAberto(true);
    const fecharModalEditar = () => setModalEditarAberto(false);

    const removerPedido = async () => {
        try {
            await pedidoServices.deletePedido(`/pedidos/${pedido.id}`, {
                headers: {
                    Authorization: usuario.token,
                },
            });
            ToastAlert("Pedido removido!", "success");
        } catch (error) {
            ToastAlert("Erro ao remover pedido!", "error");
        }
        fecharModal();
        navigate("/pedidos");
    };

    const atualizarStatusPedido = async () => {
        try {
            const pedidoAtualizado = {
                ...pedido,
                status: novoStatus,
            };
    
            await pedidoServices.updatePedido(`/pedidos`, pedidoAtualizado, setPedido, {
                headers: {
                    "Authorization": token,
                },
            });
    
            ToastAlert("Status atualizado!", "success");
            fecharModalEditar();
            navigate("/pedidos");
        } catch (error) {
            ToastAlert("Erro ao atualizar status!", "error");
        }
    };
    
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
                        pedido.status === "Entregue" ? "bg-green-200 text-green-700" :
                            "bg-blue-200 text-blue-700"}`}>
                    {pedido.status}
                </p>
            </div>

            <div className="flex flex-row-reverse justify-between px-6 py-4 border-t border-gray-200">
                {usuario.tipo === "Restaurante" && (
                    <button onClick={abrirModalEditar} className="p-2 rounded-full text-blue-500 hover:bg-blue-100 transition">
                        <SquarePen size={20} />
                    </button>
                )}
                <button onClick={abrirModal} className="p-2 rounded-full text-red-500 hover:bg-red-100 transition">
                    <Trash2 size={20} />
                </button>
            </div>

            {modalDeleteAberto && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Remover pedido?</h2>
                        <p>Tem certeza que deseja remover o pedido #{pedido.id}?</p>
                        <div className="flex justify-between mt-4">
                            <button onClick={fecharModal} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                                Cancelar
                            </button>
                            <button onClick={removerPedido} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                                Remover Pedido
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {modalEditarAberto && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Editar Status do Pedido</h2>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Novo Status:</label>
                        <select
                            value={novoStatus}
                            onChange={(e) => setNovoStatus(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                            required
                        >
                            <option value="">selecione ...</option>
                            <option value="Em Preparo">Em Preparo</option>
                            <option value="Entregue">Entregue</option>
                        </select>
                        <div className="flex justify-between mt-4">
                            <button onClick={fecharModalEditar} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                                Cancelar
                            </button>
                            <button onClick={atualizarStatusPedido} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardPedido;
