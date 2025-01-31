import { createContext, ReactNode, useEffect, useState } from "react"
import UsuarioLogin from "../models/UsuarioLogin"
import UsuarioServices  from "../services/UsuarioServices"


interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
        const usuarioSalvo = localStorage.getItem("usuario");
        
        return usuarioSalvo
          ? JSON.parse(usuarioSalvo)
          : {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
            };
        });

    const usuarioServices = new UsuarioServices();

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(usuario.token){
            localStorage.setItem("usuario", JSON.stringify(usuario));
        }
    })

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await usuarioServices.loginUsuario(`/usuarios/logar`, usuarioLogin, setUsuario)
            alert("Usuário foi autenticado com sucesso!")
        } catch (error) {
            alert("Os dados do Usuário estão inconsistentes!")
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: "",
            tipo: ""
        })
        localStorage.removeItem("usuario")
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}