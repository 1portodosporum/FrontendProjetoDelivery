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
        
        <div>

        </div>

    )
    
}

export default Cadastro