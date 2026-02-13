let veiculo = {
  marca: "Toyota - Civic",
  modelo: "Subaru",
  ano: 2023,
  disponivel: true
};

console.log("Marca:", veiculo.marca);
console.log("Modelo:", veiculo.modelo);

console.log("Ano:", veiculo["ano"]);
console.log("Tá disponível?", veiculo["disponivel"]);

veiculo.cor = "Prata";
console.log("Cor:", veiculo.cor);
