import Pedido from "../models/Pedido";
import baseApi from "./baseApi";

class PedidoServices{

    createPedido = async(url: string, pedido: Pedido, setDados: Function, header: Object) => {
        try {
            const response = await baseApi.post(url, pedido, header);
            setDados(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    listPedidos = async(url: string, setDados: Function, header: Object) => {
        try {
            const response = await baseApi.get(url, header);
            setDados(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    updatePedido = async(url: string, dados: Object, setDados: Function, header: Object) => {
        try {
            const response = await baseApi.put(url, dados, header);
            setDados(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    deletePedido = async(url: string, header: Object) => {
        try {
             await baseApi.delete(url, header);
        } catch (error) {
            console.log(error);
        }
    }
}

export default PedidoServices;