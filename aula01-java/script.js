// =====================================================
// 4.1. Primeiro teste no console
// =====================================================
console.log("Olá, estudante de ADS!");
console.log("Minha primeira aplicação JavaScript.");

// =====================================================
// Laboratório 1: Cadastro simples de usuário
// =====================================================
const nome = "Ana Souza";
const email = "exemplo@email.com";
let idade = 19;
let usuarioAtivo = true;
const anoNascimento = 2007;
const idadeEstimada = 2026 - anoNascimento;

console.log("DADOS DO USUÁRIO");
console.log("Nome:", nome);
console.log("E-mail:", email);
console.log("Idade:", idade);
console.log("Usuário ativo:", usuarioAtivo);
console.log("Ano de nascimento:", anoNascimento);
console.log("Idade estimada em 2026:", idadeEstimada);

// =====================================================
// Exercícios de fixação
// =====================================================

// 1. Cadastro de estudante
const nomeEstudante = "Ana Souza";
const matricula = "2026001234";
const curso = "Análise e Desenvolvimento de Sistemas";
const periodo = 2;
const situacaoAcademica = "Matriculada";
console.log("1. CADASTRO DE ESTUDANTE");
console.log("Nome:", nomeEstudante);
console.log("Matrícula:", matricula);
console.log("Curso:", curso);
console.log("Período:", periodo);
console.log("Situação:", situacaoAcademica);

// 2. Compra
const preco = 150;
const quantidade = 2;
const valorTotal = preco * quantidade;
console.log("2. Valor total da compra: R$", valorTotal.toFixed(2));

// 3. Desconto
const precoProduto = 200;
const percentualDesconto = 15;
const valorDesconto = (precoProduto * percentualDesconto) / 100;
const precoFinal = precoProduto - valorDesconto;
console.log("3. Desconto: R$", valorDesconto.toFixed(2));
console.log("3. Preço final: R$", precoFinal.toFixed(2));

// 4. Comparação
const idadeTeste = 18;
console.log("4. idade > 18:", idadeTeste > 18);
console.log("4. idade < 18:", idadeTeste < 18);
console.log("4. idade === 18:", idadeTeste === 18);
console.log("4. idade >= 18:", idadeTeste >= 18);

// 5. Operadores lógicos
const idadePessoa = 22;
const possuiCadastro = true;
const contaAtiva = true;
console.log("5. Idade mínima e cadastro:", idadePessoa >= 18 && possuiCadastro);
console.log("5. Conta ativa ou cadastro:", contaAtiva || possuiCadastro);
console.log("5. Conta não ativa:", !contaAtiva);

// 6. Par ou ímpar
const numeroTeste = 7;
console.log("6. O número", numeroTeste, "é par?", numeroTeste % 2 === 0);

// =====================================================
// Laboratório 2: Calculadora de operações
// =====================================================
const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function () {
  const campo1 = document.getElementById("numero1");
  const campo2 = document.getElementById("numero2");
  const resultado = document.getElementById("resultado");

  if (campo1.value === "" || campo2.value === "") {
    resultado.textContent = "Preencha os dois números.";
    return;
  }

  const numero1 = Number(campo1.value);
  const numero2 = Number(campo2.value);
  const soma = numero1 + numero2;
  const subtracao = numero1 - numero2;
  const multiplicacao = numero1 * numero2;
  const divisao = numero2 === 0
    ? "Não é possível dividir por zero."
    : numero1 / numero2;

  resultado.innerHTML = `
    <p>Soma: ${soma}</p>
    <p>Subtração: ${subtracao}</p>
    <p>Multiplicação: ${multiplicacao}</p>
    <p>Divisão: ${divisao}</p>
  `;
});

// =====================================================
// Laboratório 3: Desafio - Calculadora de média
// =====================================================
const botaoMedia = document.getElementById("calcular");

botaoMedia.addEventListener("click", function () {
  const campoNota1 = document.getElementById("nota1");
  const campoNota2 = document.getElementById("nota2");
  const campoNota3 = document.getElementById("nota3");
  const resultadoMedia = document.getElementById("resultadoMedia");

  if (campoNota1.value === "" || campoNota2.value === "" || campoNota3.value === "") {
    resultadoMedia.innerHTML = '<p class="erro">Preencha as três notas.</p>';
    return;
  }

  const nota1 = Number(campoNota1.value);
  const nota2 = Number(campoNota2.value);
  const nota3 = Number(campoNota3.value);

  const notaInvalida =
    nota1 < 0 || nota1 > 10 ||
    nota2 < 0 || nota2 > 10 ||
    nota3 < 0 || nota3 > 10;

  if (notaInvalida) {
    resultadoMedia.innerHTML = '<p class="erro">As notas devem estar entre 0 e 10.</p>';
    return;
  }

  const media = (nota1 + nota2 + nota3) / 3;
  resultadoMedia.innerHTML = `<p>Média: ${Number(media.toFixed(1))}</p>`;
});
