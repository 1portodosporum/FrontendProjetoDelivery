import { createContext, ReactNode, useEffect, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import UsuarioServices from "../services/UsuarioServices";
import { ToastAlert } from "../utils/ToastAlert";

interface AuthContextProps {
    usuario: UsuarioLogin;
    userType: string | null;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    isLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

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
                  token: "",
                  tipo: "" 
              };
    });

    const usuarioServices = new UsuarioServices();
    const [isLoading, setIsLoading] = useState(false);

    
    useEffect(() => {
        if (usuario.token) {
            localStorage.setItem("usuario", JSON.stringify(usuario));
        }
    }, [usuario]);

    
    const userType = usuario?.tipo || null; 

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true);
        try {
            await usuarioServices.loginUsuario(`/usuarios/logar`, usuarioLogin, setUsuario);
            ToastAlert("Usuário foi autenticado com sucesso!", "success");
        } catch (error) {
            ToastAlert("Os dados do Usuário estão inconsistentes!", "error");
        }
        setIsLoading(false);
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
        });
        localStorage.removeItem("usuario");
    }

    return (
        <AuthContext.Provider value={{ usuario, userType, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}
