import Produto from "../../../models/Produto";

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

export default produtosRecomendado;