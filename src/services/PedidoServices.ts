import baseApi from "./baseApi";

class PedidoServices {

    createPedido = async (url: string, pedido: Object, header: Object) => {
        await baseApi.post(url, pedido, header);
    }

    listPedidos = async (url: string, setDados: Function, header: Object) => {
        const response = await baseApi.get(url, header);
        setDados(response.data);
    }

    updatePedido = async (url: string, dados: Object, setDados: Function, header: Object) => {
        const response = await baseApi.put(url, dados, header);
        setDados(response.data);
    }

    deletePedido = async (url: string, header: Object) => {
        await baseApi.delete(url, header);
    }
}

export default PedidoServices;