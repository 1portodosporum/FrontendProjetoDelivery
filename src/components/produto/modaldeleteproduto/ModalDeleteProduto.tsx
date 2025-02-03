import { Oval } from "react-loader-spinner";
import Produto from "../../../models/Produto";
import Modal from "../../../ui/Modal";

interface ModalDeleteProdutoProps {
    produto: Produto;
    isLoading: boolean;
    fecharModalDelete: () => void;
    removerPedido: (id: string) => void;
}

const ModalDeleteProduto = ({ produto, fecharModalDelete, removerPedido, isLoading }: ModalDeleteProdutoProps) => {
    return (
        <Modal titulo="Excluir Produto" fecharModal={fecharModalDelete}>
            <p>Tem certeza que deseja excluir o produto {produto.nome}?</p>

            <div className="flex justify-between mt-4">
                <button
                    onClick={fecharModalDelete}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                    Cancelar
                </button>
                <button
                    onClick={() => removerPedido(produto.id.toString())}
                    className="flex justify-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 min-w-[87px]">
                    {isLoading ? <Oval
                        visible={true}
                        height="24"
                        width="24"
                        color="white"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    /> : 'Excluir'}
                    
                </button>
            </div>
        </Modal>
    );

};

export default ModalDeleteProduto;