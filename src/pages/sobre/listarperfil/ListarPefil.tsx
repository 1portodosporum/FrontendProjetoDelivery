import CardPerfil from "../cardperfil/CardPefil";
import desenvolvedores from "../time/Desenvolvedores";

const ListarPefil = () => {
    return (
        <section className="bg-gray-100 flex flex-col items-center justify-center gap-6 px-4 py-10 container mx-auto rounded-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-center text-orange-500 mb-10 tracking-wide">
                Nosso time
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
                {desenvolvedores.map((desenvolvedor) => (
                    <CardPerfil key={desenvolvedor.nome} desenvolvedor={desenvolvedor} />
                ))}
            </div>
        </section>
    );
}

export default ListarPefil;
