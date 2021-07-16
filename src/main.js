const btn = document.querySelector('.btn');
const gatinho = document.querySelector('.gatinho');
const img = document.querySelector('.img');
const input = document.querySelector('.frase');

btn.addEventListener('click',getGatinho)

function getGatinho() {
  /**
   *  api utilizada :
   *  https://cataas.com/#/integration
   */
  fetch('frases.json')
  .then(data => data.json())
  .then(frases => {
    fetch(`https://cataas.com/cat/says/
    ${frases[sortearGatinho(-1, frases.length)].frase}?size=20&color=yellow`)
    .then(imagem=> img.src = imagem.url)
  })
} 

function sortearGatinho(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
