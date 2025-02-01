import { Link } from 'react-router-dom';
import { Salad } from 'lucide-react';
import Produto from "../../../models/Produto";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { ToastAlert } from '../../../utils/ToastAlert';
import PedidoServices from '../../../services/PedidoServices';

interface CardProdutoProps {
    produto: Produto;
}

const CardProduto = ({ produto }: CardProdutoProps) => {

    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    const [modalAberto, setModalAberto] = useState(false);
    const [quantidade, setQuantidade] = useState(1);

    const pedidoServices = new PedidoServices();

    const abrirModal = () => {
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setQuantidade(1);
    };

    const confirmarPedido = async () => {
        const pedido = {
            quantidade: quantidade,
            status: 'Pendente',
            produto: {
                id: produto.id
            },
            usuario: {
                id: usuario.id
            }
        };

        try {
            await pedidoServices.createPedido('/pedidos', pedido, {
                headers: {
                    "Authorization": token,
                },
            });
            ToastAlert("Pedido enviado:", "success");
        } catch (error) {
            ToastAlert("Erro ao enviar pedido:", "error");
        }

        console.log("Pedido confirmado:", pedido);
        fecharModal();
    };

    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-80">
            <img
                src={produto.imagem ? produto.imagem : 'https://via.placeholder.com/300x200'}
                alt={produto.nome}
                className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4">
                <h5 className="text-xl font-semibold text-gray-800 flex flex-row gap-2">
                    {produto.saudavel ? (
                        <Salad className="text-green-500 h-5 w-5 ml-2" />
                    ) : (
                        ""
                    )}
                    {produto.nome}</h5>
                <p className="text-gray-600 font-medium">Preço:
                    <span className="text-green-600 font-bold"> R$ {produto.preco.toFixed(2)}</span>
                </p>
                <p className="text-gray-600">Descrição: {produto.descricao}</p>

            </div>
            {
                usuario.tipo === 'Restaurante' && (
                    <>
                        <div className="flex justify-between px-6 py-4">
                            <Link
                                to={`/cadastrarproduto/${produto.id}`}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                                Editar
                            </Link>
                            <Link
                                to={`/deletarproduto/${produto.id}`}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
                                Deletar
                            </Link>
                        </div>
                    </>
                )
            }
            {
                usuario.tipo === 'Cliente' && (
                    <div className="flex justify-center px-6 py-4">
                        <button
                            onClick={abrirModal}
                            className='bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600' >
                            Comprar
                        </button>
                    </div>
                )
            }

            {modalAberto && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Finalizar Pedido</h2>
                        <p>Produto: <strong>{produto.nome}</strong></p>
                        <p>Preço unitário: R$ {produto.preco.toFixed(2)}</p>

                        <div className="mt-4 flex items-center space-x-4">
                            <label className="text-gray-700 font-medium">Quantidade:</label>

                            <button
                                onClick={() => setQuantidade(prev => Math.max(1, prev - 1))}
                                className="bg-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400 transition">
                                −
                            </button>

                            <span className="text-lg font-semibold">{quantidade}</span>
                            <button
                                onClick={() => setQuantidade(prev => prev + 1)}
                                className="bg-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400 transition">
                                +
                            </button>
                        </div>

                        <p className="mt-2 font-semibold">
                            Total: <span className="text-green-600">R$ {(produto.preco * quantidade).toFixed(2)}</span>
                        </p>

                        <div className="flex justify-between mt-4">
                            <button
                                onClick={fecharModal}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                                Cancelar
                            </button>
                            <button
                                onClick={confirmarPedido}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                                Confirmar Pedido
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardProduto;