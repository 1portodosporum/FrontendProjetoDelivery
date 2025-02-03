import { useState, useContext } from 'react';
import PedidoServices from '../services/PedidoServices';
import { AuthContext } from '../contexts/AuthContext';
import { ToastAlert } from '../utils/ToastAlert';
import Produto from '../models/Produto';

export const usePedido = () => {
    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    const [modalAberto, setModalAberto] = useState(false);
    const [quantidade, setQuantidade] = useState(1);

    const [modalDeleteAberto, setModalDeleteAberto] = useState(false);


    const pedidoServices = new PedidoServices();
    const produtoServices = new PedidoServices();

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => {
        setModalAberto(false);
        setQuantidade(1);
    };

    const abrirModalDelete = () => setModalDeleteAberto(true);
    const fecharModalDelete = () => setModalDeleteAberto(false);

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const confirmarPedido = async (produto: Produto) => {
        const pedido = {
            quantidade,
            status: 'Pendente',
            produto: { id: produto.id },
            usuario: { id: usuario.id },
        };

        setIsLoading(true)

        try {
            await pedidoServices.createPedido('/pedidos', pedido, {
                headers: { Authorization: token },
            });
            ToastAlert("Pedido enviado com sucesso!", "success");
        } catch (error) {
            ToastAlert("Erro ao enviar pedido!", "error");
        }

        setIsLoading(false);

        fecharModal();
    };

    const removerPedido = async (id: string) => {
        setIsLoading(true)
        try {
            await produtoServices.deletePedido(`/produtos/${id}`, {
                headers: {
                    Authorization: token,
                },
            });
            ToastAlert("Pedido removido com sucesso!", "success");
        } catch (error) {
            ToastAlert("Erro ao remover pedido!", "error");
        }
        setIsLoading(false)
        fecharModalDelete();
        //atualiar a pagina depois de fechar o toast alert
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }


    return {
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
        isLoading
    };
};
