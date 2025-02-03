import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import CardPedido from "../cardpedido/CardPedido";
import Pedido from "../../../models/Pedido";
import PedidoServices from "../../../services/PedidoServices";
import { useNavigate } from "react-router-dom";
import { ToastAlert } from "../../../utils/ToastAlert";

const ListarMeusPedidos = () => {

    const  pedidoServices = new PedidoServices();
    const navigate = useNavigate();

    const [pedidos, setPedidos] = useState<Pedido[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const findByPedidos = async() => {
        try{
        await pedidoServices.listPedidos('/pedidos', setPedidos, { 
            headers: { "Authorization": token } 
        });
        } catch(error: any){
            if(error.toString().includes('403')){
                handleLogout();
            }
        }
    };

    useEffect(() => {
        if(token === ''){
            ToastAlert('Você precisa estar logado para acessar essa página', 'info');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        findByPedidos();
    }, [pedidos.length]);

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
            {pedidos.map((pedido: Pedido) => (
                pedido.usuario?.id === usuario.id && (
                    <CardPedido key={pedido.id} pedido={pedido} />
                )
            ))}
        </ section>
    );
}

export default ListarMeusPedidos;