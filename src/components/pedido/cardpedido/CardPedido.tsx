import Pedido from "../../../models/Pedido";

interface CardPedidoProps {
    pedido: Pedido;
}

const CardPedido= ({ pedido }: CardPedidoProps) => {
    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h5 className="card-title">Numero do Pedido: {pedido.id}</h5>
                <p className="card-text">Cliente: {pedido.usuario.nome}</p>
                <p className="card-text">Valor: {pedido.preco_total}</p>
            </div>
            <div className="buttons flex justify-between px-6 py-4">
                <button className="button button-blue">Detalhes</button>
                <button className="button button-red">Excluir</button>
            </div>
        </div>
    );
};

export default CardPedido;