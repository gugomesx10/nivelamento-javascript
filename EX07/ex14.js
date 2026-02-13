// Parte A - Escopo
let app = "MinhaApp";

function testarEscopo() {
  let versao = "1.0";
  console.log(app);
  console.log(versao);
}

testarEscopo();
console.log(app);
// console.log(versao); // Dá erro porque versao só existe dentro da função

// Parte B — Callback
function executarTarefa(nomeTarefa, callback) {
  console.log("Iniciando: " + nomeTarefa);
  callback();
}

executarTarefa("Backup", () => console.log("Pronto!"));

// Parte C — Async
async function buscarPerfil() {
  return "Perfil carregado: Usuário Padrão";
}

buscarPerfil().then(console.log);
