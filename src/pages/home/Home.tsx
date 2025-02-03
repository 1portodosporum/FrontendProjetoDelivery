import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CardProduto from '../../components/produto/cardproduto/CardProduto';
import { useContext, useState } from 'react';
import produtosRecomendado from '../../components/produto/produtos/produtos';
import { AuthContext } from '../../contexts/AuthContext';
import ModalLogin from '../../ui/ModalLogin';

export default function Home() {
  const { usuario, handleLogout } = useContext(AuthContext);

  const [scrollIndex, setScrollIndex] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const visibleProducts = 3;

  const navigate = useNavigate();

  const nextSlide = () => {
    if (scrollIndex < produtosRecomendado.length - visibleProducts) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const prevSlide = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  const toLogin = () => {
    handleLogout();
    navigate('/login');
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen w-full overflow-y-auto">
      <section
        className="relative h-screen flex items-center justify-center bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80')",
        }}>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center text-white px-4">
          <h1 className="text-7xl md:text-7xl font-bold mb-6">Seu delivery favorito!</h1>
          <p className="text-xl md:text-2xl mb-8">com os melhores pratos da cidade. Pediu chegou!</p>

          {usuario.tipo === 'Cliente' || usuario.token === '' ? (
            <button className="bg-green-600 duration-700 hover:bg-green-400 text-white px-8 py-3 rounded-full text-base font-semibold">
              {usuario.token === '' ? (
                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}>
                  Peça já
                </button>
              ) : (
                <Link to="/cardapio">Peça já</Link>
              )}
            </button>
          ) : (
            ''
          )}
        </div>
      </section>

      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-800 text-center mb-8">Recomendados</h2>
          <div className="flex justify-center items-center space-x-2 ">
            <button onClick={prevSlide} className="p-2 bg-white shadow-md rounded-full hover:bg-gray-300">
              <ChevronLeft size={32} />
            </button>
            <div className="overflow-hidden w-full ">
              <div
                className="flex space-x-4 transition-transform duration-300 "
                style={{ transform: `translateX(-${scrollIndex * 250}px)` }}>
                {produtosRecomendado.map((produto) => (
                  <CardProduto key={produto.id} produto={produto} />
                ))}
              </div>
            </div>
            <button onClick={nextSlide} className="p-2 bg-white shadow-md rounded-full hover:bg-gray-300">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </section>
      {isOpen && <ModalLogin setIsOpen={setIsOpen} toLogin={toLogin} />}
    </div>
  );
}
