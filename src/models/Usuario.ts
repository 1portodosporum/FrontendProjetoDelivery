import Pedido from "./Pedido";

interface Usuario {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    tipo: string;
    endereco: string;
    pedido?: Pedido;
}

export default Usuario;