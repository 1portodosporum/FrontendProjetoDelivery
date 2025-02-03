import { useNavigate } from "react-router-dom";
import PedidoServices from "../../../services/PedidoServices";
import Pedido from "../../../models/Pedido";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";
import CardPedido from "../cardpedido/CardPedido";
import { FallingLines } from "react-loader-spinner";

export const ListarPedidos = () => {
  const pedidoServices = new PedidoServices();
  const navigate = useNavigate();

  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [pesquisarPorNome, setPesquisarPorNome] = useState("");

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const findByPedidos = async () => {
    setIsLoading(true);
    try {
      await pedidoServices.listPedidos("/pedidos", setPedidos, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (token === "") {
      toast.error("Você precisa estar logado para acessar essa página");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    findByPedidos();
  }, [pedidos.length]);

  const pedidosFiltrados = pedidos.filter((pedido) =>
    pedido.produto?.nome.toLowerCase().includes(pesquisarPorNome.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-center font-bold text-3xl mt-10">Procurar Pedido</h1>

      <div className="relative w-full max-w-lg mt-6">
        <input
          type="text"
          placeholder="Buscar por nome do produto..."
          className="w-full p-2 border border-gray-300 text-gray-700 after:ml-0.5 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md placeholder:text-gray-500 placeholder:italic"
          value={pesquisarPorNome}
          onChange={(e) => setPesquisarPorNome(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10 w-full">
        {isLoading ?
          <div className="flex justify-center items-center min-h-[100vh] min-w-[100vw]">
            <FallingLines
              color="#4fa94d"
              width="100"
              visible={true}
            />
          </div>
          :
          pedidosFiltrados.map((pedido) => (
            <CardPedido key={pedido.id} pedido={pedido} />
          ))
        }
      </div>
    </div>
  );
};


