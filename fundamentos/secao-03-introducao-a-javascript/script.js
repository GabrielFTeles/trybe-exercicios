// Exercício 1
// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:

// Adição (num1 + num2)
// Subtração (num1 - num2)
// Multiplicação (num1 * num2)
// Divisão (num1 / num2)
// Módulo (num1 % num2)

const num1 = 21;
const num2 = 161;
const num3 = 345;

const adicao        = num1 + num2;
const subtracao     = num1 - num2;
const multiplicacao = num1 * num2;
const divisao       = num1 / num2;
const modulo        = num1 % num2;

console.log(adicao, subtracao, multiplicacao, +divisao.toFixed(2), modulo);




// Exercício 2
// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

if (num1 > num2 ) {
  console.log(num1);
} else {
  console.log(num2);
}


// Exercício 3
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

if (num1 > num2 && num1 > num3) {
  console.log(num1);

} else if (num2 > num3) {
  console.log(num2);

} else {
  console.log(num3)
}



// 🚀 Exercício 4
// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

// 👀 Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

const ang1 = 60;
const ang2 = 60;
const ang3 = 60;

const totalAng = ang1 + ang2 + ang3;

if (totalAng === 180) {
  console.log(true);
} else {
  console.log(false);
}




// Exercício 5
// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// ⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Exemplo: Bispo -> Diagonais.

let peca = 'BiSpO';

peca = peca.toLowerCase();

switch(peca) {
  case 'bispo': console.log('Diagonais.'); break;
  default:      console.log('Peça não encontrada!'); break;
}



// 🚀 Exercício 6: Há um par entre nós
// 6 - Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
// Faça esse exercício utilizando somente um if.

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}



// Exercício 7
// Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).

// ⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.

// Para as faixas de impostos, use as seguintes referências:

// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%;
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
// IR
// Até R$ 1.903,98: isento de imposto de renda;
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// O cálculo deve ser o demonstrado a seguir
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

// Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

// R$ 2.670,00 - salário com INSS já deduzido;
// 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
// R$ 142,80 - parcela a ser deduzida do imposto de renda.
// Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

// Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.

// 👀 Dica: Que tal identificar as alíquotas com variáveis de nomes explicativos?

const salario = 3000;

let salarioBase = salario;

let INSS = 0;
let IR = 0;

// calculando INSS 

if (salario <= 1556.94) INSS = ((salario / 100) * 8);

if (salario >= 1556.95 && salario <= 2594.92) INSS = ((salario / 100) * 9);

if (salario >= 2594.93 && salario <= 5189.82) INSS = ((salario / 100) * 11);

if (salario > 5189.82) INSS = 570.88;

//calculando salario base

salarioBase = salario - INSS;

// calculando IR

if (salarioBase >= 1903.99 && salarioBase <= 2826.65) IR = (((salarioBase / 100) * 7.5) - 142.80);

if (salarioBase >= 2826.66 && salarioBase <= 3751.05) IR = (((salarioBase / 100) * 15) - 354.80);

if (salarioBase >= 3751.06 && salarioBase <= 4664.68) IR = (((salarioBase / 100) * 22.5) - 636.13);

if (salarioBase >= 4664.69) IR = (((salario / 100) * 27.5) - 869.36);

//calculando resultado

resultado = salarioBase - IR;


console.log(resultado.toFixed(2));


