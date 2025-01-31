import Produto from "../models/Produto";
import baseApi from "./baseApi";

class ProdutoServices{

    createProduto = async(url: string, produto: Produto, setDados: Function, header: Object) => {
        try {
            const response = await baseApi.post(url, produto, header);
            setDados(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    listProdutos = async(url: string, setDados: Function, header: Object) => {
        try {
            const response = await baseApi.get(url, header);
            setDados(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    updateProduto = async(url: string, dados: Object, setDados: Function, header: Object) => {
        try {
            const response = await baseApi.put(url, dados, header);
            setDados(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    deleteProduto = async(url: string, header: Object) => {
        try {
             await baseApi.delete(url, header);
        } catch (error) {
            console.log(error);
        }
    }
}

export default ProdutoServices;