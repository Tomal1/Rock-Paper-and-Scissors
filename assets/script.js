
let startBtn = document.querySelector("#startBtn");
let intro = document.querySelector("#intro");
let secondScreen = document.querySelector("#secondScreen");
let buttons = document.querySelector(".buttons");
let computerAns = document.querySelector(".computerAns");


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


    rock.addEventListener("click", function(){
        computerAns.innerHTML = computerSelection();
        paper.style.visibility = "hidden";
        scissor.style.visibility = "hidden";

        if(computerAns.innerHTML === "rock"){
            console.log("draw try again");
        } else if (computerAns.innerHTML === "paper"){
             console.log("you lose haha");
        }else if (computerAns.innerHTML === "scissor"){
            console.log("you win..well done!");
        }
    })

    paper.addEventListener("click", function(){
        computerAns.innerHTML = computerSelection();
        rock.style.visibility = "hidden";
        scissor.style.visibility = "hidden";

        if(computerAns.innerHTML === "rock"){
            console.log("you win..well done!");
        } else if (computerAns.innerHTML === "paper"){
             console.log("draw try again");
        }else if (computerAns.innerHTML === "scissor"){
            console.log("you lose haha");
        }
    })

    scissor.addEventListener("click", function(){
        computerAns.innerHTML = computerSelection();
        rock.style.visibility = "hidden";
        paper.style.visibility = "hidden";

        if(computerAns.innerHTML === "rock"){
            console.log("you lose haha");
        } else if (computerAns.innerHTML === "paper"){
             console.log("you win..well done!");
        }else if (computerAns.innerHTML === "scissor"){
            console.log("draw try again");
        }
    })
}

function computerSelection(){
    let array  = ["rock", "paper", "scissor"];
    for(let i = 0; i < array.length; i++){ //shuffling the array with Fisher-Yates Shuffle Algorithm (please visit: https://www.youtube.com/watch?v=NfekYmg4vCE)
        return array[Math.floor(Math.random() * array.length)];
      }
      
}