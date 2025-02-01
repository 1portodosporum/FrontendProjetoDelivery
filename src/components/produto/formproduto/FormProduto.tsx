export const FormProduto = () => {

  return (
    <div className="mt-16 max-w-lg mx-auto py-8 px-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Cadastrar Produto</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm">Nome</label>
          <input
            type="text"
            name="nome"
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-violet-500 focus:ring-1 focus:violet-500"
          />
        </div>

        <div>
          <label className="block text-sm">Descrição</label>
          <textarea
            name="descricao"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-violet-500 focus:ring-1 focus:violet-500"
          />
        </div>

        <div>
          <label className="block text-sm">Preço (R$)</label>
          <input
            type="number"
            name="preco"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-violet-500 focus:ring-1 focus:violet-500"
          />
        </div>

        <div>
          <label className="block text-sm">Categoria</label>
          <input
            type="text"
            name="categoria"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-violet-500 focus:ring-1 focus:violet-500"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="saudavel"
            className="mr-2"
          />
          <label className="text-sm">Produto saudável?</label>
        </div>

        <div>
          <label className="block text-sm">Imagem</label>
          <input
            type="file"
            id="foto"
            name="foto"
            placeholder="Foto"
            className="file:mr-4 file:rounded-md file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-red-500  hover:file:bg-red-700  dark:file:bg-red-500 dark:file:text-violet-100 file:duration-700"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-red-500 text-white py-2 font-semibold hover:bg-red-700 transition duration-700"
        >
          Cadastrar Produto
        </button>
      </form>
    </div>
  );
};
