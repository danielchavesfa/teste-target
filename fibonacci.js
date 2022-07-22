var entradaUsuario = 5;
var verificarNumero = false;
var n0 = 0, n1 = 1

for (let i = 0; i < entradaUsuario; i++) { 
  var total = n0+n1
  console.log(`${n0} + ${n1} = ${total}`);
  n0 = n1
  n1 = total
  if (entradaUsuario === n1) {
    verificarNumero = true;
  };

};

if (verificarNumero) {
  console.log(`${entradaUsuario} Pertence a Fibonacci`);
} else {
  console.log(`${entradaUsuario} Não pertence a Fibonacci`);
};