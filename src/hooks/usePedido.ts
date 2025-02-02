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

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => {
        setModalAberto(false);
        setQuantidade(1);
    };

    const abrirModalDelete = () => setModalDeleteAberto(true);
    const fecharModalDelete = () => setModalDeleteAberto(false);



    const confirmarPedido = async (produto: Produto) => {
        const pedido = {
            quantidade,
            status: 'Pendente',
            produto: { id: produto.id },
            usuario: { id: usuario.id },
        };

        try {
            await pedidoServices.createPedido('/pedidos', pedido, {
                headers: { Authorization: token },
            });
            ToastAlert("Pedido enviado com sucesso!", "success");
        } catch (error) {
            ToastAlert("Erro ao enviar pedido!", "error");
        }

        fecharModal();
    };

    const removerPedido = async (id: string) => {
        try {
            await pedidoServices.deletePedido(`/pedidos/${id}`, {
                headers: {
                    Authorization: token,
                },
            });
            ToastAlert("Pedido removido com sucesso!", "success");
        } catch (error) {
            ToastAlert("Erro ao remover pedido!", "error");
        }
        fecharModalDelete();
        window.location.reload();
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
        removerPedido
    };
};
