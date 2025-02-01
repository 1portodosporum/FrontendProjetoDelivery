import Pedido from "./Pedido";

interface Produto {
    id?: number;
    nome: string;
    preco: number;
    imagem: string;
    descricao: string;
    saudavel: boolean;
    categoria: string;
    pedido?: Pedido;
}

export default Produto;