import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Usuario from '../../models/Usuario'
import UsuarioServices from '../../services/UsuarioServices';
import { ToastAlert } from '../../utils/ToastAlert';

function Cadastro() {
  const usuarioServices = new UsuarioServices();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmarSenha, setConfirmarSenha] = useState<string>('');

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    tipo: '',
    endereco: ''
  });

  const retornar = () => navigate('/login');

  const atualizarEstado = (evento: ChangeEvent<HTMLInputElement>) => {
    setUsuario({
      ...usuario,
      [evento.target.name]: evento.target.value,
    });
  };

  const handleConfirmarSenha = (evento: ChangeEvent<HTMLInputElement>) => {
    setConfirmarSenha(evento.target.value);
  };

  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await usuarioServices.createUsuario('/usuarios/cadastrar', usuario, setUsuario);
        ToastAlert('Usuário cadastrado com sucesso!', "sucesso");
        retornar();
      } catch (error) {
        ToastAlert('Erro ao cadastrar usuário!', "erro");
      }
    } else {
      ToastAlert('Senhas não conferem ou senha menor que 8 caracteres!', "info");
      setUsuario({ ...usuario, senha: '' });
      setConfirmarSenha('');
    }

    setIsLoading(false);
  }



  return (

      <div className="min-h-screen bg-gray-50 pt-10">
        <section className="max-w-md mt-7 mx-auto p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-3xl font-bold mb-4 text-center">Criar Conta</h2>
            <p className="text-center text-sm text-gray-600">
          Já tem uma conta?{' '}
          <Link to="/login" className="font-medium text-red-600 hover:text-red-500">
            Faça login
          </Link>
            </p>

        <form onSubmit={cadastrar} className="space-y-4 mt-5">
          <div>
            <label className="block text-sm">Nome</label>
            <input
              type="text"
              name="usuario"
              placeholder="Seu nome"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              value={usuario.usuario}
              onChange={atualizarEstado}
            />
          </div>

          <div>
            <label className="block text-sm">Senha</label>
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              value={usuario.senha}
              onChange={atualizarEstado}
            />
          </div>

          <div>
            <label className="block text-sm">Confirmar Senha</label>
            <input
              type="password"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              value={confirmarSenha}
              onChange={handleConfirmarSenha}
            />
          </div>

          <div>
            <label className="block text-sm">Foto</label>
            <input
              type="text"
              name="foto"
              placeholder="Foto"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              value={usuario.foto}
              onChange={atualizarEstado}
            />
          </div>

          <div>
            <label className="block text-sm">Tipo</label>
            <input
              type="text"
              name="tipo"
              placeholder="Tipo"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              value={usuario.tipo}
              onChange={atualizarEstado}
            />
          </div>

          <div>
            <label className="block text-sm">Endereço</label>
            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              value={usuario.endereco}
              onChange={atualizarEstado}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-red-500 text-white py-2 font-semibold hover:bg-red-700 transition duration-700"
            disabled={isLoading}
          >
            {isLoading ? 'Cadastrando...' : 'Cadastrar'}
          </button>

          <button
            type="button"
            className="w-full mt-2 rounded-md bg-gray-400 text-white py-2 font-semibold hover:bg-gray-600 transition duration-700"
            onClick={retornar}
          >
          Voltar
         </button>
       </form>
    </section>
  </div>
  )
}

export default Cadastro