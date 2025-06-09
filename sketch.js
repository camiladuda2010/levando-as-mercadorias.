let xCarrinho = 50;

function setup() {

  createCanvas(800, 400);

}

function draw() {

  background(220);

  // Campo (lado esquerdo)

  noStroke();

  fill(100, 200, 100);

  rect(0, 0, width / 2, height);

  fill(34, 139, 34); // árvore

  rect(100, 250, 20, 60);

  ellipse(110, 240, 60);

  // Cidade (lado direito)

  fill(180);

  rect(width / 2, 0, width / 2, height);

  fill(80); // prédios

  rect(500, 200, 50, 180);

  rect(600, 150, 80, 230);

  // Divisão entre campo e cidade

  stroke(0);

  line(width / 2, 0, width / 2, height);

  // Carrinho

  drawCarrinho(xCarrinho, 330);

  // Movimento do carrinho

  if (xCarrinho < width - 100) {

    xCarrinho += 2;

  }

}

function drawCarrinho(x, y) {

  fill(255, 0, 0);

  rect(x, y, 80, 30); // corpo do carrinho

  fill(0);

  ellipse(x + 15, y + 30, 20);

  ellipse(x + 65, y + 30, 20);

  fill(255);

  textSize(12);

  text("Mercadorias", x + 40, y - 10);

}
//// Referência: Documentação oficial do p5.js - https://p5js.org/reference/
// Referência: ChatGPT (OpenAI) - auxílio na lógica e montagem do projeto
// Referência: Canal The Coding Train (Daniel Shiffman) no YouTube - https://www.youtube.com/c/TheCodingTrain
