import { useNavigate } from "react-router-dom";
import PedidoServices from "../../../services/PedidoServices";
import Pedido from "../../../models/Pedido";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";
import CardPedido from "../cardpedido/CardPedido";

const ListarPedidos = () => {

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
            toast.error('Você precisa estar logado para acessar essa página');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        findByPedidos();
    }, [pedidos.length]);



    return (
        <section>
            <h1 className="text-center font-bold text-3xl mt-10">Listagem de Pedidos</h1>
            <div className="grid grid-cols-3 gap-4 mt-10">
                {pedidos.map(pedido => (
                    <CardPedido key={pedido.id} pedido={pedido} />
                ))}
            </div>
        </section>
    );

}

export default ListarPedidos;