function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("12");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 5) {
    if(idade >= 16) {
      return "Fé para o Impossívl";
    } else {
      return "Turma da Mônica ";
    }
  } else {
    return "Por trás da minha janela";
  }
}