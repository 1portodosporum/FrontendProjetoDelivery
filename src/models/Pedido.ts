import Produto from "./Produto";
import Usuario from "./Usuario";

interface Pedido {
    id?: number;
    quantidade: number;
    preco_total?: number;
    status: string;
    data_pedido?: string;
    produto?: Produto;
    usuario?: Usuario;
}

export default Pedido;