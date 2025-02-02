import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {

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

      <section>
          <div className="text-center flex-col h-screen flex items-center justify-items-center p-2 bg-gray-200">
              <h2 className="text-5xl font-bold text-gray-800">Sugestões</h2>
              <p className="text-xl text-gray-600 mt-4">Informações sobre o delivery...</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
                  <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-64">
                      <img src="https://img.freepik.com/fotos-gratis/salada-de-legumes-na-mesa_23-2148515515.jpg?t=st=1738517683~exp=1738521283~hmac=222af05298e59f9e45413726dec935af2d6e534e5727fd552f13e2685561479d&w=740" alt="Produto ilustrativo" className="w-full h-32 object-cover" />
                      <div className="px-4 py-2">
                          <h5 className="text-lg font-semibold text-gray-800">Salada</h5>
                          <p className="text-gray-600 font-medium">Preço: <span className="text-green-600 font-bold">R$ 25,00</span></p>
                          <p className="text-gray-600">Descrição: Salada de agreão agridoce.</p>
                          <Link to="/login" className="text-blue-500 mt-2 inline-block">Adicionar pedido</Link>
                      </div>
                  </div>
                  <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-64">
                      <img src="https://static.itdg.com.br/images/622-auto/1f15377fc8e3cd276daf0ae900c8236e/321840-original.jpg" alt="Produto ilustrativo" className="w-full h-32 object-cover" />
                      <div className="px-4 py-2">
                          <h5 className="text-lg font-semibold text-gray-800">Strogonoff fit</h5>
                          <p className="text-gray-600 font-medium">Preço: <span className="text-green-600 font-bold">R$ 45,00</span></p>
                          <p className="text-gray-600">Descrição: Strogonoff fit com batata-doce.</p>
                          <Link to="/login" className="text-blue-500 mt-2 inline-block">Adicionar pedido</Link>
                      </div>
                  </div>
                  <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-64">
                      <img src="https://static.itdg.com.br/images/622-auto/842c323d0e4336dcb9bbe1833c62a820/322150-original.png" alt="Produto ilustrativo" className="w-full h-32 object-cover" />
                      <div className="px-4 py-2">
                          <h5 className="text-lg font-semibold text-gray-800">Omelete </h5>
                          <p className="text-gray-600 font-medium">Preço: <span className="text-green-600 font-bold">R$ 24,90</span></p>
                          <p className="text-gray-600">Descrição: Omelete de 2 ovos.</p>
                          <Link to="/login" className="text-blue-500 mt-2 inline-block">Adicionar pedido</Link>
                      </div>
                  </div>
                  <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-64">
                      <img src="https://s2-receitas.glbimg.com/WiqQsbWK2bjhJyaxSM7dFgRJSPE=/0x0:450x334/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/30/54/197/strogonoff_de_frango_f8_12728.jpg" alt="Produto ilustrativo" className="w-full h-32 object-cover" />
                      <div className="px-4 py-2">
                          <h5 className="text-lg font-semibold text-gray-800">Strogonoff de azeitona</h5>
                          <p className="text-gray-600 font-medium">Preço: <span className="text-green-600 font-bold">R$ 32,80</span></p>
                          <p className="text-gray-600">Descrição: Texto ilustrativo do produto.</p>
                          <Link to="/login" className="text-blue-500 mt-2 inline-block">Adicionar pedido</Link>
                      </div>
                  </div>
                  <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-64">
                      <img src="https://static.itdg.com.br/images/622-auto/c61f6cd8374de489aadc8aadf25aed1a/320760-original.jpg" alt="Produto ilustrativo" className="w-full h-32 object-cover" />
                      <div className="px-4 py-2">
                          <h5 className="text-lg font-semibold text-gray-800">Espaguete de abobrinha</h5>
                          <p className="text-gray-600 font-medium">Preço: <span className="text-green-600 font-bold">R$ 50,00</span></p>
                          <p className="text-gray-600">Descrição: Espaguete de abobrinha.</p>
                          <Link to="/login" className="text-blue-500 mt-2 inline-block">Adicionar pedido</Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
  );
}

