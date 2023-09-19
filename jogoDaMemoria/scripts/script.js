const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";

starGame();

function starGame() {
  game.createCardsFromTechs();
  initializeCards(game.cards);
}

function initializeCards(cards) {
  let gameBoard = document.getElementById("gameBoard");
  gameBoard.innerHTML = "";

  game.cards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add(CARD);
    cardElement.dataset.icon = card.icon;

    createCardContent(card, cardElement);

    cardElement.addEventListener("click", flipCard);
    gameBoard.appendChild(cardElement);
  });
}

function createCardContent(card, cardElement) {
  createCardFace(FRONT, card, cardElement);
  createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element) {
  let cardElementFace = document.createElement("div");

  cardElementFace.classList.add(face);

  if (face === FRONT) {
    let iconElement = document.createElement("img");
    iconElement.classList.add(ICON);
    iconElement.src = "./assets/images/" + card.icon + ".png";
    cardElementFace.appendChild(iconElement);
  } else {
    cardElementFace.innerHTML = "&lt/&gt";
  }

  element.appendChild(cardElementFace);
}

function flipCard() {
  if (game.setCard(this.id)) {
    this.classList.add("flip");

    if (game.secondCard) {
      if (game.checkMatch()) {
        game.clearCards();
        if (game.checkGameOver()) {
          let gameOverLayer = document.getElementById("gameOver");
          gameOverLayer.style.display = "flex";
        }
      } else {
        setTimeout(() => {
          let firstCardView = document.getElementById(game.firstCard.id);
          let secondCardView = document.getElementById(game.secondCard.id);

          firstCardView.classList.remove("flip");
          secondCardView.classList.remove("flip");
          game.unflipCards();
        }, 1000);
      }
    }
  }
}

function flipAllCards() {
  let gameBoard = document.getElementById("gameBoard");
  const cards = Array.from(gameBoard.getElementsByClassName(CARD));

  // Adiciona a classe "flip" a todas as cartas para virá-las
  const cardsFlipadas = cards.filter(
    (card) => !card.classList.contains("flip")
  );

  cardsFlipadas.forEach((card) => card.classList.add("flip"));

  // Após 3 segundos, remove a classe "flip" para voltar as cartas ao estado anterior (de costas)
  setTimeout(() => {
    cardsFlipadas.forEach((card) => card.classList.remove("flip"));
  }, 1500);
}
function restart() {
  starGame();
  let gameOverLayer = document.getElementById("gameOver");
  gameOverLayer.style.display = "none";
}
