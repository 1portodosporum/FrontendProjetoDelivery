import { Link } from 'react-router-dom';
import './Home.css';
import Produto from '../../models/Produto';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CardProduto from '../../components/produto/cardproduto/CardProduto';
import { useState } from 'react';

export default function Home() {

  const produtosRecomendado: Produto[] = [
    {
      id: 1,
      nome: 'Salada',
      preco: 25.0,
      descricao: 'Salada de agrião agridoce.',
      categoria: 'Comida',
      imagem: 'https://img.freepik.com/fotos-gratis/salada-de-legumes-na-mesa_23-2148515515.jpg?w=740',
      saudavel: true,
    },
    {
      id: 2,
      nome: 'Strogonoff fit',
      preco: 45.0,
      descricao: 'Strogonoff fit com batata-doce.',
      categoria: 'Comida',
      imagem: 'https://static.itdg.com.br/images/622-auto/1f15377fc8e3cd276daf0ae900c8236e/321840-original.jpg',
      saudavel: true,
    },
    {
      id: 3,
      nome: 'Omelete',
      preco: 24.9,
      descricao: 'Delicioso omelete de 2 ovos.',
      categoria: 'Comida',
      imagem: 'https://static.itdg.com.br/images/622-auto/842c323d0e4336dcb9bbe1833c62a820/322150-original.png',
      saudavel: true,
    },
    {
      id: 4,
      nome: 'Strogonoff de azeitona',
      preco: 32.8,
      descricao: 'Strogonoff de azeitona.',
      categoria: 'Comida',
      imagem: 'https://s2-receitas.glbimg.com/WiqQsbWK2bjhJyaxSM7dFgRJSPE=/0x0:450x334/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/30/54/197/strogonoff_de_frango_f8_12728.jpg',
      saudavel: false,
    },
    {
      id: 5,
      nome: 'Espaguete de abobrinha',
      preco: 50.0,
      descricao: 'Espaguete de abobrinha.',
      categoria: 'Comida',
      imagem: 'https://static.itdg.com.br/images/622-auto/c61f6cd8374de489aadc8aadf25aed1a/320760-original.jpg',
      saudavel: true,
    },
    {
      id: 6,
      nome: 'Salada de frutas',
      preco: 15.0,
      descricao: 'Salada de frutas.',
      categoria: 'Comida',
      imagem: 'https://img.freepik.com/fotos-gratis/salada-de-frutas-frescas_23-2148515521.jpg?size=626&ext=jpg',
      saudavel: true,
    },
    {
      id: 7,
      nome: 'Hamburguer',
      preco: 20.0,
      descricao: 'Hamburguer artesanal.',
      categoria: 'Comida',
      imagem: 'https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/05/mafe-estudio-LV2p9Utbkbw-unsplash.jpg',
      saudavel: false,
    },
    {
      id: 8,
      nome: 'Sorvete',
      preco: 10.0,
      descricao: 'Sorvete de chocolate.',
      categoria: 'Sobremesa',
      imagem: 'https://www.avanteingredientes.com.br/wp-content/uploads/2022/04/Saborizacao.jpg',
      saudavel: false,
    },
  ];

  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleProducts = 3;

  

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

  return (

    <div className="min-h-screen w-full overflow-y-auto">
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center text-white px-4">
          <h1 className="text-7xl md:text-7xl font-bold mb-6">Cê ta com fome? Pede ai!</h1>
          <p className="text-xl md:text-2xl mb-8">Pediu chegou!</p>

          <button className='bg-green-600 duration-700 hover:bg-green-400 text-white px-8 py-3 rounded-full text-base font-semibold'>
            <Link to="/login">Peça já</Link>
          </button>
        </div>
      </section>

      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-800 text-center mb-8">Recomendados</h2>
          <div className="flex justify-center items-center space-x-2">
            <button onClick={prevSlide} className="p-2 bg-white shadow-md rounded-full hover:bg-gray-300">
              <ChevronLeft size={32} />
            </button>
            <div className="overflow-hidden w-full ">
              <div className="flex space-x-4 transition-transform duration-300 " style={{ transform: `translateX(-${scrollIndex * 250}px)` }}>
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
    </div>
  );
}

