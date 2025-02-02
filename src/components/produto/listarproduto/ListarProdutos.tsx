import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import ProdutoServices from "../../../services/ProdutoServices";
import Produto from "../../../models/Produto";
import CardProduto from "../cardproduto/CardProduto";

function ListarProdutos() {

    const navigate = useNavigate();

    const produtoServices = new ProdutoServices();

    const [produtos, setProdutos] = useState<Produto[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProdutos() {
        try {
            await produtoServices.listProdutos('/produtos', setProdutos, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarProdutos()
    }, [produtos.length])

    return (
        <>
            <section className="flex flex-wrap justify-center gap-4 p-10">
                {produtos.map((produto) => (
                    <CardProduto key={produto.id} produto={produto} />
                ))}
            </section>
        </>
    );
}

export default ListarProdutos;