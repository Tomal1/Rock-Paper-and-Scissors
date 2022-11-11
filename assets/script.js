
let startBtn = document.querySelector("#startBtn");
let intro = document.querySelector("#intro");
let secondScreen = document.querySelector("#secondScreen");
let buttons = document.querySelector(".buttons");

startBtn.addEventListener("click", function(){
    intro.style.visibility = "hidden";
    second();
})

function second(){
    let rock = document.createElement("button");
    rock.innerHTML = "ROCK";
    buttons.appendChild(rock);

    let paper = document.createElement("button");
    paper.innerHTML = "PAPER";
    buttons.appendChild(paper);

    let scissor = document.createElement("button");
    scissor.innerHTML = "SCISSOR";
    buttons.appendChild(scissor);
}