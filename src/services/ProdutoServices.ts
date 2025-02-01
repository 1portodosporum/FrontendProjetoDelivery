import Produto from "../models/Produto";
import baseApi from "./baseApi";

class ProdutoServices {

    createProduto = async (url: string, produto: Produto, setDados: Function, header: Object) => {
        const response = await baseApi.post(url, produto, header);
        setDados(response.data);
    }

    listProdutos = async (url: string, setDados: Function, header: Object) => {
        const response = await baseApi.get(url, header);
        setDados(response.data);
    }

    updateProduto = async (url: string, dados: Object, setDados: Function, header: Object) => {
        const response = await baseApi.put(url, dados, header);
        setDados(response.data);
    }
    
    deleteProduto = async (url: string, header: Object) => {
        await baseApi.delete(url, header);
    }
}

export default ProdutoServices;