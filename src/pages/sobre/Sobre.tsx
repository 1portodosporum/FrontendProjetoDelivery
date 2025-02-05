import ListarPefil from "./listarperfil/ListarPefil";

function Sobre() {
  return (
    <>
      <div className="min-h-screen max-w-6xl mx-auto mt-16 mb-16 px-4 sm:px-8">
        <h3 className="text-5xl font-bold text-center text-orange-500 mb-16 tracking-wide">
          Conheça nossa história
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center mb-16 gap-8">
          <div className="w-full lg:w-1/2 flex justify-center text-center">
            <p className="text-2xl text-gray-900 text-justify justify-center">
              O Delivery AiKi📍Fome é um sistema de gerenciamento de pedidos e produtos para empresas de
              delivery, como restaurantes e mercados. Nossa missão é facilitar as implementações de cadastro,
              consulta e atualizações de dados de usuário.
            </p>
          </div>
        </div>
        <h3 className="text-5xl font-bold text-center text-orange-500 mb-16 tracking-wide">Nosso objetivo</h3>
        <div className="w-full lg:w-1/2 flex justify-center text-center mx-auto">
          <p className="text-2xl text-gray-900 text-justify justify-center">
            Nosso objetivo além de dinamizar o funcionamento de comércios alimentícios também é fornecer
            sugestões de produtos saudáveis, com a intenção de melhorar a praticidade para os habitos da
            alimentação saudável.
          </p>
        </div>
      </div>
      <ListarPefil />
    </>
  );
}

export default Sobre;