import baseApi from "./baseApi";

class UsuarioServices {

    createUsuario = async (url: string, dados: Object, setDados: Function) => {
        const response = await baseApi.post(url, dados);
        setDados(response.data);
    }

    loginUsuario = async (url: string, dados: Object, setDados: Function) => {
        const response = await baseApi.post(url, dados);
        setDados(response.data);
    }
}

export default UsuarioServices;