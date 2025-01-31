import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from "react-router-dom"
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

   

    return(
        
        <section>
          <form onSubmit={cadastrar}>
            <div className="flex flex-col items-center justify-center mt-10">
              <h1 className="text-3xl font-bold">Cadastro de Usuário</h1>
              <div className="mt-10">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  className="input"
                  value={usuario.nome}
                  onChange={atualizarEstado}
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  name="usuario"
                  placeholder="Usuário"
                  className="input"
                  value={usuario.usuario}
                  onChange={atualizarEstado}
                />
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  className="input"
                  value={usuario.senha}
                  onChange={atualizarEstado}
                />
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  name="confirmarSenha"
                  placeholder="Confirmar Senha"
                  className="input"
                  value={confirmarSenha}
                  onChange={handleConfirmarSenha}
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  name="foto"
                  placeholder="Foto"
                  className="input"
                  value={usuario.foto}
                  onChange={atualizarEstado}
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  name="tipo"
                  placeholder="Tipo"
                  className="input"
                  value={usuario.tipo}
                  onChange={atualizarEstado}
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  name="endereco"
                  placeholder="Endereço"
                  className="input"
                  value={usuario.endereco}
                  onChange={atualizarEstado}
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="button button-blue"
                  disabled={isLoading}
                >
                  {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                </button>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="button button-red"
                  onClick={retornar}
                >
                  Voltar
                </button>
              </div>
            </div>
          </form>
        </section>
    )
    
}

export default Cadastro