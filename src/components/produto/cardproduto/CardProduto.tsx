import { Link } from 'react-router-dom';
import { Pencil, Salad, Trash2 } from 'lucide-react';
import Produto from '../../../models/Produto';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import ModalComprar from './modalcomprar/ModalCompra';
import { usePedido } from '../../../hooks/usePedido';
import ModalDeleteProduto from '../modaldeleteproduto/ModalDeleteProduto';

interface CardProdutoProps {
  produto: Produto;
}

const CardProduto = ({ produto }: CardProdutoProps) => {
  const { usuario } = useContext(AuthContext);
  const {
    modalAberto,
    abrirModal,
    fecharModal,
    quantidade,
    setQuantidade,
    confirmarPedido,
    modalDeleteAberto,
    abrirModalDelete,
    fecharModalDelete,
    removerPedido,
    isLoading,
  } = usePedido();

  const botaoComprar = (
    <div className="flex justify-center px-6 py-4">
      {usuario.token == '' ? (
        <Link to="/login" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
          Comprar
        </Link>
      ) : (
        <button
          onClick={abrirModal}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
          Comprar
        </button>
      )}
    </div>
  );

  const botoesRestaurante = (
    <div className="flex gap-2 px-4 py-2">
      <Link
        to={`/cadastrarproduto/${produto.id}`}
        className="p-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300 transition duration-200">
        <Pencil size={18} />
      </Link>
      <button
        onClick={abrirModalDelete}
        className="p-2 rounded-md bg-gray-200 text-red-600 hover:bg-gray-300 transition duration-200">
        <Trash2 size={18} />
      </button>
    </div>
  );

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-[300px]">
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
          isLoading={isLoading}
        />
      )}
      {modalDeleteAberto && (
        <ModalDeleteProduto
          produto={produto}
          fecharModalDelete={fecharModalDelete}
          removerPedido={() => removerPedido(produto.id.toString())}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default CardProduto;
