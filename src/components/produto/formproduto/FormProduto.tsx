import { useNavigate, useParams } from "react-router-dom";
import ProdutoServices from "../../../services/ProdutoServices";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlert } from "../../../utils/ToastAlert";
import { Oval } from "react-loader-spinner";

export const FormProduto = () => {

  const produtoServices = new ProdutoServices();
  const navigate = useNavigate();

  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  const findByProduto = async (id: string) => {
    try {
      await produtoServices.listProdutos(`/produtos/${id}`, setProduto, {
        headers: { "Authorization": token }
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      ToastAlert('Você precisa estar logado para acessar essa página', 'info');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findByProduto(id);
    }
  }, [id]);

  const updateState = (e: ChangeEvent<HTMLInputElement>) => {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  };

  const retornar = () => {
    navigate('/cardapio')
  }

  const createProduto = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await produtoServices.updateProduto(`/produtos/${id}`, produto, setProduto, {
          headers: { "Authorization": token }
        });
        ToastAlert('Produto atualizado com sucesso', 'success');
      } catch (error: any) {
        if (error.toString().includes('403')) {
          handleLogout();
        }
      }
    } else {
      try {
        await produtoServices.createProduto('/produtos', produto, setProduto, {
          headers: { "Authorization": token }
        });
        ToastAlert('Produto cadastrado com sucesso', 'success');
      } catch (error: any) {
        if (error.toString().includes('403')) {
          handleLogout();
        }
      }
    }

    setIsLoading(false);
    retornar();
  }



  return (
    <div className="mt-16 max-w-lg mx-auto py-8 px-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Cadastrar Produto</h2>
      <form className="space-y-4" onSubmit={createProduto}>
        <div>
          <label className="block text-sm">Nome</label>
          <input
            type="text"
            name="nome"
            value={produto.nome}
            onChange={updateState}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-orange-500 focus:ring-1 focus:gray-500"
          />
        </div>

        <div>
          <label className="block text-sm">Descrição</label>
          <input
            type="text"
            name="descricao"
            value={produto.descricao}
            onChange={updateState}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-orange-500 focus:ring-1 focus:gray-500"
          />
        </div>

        <div>
          <label className="block text-sm">Preço (R$)</label>
          <input
            type="number"
            name="preco"
            value={produto.preco}
            onChange={updateState}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-orange-500 focus:ring-1 focus:gray-500"
          />
        </div>

        <div>
          <label className="block text-sm">Categoria</label>
          <select
            name="categoria"
            id="categoria"
            value={produto.categoria}
            required
            onChange={(e) => setProduto({ ...produto, categoria: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:gray-500">
            <option value=""> Selecione ...</option>
            <option value="Bebida">Bebida</option>
            <option value="Comida">Comida</option>
            <option value="Lanche">Lanche</option>
            <option value="Pizza">Pizza</option>
            <option value="Sobremesa">Sobremesa</option>
            <option value="Vegano">Vegano</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="saudavel"
            checked={produto.saudavel || false}
            onChange={(e) => setProduto({ ...produto, saudavel: e.target.checked })}
            className="mr-2" />
          <label className="text-sm">Produto saudável?</label>
        </div>

        <div>
          <label className="block text-sm">Imagem</label>
          <input
            type="text"
            id="imagem"
            name="imagem"
            value={produto.imagem}
            onChange={updateState}
            placeholder="Foto"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:gray-500"
          />
        </div>

        <button
          type="submit"
          className=" flex justify-center w-full rounded-md bg-green-600 text-white py-2 font-semibold hover:bg-green-400 transition duration-700"
        >
          {isLoading ? <Oval
            visible={true}
            height="24"
            width="24"
            color="white"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          /> :
            <span>{id == undefined ? 'Cadastrar Produto' : 'Atualizar'}</span>
          }
        </button>
      </form>
    </div>
  );
};
