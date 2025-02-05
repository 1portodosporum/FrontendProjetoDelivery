import CardPerfil from "../cardperfil/CardPefil";
import desenvolvedores from "../time/Desenvolvedores";

const ListarPefil = () => {
    return (
        <section className="h-screen bg-gray-100 flex flex-col items-center justify-center flex-wrap gap-6 px-10 py-2 ">
            <h1 className="py-1 text-5xl font-bold text-center text-orange-500 mb-16 tracking-wide">Nosso time</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
                {
                    desenvolvedores.map((desenvolvedor) => (
                        <CardPerfil key={desenvolvedor.nome} desenvolvedor={desenvolvedor} />
                    ))
                }
            </div>
        </section>
    );

}

export default ListarPefil;