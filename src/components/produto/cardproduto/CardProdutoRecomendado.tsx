import {  useNavigate } from 'react-router-dom';
import {  Salad } from 'lucide-react';
import Produto from '../../../models/Produto';
import ModalLogin from '../../../ui/ModalLogin';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';


interface CardProdutoProps {
    produto: Produto;
}

const CardProdutoRecomendado = ({ produto }: CardProdutoProps) => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { usuario } = useContext(AuthContext);

    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden min-w-[300px] max-w-[300px] min-h-[450px] max-h-[450px] h-full">
            <img
                src={produto.imagem || 'https://via.placeholder.com/300x200'}
                alt={produto.nome}
                className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4 flex-grow">
                <h5 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    {produto.saudavel && <Salad className="text-green-500 h-5 w-5" />}
                    {produto.nome}
                </h5>
                <p className="text-gray-600 font-medium">
                    Preço: <span className="text-green-600 font-bold">R$ {produto.preco.toFixed(2)}</span>
                </p>
                <p className="text-gray-600">Descrição: {produto.descricao}</p>
            </div>
    
            <div className="flex justify-center px-6 py-4">
                {usuario.token === '' ? (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 " >
                        Cardápio
                    </button>
                ) : (
                    <button
                        onClick={() => navigate('/cardapio')}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600" >
                        Cardápio
                    </button>
                )}
                {isOpen && <ModalLogin setIsOpen={setIsOpen} toLogin={() => navigate('/login')} />}
            </div>
        </div>
    );    
};

export default CardProdutoRecomendado;
