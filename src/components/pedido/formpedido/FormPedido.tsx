export const FormPedido = () => {
  return (
    <div className="max-w-md mt-16 mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Novo Pedido</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm">Quantidade</label>
          <input
            type="number"
            name="quantidade"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-orange-500 focus:ring-1 focus:gray-500"
            min="1"
          />
        </div>
        <div>
          <label className="block text-sm">Preço Total</label>
          <input
            type="number"
            name="preco_total"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-orange-500 focus:ring-1 focus:gray-500"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm">Status</label>
          <select
            name="status"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-orange-500 focus:ring-1 focus:gray-500"
          >
            <option value="Pendente">Pendente</option>
            <option value="Aprovado">Aprovado</option>
            <option value="Cancelado">Cancelado</option>
          </select>
        </div>
        <div>
          <label className="block text-sm">ID do Produto</label>
          <input
            type="number"
            name="produtoId"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
      focus:outline-none focus:border-orange-500 focus:ring-1 focus:gray-500"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-green-600 text-white py-2 font-semibold hover:bg-green-400 transition duration-700"
        >
          Enviar Pedido
        </button>
      </form>
    </div>
  );
};
