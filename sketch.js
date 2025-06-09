let arvores = [];
let luzesAcesas = false;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(135, 206, 235); // Céu azul

  desenharCampo();
  desenharCidade();
  desenharSol();

  // Árvores plantadas
  for (let arvore of arvores) {
    desenharArvore(arvore.x, arvore.y);
  }

  // Divisão central
  stroke(0);
  strokeWeight(2);
  line(width / 2, 0, width / 2, height);
}

function desenharCampo() {
  noStroke();
  fill(85, 160, 85);
  rect(0, 250, width / 2, 150);

  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("🌾 Campo", width / 4, 240);
}

function desenharCidade() {
  noStroke();
  fill(200);
  rect(width / 2, 200, 80, 200);
  rect(width / 2 + 100, 180, 100, 220);
  rect(width / 2 + 220, 210, 60, 190);

  // Janelas
  for (let x = width / 2 + 10; x < width; x += 30) {
    for (let y = 210; y < 380; y += 30) {
      if (luzesAcesas) {
        fill(255, 255, 100); // luz amarela
      } else {
        fill(50); // apagado
      }
      rect(x, y, 15, 15);
    }
  }

  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("🏙️ Cidade", width / 2 + 130, 240);
}

function desenharArvore(x, y) {
  fill(139, 69, 19);
  rect(x - 5, y, 10, 30); // tronco
  fill(34, 139, 34);
  ellipse(x, y, 30, 30);  // copa
}

function desenharSol() {
  fill(255, 204, 0);
  noStroke();
  ellipse(100, 80, 70, 70);
}

// Clique: planta no campo ou acende luzes na cidade
function mousePressed() {
  if (mouseX < width / 2) {
    // Lado do campo — planta uma árvore
    arvores.push({ x: mouseX, y: mouseY });
  } else {
    // Lado da cidade — alterna luzes
    luzesAcesas = !luzesAcesas;
  }
}
