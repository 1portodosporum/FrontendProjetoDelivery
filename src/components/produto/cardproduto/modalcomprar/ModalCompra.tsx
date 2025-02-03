import Modal from "../../../../ui/Modal";
import Produto from "../../../../models/Produto";
import { Oval } from "react-loader-spinner";

interface ModalComprarProps {
    produto: Produto;
    fecharModal: () => void;
    setQuantidade: (quantidade: number) => void;
    quantidade: number;
    confirmarPedido: () => void;
    isLoading: boolean;
}

const ModalComprar = ({ produto, fecharModal, setQuantidade, quantidade, confirmarPedido, isLoading }: ModalComprarProps) => {
    return (
        <Modal titulo="Finalizar Pedido" fecharModal={fecharModal}>
            <p>Produto: <strong>{produto.nome}</strong></p>
            <p>Preço unitário: R$ {produto.preco.toFixed(2)}</p>

            <div className="mt-4 flex items-center space-x-4">
                <label className="text-gray-700 font-medium">Quantidade:</label>
                <button
                    onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                    className="bg-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400 transition active:scale-95">
                    −
                </button>
                <span className="text-lg font-semibold">{quantidade}</span>
                <button
                    onClick={() => setQuantidade(quantidade + 1)}
                    className="bg-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400 transition active:scale-95">
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
                    className="flex justify-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 min-w-[155px]">
                    {isLoading ? <Oval
                        visible={true}
                        height="24"
                        width="24"
                        color="white"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    /> : 'Confirmar Pedido'}

                </button>
            </div>
        </Modal>
    );
};


export default ModalComprar;
