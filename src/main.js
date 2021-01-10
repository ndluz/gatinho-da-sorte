const btn = document.querySelector('.btn');
const gatinho = document.querySelector('.gatinho');
const img = document.querySelector('.img');
const input = document.querySelector('.frase');

btn.addEventListener('click', function() {
  img.src = `https://cataas.com/cat/says/${gatinhos[sortearGatinho(-1, gatinhos.length)]}?size=20&color=yellow`;
})

const gatinhos = [
  `A vida trará coisasboas se tiveres paciência`,
  `Não compense na ira o que lhe falta na razão.`,
  `Defeitos e virtudes são apenas dois lados da mesma moeda.`,
  `Você sempre será a sua melhor companhia!`,
  `Acredite em milagres, mas não dependa deles.`,
  `Vencer é 90 por cento suor e 40 por cento técnica.`,
  `O amor está mais próximo do que você imagina`,
  `A vida coloca em nossa frente opções.`,
  `Você é do tamanho do seu sonho.`,
  `Pare de procurar eternamente; a felicidade está bem ao seu lado.`,
  `Conhecimento é a única virtude e ignorância é o único vício.`,
  'Siga os bons e aprenda com eles',
  'Não importa o tamanho da montanha, ela não pode tapar o sol.',
  'O bom-senso vai mais longe do que muito conhecimento.',
  'Quem quer colher rosas deve suportar os espinhos.',
  'Uma bela flor é incompleta sem suas folhas.',
  'Sem o fogo do entusiasmo, não há o calor da vitória.',
  'O riso é a menor distância entre duas pessoas.',
  'É mais fácil conseguir o perdão do que a permissão.',
  'Os defeitos são mais fortes quando o amor é fraco.',
  'Surpreender e ser surpreendido é o segredo do amor.',
  'Todo mundo é capaz de denominar uma dor, exceto quem a sente.',
  'A sorte favorece a mente bem preparada.',
  'Quem olha para fora sonha; quem olha para dentro acorda.',
  'Trabalhar porque quem ganha dinheiro na cama é puta',
  'Espere pelo mais sábio dos conselhos: o tempo.',
  'Ele(a) não te quer',
  'Todas as coisas são difíceis antes de se tornarem fáceis.',
  'Vencer é 90 por cento suor e 40 por cento técnica.',
  'O amor está mais próximo do que você imagina.',
  'Ta tomando golpe, não confia',
  'A vida coloca em nossa frente opções.',
  'Pare de procurar eternamente; a felicidade está bem ao seu lado.',
  'Conhecimento é a única virtude e ignorância é o único vício.',
  'O nosso primeiro e último amor é… o amor-próprio.',
  'Deixe de lado as preocupações e seja feliz.',
  'A vontade das pessoas é a melhor das leis.',
  'Nós somos o que pensamos.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'Liga pra ele(a)',
  'A maior de todas as torres começa no solo.',
  'Não compense na ira o que lhe falta na razão.',
  'Não há que ser forte. Há que ser flexível.',
  'Siga os bons e aprenda com eles.',
  'O bom-senso vai mais longe do que muito conhecimento.',
  'Quem quer colher rosas deve suportar os espinhos.',
  'São os nossos amigos que nos ensinam as mais valiosas lições.',
  'A juventude não é uma época da vida, é um estado de espírito.',



  //https://www.blogdocasamento.com.br/70-frases-para-seus-biscoitos-da-sorte/
  //https://cataas.com/#/integration
  
]

function sortearGatinho(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(gatinhos[sortearGatinho(-1, gatinhos.length)]);