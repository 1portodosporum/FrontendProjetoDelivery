import { Link } from 'react-router-dom'

import Produto from "../../../models/Produto"

interface CardProdutoProps {
    produto: Produto;
}

const CardProduto = ({ produto }: CardProdutoProps) => {
    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h5 className="card-title">Nome: {produto.nome} </h5>
                <p className="card-text"> Imagem: {produto.imagem} </p>
                <p className="card-text">Preço: {produto.preco} </p>
                <p className="card-text"> Descrição: {produto.descricao} </p>
                <p className="card=text"> É saudavel: {produto.saudavel}</p>
            </div>
            <div className="buttons flex justify-between px-6 py-4">
                <Link to=""
                    className="button button-blue"> <button>Ver</button></Link>
                <Link to=""
                    className="button button-red"> <button>Adicionar</button>
                </Link>
            </div>
        </div>
    );
};

export default CardProduto;
