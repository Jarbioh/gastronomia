// Criando um array para armazenar os pratos
let pratos = [
  {
    nome: 'Matapa',
    ingredientes: ['folhas de mandioca', 'amendoim', 'camarão'],
    descricao: 'Um dos pratos mais famosos, a matapa é um creme espesso feito com folhas de mandioca, amendoim e camarão. A textura cremosa e o sabor intenso a amendoim fazem deste prato um clássico da culinária moçambicana.',
    regiao: 'Amplamente consumido em todo o país',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://www.mmo.co.mz/wp-content/uploads/2024/02/Matapa-com-Caranguejo-e-Camarao-Receitas.webp' // Substitua pela URL da imagem
  },
  {
    nome: 'Xima',
    ingredientes: ['farinha de milho'],
    descricao: 'Semelhante à polenta, a xima é um acompanhamento básico feito com farinha de milho. É versátil e pode ser combinada com diversos pratos, como a matapa, feijão ou carnes.',
    regiao: 'Amplamente consumido em todo o país',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://dicionario.priberam.org/images/dplp/chima.jpg' // Substitua pela URL da imagem
  },
  {
    nome: 'Frango à Zambeziana',
    ingredientes: ['frango', 'coco ralado', 'especiarias'],
    descricao: 'Originário da província de Zambézia, este prato leva o nome da região e é famoso por seu sabor marcante. O frango é marinado em coco ralado e especiarias, assado na brasa e fica com uma textura macia e saborosa.',
    regiao: 'Província de Zambézia',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCN8hRySiVj6MXdy4wHcLTTk9MF7oms8zpGA&s' // Substitua pela URL da imagem
  },
  {
    nome: 'Cataplana',
    ingredientes: ['marisco', 'carne', 'legumes'],
    descricao: 'De origem portuguesa, a cataplana é um prato preparado em uma panela de cobre com diversos ingredientes, como marisco, carne e legumes. É um prato rico em sabor e muito popular em Moçambique.',
    regiao: 'Influência Portuguesa',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://www.pingodoce.pt/wp-content/uploads/2017/10/cataplana-do-mar.jpg' // Substitua pela URL da imagem
  },
  {
    nome: 'Xiguinha',
    ingredientes: ['mandioca', 'folhas de cacana'],
    descricao: 'Um prato tradicional feito com mandioca e as folhas de cacana, oferecendo uma combinação de sabores única e nutritiva.',
    regiao: 'Tradicional Moçambicano',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://manualdoturismo.com/wp-content/uploads/2024/02/xiguinha-de-cacana-manualdoturismo.com_-1024x538.webp' // Substitua pela URL da imagem
  },
  {
    nome: 'Abóbora com coco',
    ingredientes: ['abóbora', 'leite de coco', 'especiarias'],
    descricao: 'Um prato doce e cremoso, perfeito para finalizar uma refeição. A abóbora é cozida com leite de coco e especiarias, resultando em um sabor adocicado e reconfortante.',
    regiao: 'Doce Tradicional',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://brucalderon.com.br/wp-content/uploads/2020/05/Doce-de-Ab%C3%B3bora-com-Coco-F%C3%A1cil.jpeg' // Substitua pela URL da imagem
  },
  {
    nome: 'Guisado de caranguejo',
    ingredientes: ['caranguejo', 'especiarias'],
    descricao: 'Aproveitando a riqueza marítima de Moçambique, o guisado de caranguejo é um prato saboroso e suculento, ideal para os amantes de frutos do mar.',
    regiao: 'Prato Marítimo',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://manualdoturismo.com/wp-content/uploads/2024/02/guisado-de-caranguejo-jpg.webp' // Substitua pela URL da imagem
  },
  {
    nome: 'Pilau',
    ingredientes: ['arroz', 'açafrão', 'cardamomo'],
    descricao: 'Com influências árabes, o pilau é um arroz aromatizado com especiarias, como açafrão e cardamomo. É um acompanhamento perfeito para carnes e frutos do mar.',
    regiao: 'Influência Árabe',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://img-global.cpcdn.com/recipes/e16e61be3886271d/680x482cq70/beef-pilau-recipe-main-photo.jpg' // Substitua pela URL da imagem
  },
  {
    nome: 'Badjias',
    ingredientes: ['feijão nhemba'],
    descricao: 'Bolinhos fritos feitos com feijão nhemba, os badjias são um petisco popular em Moçambique. São crocantes por fora e macios por dentro, com um sabor levemente adocicado.',
    regiao: 'Petisco Popular',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXWptvHbvv6M8KNRq2HIJQWRYGZP-rF27GQ&s' // Substitua pela URL da imagem
  },
  {
    nome: 'Caril de castanha',
    ingredientes: ['castanha', 'leite de coco', 'especiarias'],
    descricao: 'Um prato cremoso e saboroso feito com castanha, leite de coco e especiarias.',
    regiao: 'Prato Cremoso',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://img.freepik.com/fotos-premium/tigela-com-couve-flor-de-caril-indiano-e-batata-em-molho-amarelo-rico-com-castanha-de-caju-e-pao-achatado_642878-279.jpg' // Substitua pela URL da imagem
  },
  {
    nome: 'Mucapata',
    ingredientes: ['arroz', 'coco', 'feijão oloco'],
    descricao: 'Um prato à base de arroz, coco e feijão oloco, muito popular na região norte de Moçambique.',
    regiao: 'Região Norte de Moçambique',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://www.conexaolusofona.org/wp-content/uploads/2019/03/mucapata-73a0d305.jpeg' // Substitua pela URL da imagem
  },
  {
    nome: 'Galinha cafreal',
    ingredientes: ['galinha', 'especiarias', 'vinagre'],
    descricao: 'Típica da província de Inhambane, a galinha cafreal é preparada com um molho picante à base de especiarias e vinagre.',
    regiao: 'Província de Inhambane',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://www.receitasemenus.net/wp-content/uploads/2013/01/frango-cafreal.jpg' // Substitua pela URL da imagem
  },
  {
    nome: 'Peixe grelhado',
    ingredientes: ['peixe fresco'],
    descricao: 'Com uma costa extensa, o peixe fresco é um dos ingredientes mais utilizados na culinária moçambicana. O peixe grelhado é uma opção leve e saborosa.',
    regiao: 'Prato Marítimo',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlR996NcW7htXgLzGRXqp9MICnbnus1vStQ&s' // Substitua pela URL da imagem
  },
  {
    nome: 'Maheu',
    ingredientes: ['milho', 'arroz'],
    descricao: 'Uma bebida fermentada feita com milho ou arroz, muito refrescante e nutritiva.',
    regiao: 'Bebida Tradicional',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://fotos.web.sapo.io/i/B7b0747bc/9640915_D2Bnh.jpeg' // Substitua pela URL da imagem
  },
  {
    nome: 'Doce de coco',
    ingredientes: ['coco ralado', 'açúcar', 'leite de coco'],
    descricao: 'Um doce tradicional feito com coco ralado, açúcar e leite de coco.',
    regiao: 'Doce Tradicional',
    link: 'https://www.visitmozambique.gov.mz/o-que-fazer/gastronomia',
    imagem: 'https://img.cybercook.com.br/imagens/receitas/476/doce-de-coco-queimado.jpg?w=350&h=230&fit=crop' // Substitua pela URL da imagem
  }
];

// Para encontrar as imagens, use as sugestões de palavras-chave e sites de banco de imagens que eu dei.
// Após encontrar as imagens, substitua os placeholders "https://unsplash.com/s/photos/nome-do-prato" pelas URLs reais.