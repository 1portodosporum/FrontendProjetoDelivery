import Pedido from "./Pedido";

interface Produto {
    id?: number;
    nome: string;
    preco: number;
    imagem: string;
    descricao: string;
    saudavel: boolean;
    pedido: Pedido;
}

export default Produto;