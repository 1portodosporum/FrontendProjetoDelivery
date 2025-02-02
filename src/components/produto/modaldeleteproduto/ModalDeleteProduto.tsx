import Produto from "../../../models/Produto";
import Modal from "../../../ui/Modal";

interface ModalDeleteProdutoProps {
    produto: Produto;
    fecharModal: () => void;
}

const ModalDeleteProduto = ({produto, fecharModal}: ModalDeleteProdutoProps ) => {
    return (
        <Modal titulo="Excluir Produto" fecharModal={fecharModal}>
            <p>Tem certeza que deseja excluir o produto { produto.nome }?</p>

            <div className="flex justify-between mt-4">
                <button
                    onClick={() => {}}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                    Cancelar
                </button>
                <button
                    onClick={() => {}}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                    Excluir
                </button>
            </div>
        </Modal>
    );

};

export default ModalDeleteProduto;