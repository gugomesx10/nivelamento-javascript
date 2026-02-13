function calcularArea(base, altura) {
  return base * altura / 2;
}

const calcularAreaArrow = (base, altura) => base * altura / 2;

function cumprimentar(nome, periodo) {
  return "Boa " + periodo + ", " + nome + "!";
}

const cumprimentarArrow = (nome, periodo) => "Boa " + periodo + ", " + nome + "!";

console.log(calcularArea(10, 5));
console.log(calcularAreaArrow(10, 5));

console.log(cumprimentar("Gustavo", "tarde"));
console.log(cumprimentarArrow("Giselen", "noite"));
