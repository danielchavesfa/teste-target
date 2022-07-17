const dados = require('./dados.json');
const diasUteis = dados.filter((adcDia) => {
  if (adcDia.valor > 0) {
    return adcDia;
  }

});

const quantidadeDiasUteis = diasUteis.length;
const totalFaturamento = diasUteis.reduce((acc, diaFaturamento) => {
  return diaFaturamento.valor+acc
}, 0);

const mediaMes = totalFaturamento/quantidadeDiasUteis;

let maiorValor = 0;

diasUteis.forEach((diaFaturamento) => {
  if (diaFaturamento.valor > maiorValor) {
    maiorValor = diaFaturamento.valor
  }
});

let menorValor = maiorValor;

diasUteis.forEach((diaFaturamento) => {
  if (diaFaturamento.valor < menorValor) {
    menorValor = diaFaturamento.valor
  }
});

const diasAcimaDaMedia = diasUteis.filter((diaFaturamento) => {
  if (diaFaturamento.valor > mediaMes) {
    return diaFaturamento;
  }
});

console.log(`Maior valor ${maiorValor}`);
console.log(`Menor valor ${menorValor}`);
console.log(`Acima da média ${diasAcimaDaMedia.length}`)