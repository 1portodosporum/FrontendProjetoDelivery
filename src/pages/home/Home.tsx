import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-y-auto">
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}> 
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center text-white px-4">
          <h1 className="text-7xl md:text-7xl font-bold mb-6">Delivey Comida</h1>
          <p className="text-xl md:text-2xl mb-8">comida blablablablablablabla</p>
          <Link to="/cardapio">Carrinho</Link>

        </div>
      </section>
      <section className="h-screen flex items-center justify-center bg-gray-200">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800">Sobre Nós</h2>
          <p className="text-xl text-gray-600 mt-4">Informações sobre o delivery...</p>
        </div>
      </section>
      
    </div>
  );
}

