// Parte A - Escopo
let app = "MinhaApp";

function testarEscopo() {
  let versao = "1.0";
  console.log(app);
  console.log(versao);
}

testarEscopo();
console.log(app);
// console.log(versao); // Erro: a variável versao tem escopo local e só existe dentro da função testarEscopo

// Parte B — Callback
function executarTarefa(nomeTarefa, callback) {
  console.log("Iniciando: " + nomeTarefa);
  callback();
}

executarTarefa("Backup", () => console.log("Tarefa concluída!"));

// Parte C — Async
async function buscarPerfil() {
  return "Perfil carregado: Usuário Padrão";
}

buscarPerfil().then(console.log);
