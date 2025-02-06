import ListarPefil from "./listarperfil/ListarPefil";

function Sobre() {
  return (
    <section>
      <div className="w-full max-w-6xl text-center mx-auto px-6 py-16">
        <h3 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-12">
          Conheça nossa história
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="lg:w-10/12 mx-auto">
            <p className="text-lg md:text-xl text-gray-900 text-justify lg:text-left leading-relaxed ">
              O <strong>Delivery AiKi📍Fome</strong> é um sistema de gerenciamento de pedidos e produtos para empresas
              de delivery, como restaurantes e mercados. Nossa missão é facilitar as implementações de cadastro,
              consulta e atualizações de dados de usuário, trazendo mais eficiência e praticidade ao setor.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/vetores-gratis/equipe-de-entrega-andar-de-motocicletas-conceito-de-compras_1150-34879.jpg"
              alt="História do Delivery"
              className="w-full max-w-sm rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mt-16 mb-12">
          Nosso objetivo
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <img
              src="https://mercadoeconsumo.com.br/wp-content/uploads/2019/06/Delivery-%C3%A9-aposta-de-restaurantes-para-continuar-crescendo.png"
              alt="Objetivo do Delivery"
              className="w-full max-w-sm rounded-2xl shadow-lg"
            />
          </div>
          <div className="lg:w-10/12 mx-auto order-1 lg:order-2">
            <p className="text-lg md:text-xl text-gray-900 text-justify lg:text-left leading-relaxed">
              Além de dinamizar o funcionamento de comércios alimentícios, também buscamos oferecer
              sugestões de produtos saudáveis, incentivando melhores hábitos alimentares de forma
              prática e acessível.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <ListarPefil />
      </div>
    </section>
  );
}

export default Sobre;