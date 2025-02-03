import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">AIK📍FOME</h3>
                        <p className="text-gray-300">
                            Seu delivery favorito e com
                        </p>
                        <p className="text-gray-300">
                            os melhores pratos da cidade.
                        </p>
                    </div>
                    <div>
                        

                        <h3 className="text-xl font-bold mb-4">Contato</h3>
                        <Link to="/Sobre" className="text-gray-300 hover:text-white">
                            Sobre
                        </Link>
                        <p className="text-gray-300">contato@umporto.com</p>
                        <p className="text-gray-300">(11) 99999-9999</p>
                        

                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;