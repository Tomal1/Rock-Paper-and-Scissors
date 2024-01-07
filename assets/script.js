let startBtn = document.querySelector(".startBtn");
let intro = document.querySelector("#introCon");
let buttons = document.querySelector(".buttons");
let computerAns = document.querySelector(".computerAns");
let outcome = document.querySelector(".outcome");
let secondScreen = document.querySelector("#secondCon");

const backToStart = () => {
  outcome.innerHTML = "";
  computerAns.innerHTML = "";
  secondScreen.style.display = "none";
  start();
};

const start = () => {
  intro.style.display = "block";
  startBtn.addEventListener("click", () => {
    intro.style.display = "none";
    secondScreen.style.display = "block";
    makeBtn();
  });
};
start();

const clear = () => {
  outcome.innerHTML = "";
  computerAns.innerHTML = "";
};

const makeBtn = () => {
  buttons.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    let rock = document.createElement("img");
    let paper = document.createElement("img");
    let scissor = document.createElement("img");

    const btnArray = [rock, paper, scissor];
    const imgArray = [
      "./assets/images/rock.jpg",
      "./assets/images/paper.jpg",
      "./assets/images/scissor.jpg",
    ];

    btnArray[i].setAttribute("src", imgArray[i]);
    btnArray[i].classList.add("btnDecoration");
    buttons.appendChild(btnArray[i]);

    btnArray[i].addEventListener("click", () => {
      if (btnArray[i].src === "http://127.0.0.1:5501/assets/images/rock.jpg") {
        conditions("rock");
      } else if (
        btnArray[i].src === "http://127.0.0.1:5501/assets/images/paper.jpg"
      ) {
        conditions("paper");
      } else if (
        btnArray[i].src === "http://127.0.0.1:5501/assets/images/scissor.jpg"
      ) {
        conditions("scissor");
      }
    });
  }
};

const conditions = (arg) => {
  let c = computerSelection();
  let m = arg;
  console.log(`my selection is ${m}`);
  console.log(`computer selection is ${c}`);

  let compImg = [
    "./assets/images/rock-computer.png",
    "./assets/images/paper-computer.png",
    "./assets/images/scissors-computer.png",
  ];

  let rockC = document.createElement("img");
  let paperC = document.createElement("img");
  let scissorC = document.createElement("img");

  const computerSelectionArray = [rockC, paperC, scissorC];

  const drawArray = [
    c === "rock" && m === "rock",
    c === "paper" && m === "paper",
    c === "scissor" && m === "scissor",
  ];
  const winArray = [
    c === "scissor" && m === "rock",
    c === "rock" && m === "paper",
    c === "paper" && m === "scissor",
  ];
  const loseArray = [
    c === "rock" && m === "scissor",
    c === "paper" && m === "rock",
    c === "scissor" && m === "paper",
  ];

  for (let i = 0; i < 3; i++) {
    computerSelectionArray[i].setAttribute("src", compImg[i]);
    computerSelectionArray[i].classList.add("comBtnDecoration");

    if (drawArray[i]) {
      outcome.innerHTML = "draw try again";
      computerAns.appendChild(computerSelectionArray[i]);
      setTimeout(clear, 2000);
    }

    if (winArray[i]) {
      outcome.innerHTML = "you win...well done!";
      if (winArray[i] === winArray[0]) {
        computerAns.appendChild(computerSelectionArray[2]);
      } else if (winArray[i] === winArray[1]) {
        computerAns.appendChild(computerSelectionArray[0]);
      } else if (winArray[i] === winArray[2]) {
        computerAns.appendChild(computerSelectionArray[1]);
      }
      setTimeout(backToStart, 2000);
    }

    if (loseArray[i]) {
      outcome.innerHTML = "you lose haha";
      if (loseArray[i] === loseArray[0]) {
        computerAns.appendChild(computerSelectionArray[0]);
      } else if (loseArray[i] === loseArray[1]) {
        computerAns.appendChild(computerSelectionArray[1]);
      } else if (loseArray[i] === loseArray[2]) {
        computerAns.appendChild(computerSelectionArray[2]);
      }
      setTimeout(backToStart, 2000);
    }
  }
};

const computerSelection = () => {
  let array = ["rock", "paper", "scissor"];
  for (let i = 0; i < 3; i++) {
    let random = array[Math.floor(Math.random() * array.length)];
    return random;
  }
};
