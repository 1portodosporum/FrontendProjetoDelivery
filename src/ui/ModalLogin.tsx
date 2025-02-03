import { X } from "lucide-react";
import { Link } from "react-router-dom";


interface ModalLoginProps {
    setIsOpen: (value: boolean) => void;
    toLogin: () => void;

}

const ModalLogin = ({ setIsOpen, toLogin }: ModalLoginProps) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Faça login para uma experiência melhor!</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <X className="h-6 w-6 text-gray-600" />
                    </button>
                </div>
                <button
                    className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg w-full text-center font-medium"
                    onClick={toLogin}
                >
                    Fazer login
                </button>
                <p className="text-center mt-3 text-gray-600">
                    Não tem uma conta?{" "}
                    <Link to="/cadastro" className="text-orange-600 font-semibold">
                        Criar conta
                    </Link>
                </p>
            </div>
        </div>
    )


}

export default ModalLogin;