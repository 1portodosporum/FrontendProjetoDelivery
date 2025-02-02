import { Link } from 'react-router-dom';
import { Salad } from 'lucide-react';
import Produto from "../../../models/Produto";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import ModalComprar from './modalcomprar/ModalCompra';
import { usePedido } from '../../../hooks/usePedido';

interface CardProdutoProps {
    produto: Produto;
}

const CardProduto = ({ produto }: CardProdutoProps) => {
    const { usuario } = useContext(AuthContext);
    const {
        modalAberto, abrirModal, fecharModal,
        quantidade, setQuantidade, confirmarPedido
    } = usePedido();

    const botaoComprar = (
        <div className="flex justify-center px-6 py-4">
            <button
                onClick={abrirModal}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Comprar
            </button>
        </div>
    )

    const botoesRestaurante = (
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
    )
    
    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-80">
            <img
                src={produto.imagem || 'https://via.placeholder.com/300x200'}
                alt={produto.nome}
                className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4">
                <h5 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    {produto.saudavel && <Salad className="text-green-500 h-5 w-5" />}
                    {produto.nome}
                </h5>
                <p className="text-gray-600 font-medium">
                    Preço: <span className="text-green-600 font-bold">R$ {produto.preco.toFixed(2)}</span>
                </p>
                <p className="text-gray-600">Descrição: {produto.descricao}</p>
            </div>

            {usuario.tipo === 'Restaurante' ? botoesRestaurante : botaoComprar}

            {modalAberto && (
                <ModalComprar
                    produto={produto}
                    fecharModal={fecharModal}
                    setQuantidade={setQuantidade}
                    quantidade={quantidade}
                    confirmarPedido={() => confirmarPedido(produto)}
                />
            )}
        </div>
    );
};

export default CardProduto;
