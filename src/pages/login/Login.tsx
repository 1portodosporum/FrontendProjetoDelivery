import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Oval } from 'react-loader-spinner';
import UsuarioLogin from '../../models/UsuarioLogin';
import { AuthContext } from '../../contexts/AuthContext';

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  useEffect(() => {
    if (usuario.token) {
      navigate('/home');
    }
  }, [usuario]);

  const atualizarEstado = (event: ChangeEvent<HTMLInputElement>) => {
    setUsuarioLogin({
      ...usuarioLogin,
      [event.target.name]: event.target.value,
    });
  };

  const login = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin(usuarioLogin);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-10 flex items-center justify-center p-4">
      <section className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl w-full">
        <div className="flex flex-row justify-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 flex justify-center">
            <img className="w-2/3" src="src/assets/aikifomelaranjao.png" alt="" />
          </h1>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-center text-orange-600">Bem-vindo</h2>
        <p className="text-center text-sm text-orange-600">Faça login para continuar</p>

        <form onSubmit={login} className="space-y-4 mt-5">
          <div>
            <label className="block text-sm">Email</label>
            <input
              id="usuario"
              type="email"
              name="usuario"
              placeholder="seu@email.com"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              value={usuarioLogin.usuario}
              onChange={(e) => atualizarEstado(e)}
              required
            />
          </div>

          <div>
            <label className="block text-sm">Senha</label>
            <input
              id="senha"
              type="password"
              name="senha"
              placeholder="••••••••"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              value={usuarioLogin.senha}
              onChange={(e) => atualizarEstado(e)}
              required
            />
          </div>

          <button
            type="submit"
            className="flex justify-center w-full rounded-md bg-orange-500 text-white py-2 font-semibold hover:text-yellow-300 transition duration-700"
            disabled={isLoading}>
            {isLoading ? (
              <Oval
                visible={true}
                height="24"
                width="24"
                color="white"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              'Entrar'
            )}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Não tem uma conta?{' '}
          <Link to="/cadastro" className="font-medium text-orange-600 hover:text-red-500">
            Cadastre-se
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Login;
