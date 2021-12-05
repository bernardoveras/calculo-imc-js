const form = document.querySelector("#form");

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResult("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResult("Altura inválida", false);
    return;
  }

  const imc = calculateImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  setResult(`Seu IMC é ${imc} (${nivelImc})`, true);
});

function calculateImc(peso, altura) {
  return (peso / (altura ** 2)).toFixed(2);
}

function getNivelImc(imc) {
  const nivel = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3',
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}


function createParagraph() {
  return document.createElement('p');
}

function setResult(message, isValid) {
  const result = document.querySelector('#result');
  result.innerHTML = '';

  const paragraph = createParagraph();

  if (isValid) {
    paragraph.classList.add('paragraph-result');
  } else {
    paragraph.classList.add('bad');
  }

  paragraph.innerHTML = message;
  result.appendChild(paragraph);
}