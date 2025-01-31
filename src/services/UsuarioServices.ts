import baseApi from "./baseApi";

class UsuarioServices{

    createUsuario = async(url: string, dados: Object, setDados: Function) => {
        try {
            const response = await baseApi.post(url, dados);
            setDados(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    loginUsuario = async(url: string, dados: Object, setDados: Function) => {
        try {
            const response = await baseApi.post(url, dados);
            setDados(response.data);
        } catch (error) {
            console.log(error);
        }
    }
}

export default UsuarioServices;