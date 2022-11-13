
let startBtn = document.querySelector("#startBtn");
let intro = document.querySelector("#intro");
let buttons = document.querySelector(".buttons");
let computerAns = document.querySelector(".computerAns");
let outcome = document.querySelector(".outcome");
let secondScreen = document.querySelector("#secondScreen");

startBtn.addEventListener("click", function(){
    intro.style.visibility = "hidden";
    makeBtn();
})

function makeBtn(){
    let rock = document.createElement("img");
    rock.setAttribute("src", "./assets/images/rock.jpg");
    buttons.appendChild(rock);

    let paper = document.createElement("img");
    paper.setAttribute("src", "./assets/images/paper.jpg");
    buttons.appendChild(paper);

    let scissor = document.createElement("img");
    scissor.setAttribute("src", "./assets/images/scissor.jpg");
    buttons.appendChild(scissor);

    rock.addEventListener("click", function(){

        let myselection = "rock";
        let myObj = {
            myselection,
        }

        let stringObj = JSON.stringify(myObj);
        localStorage.setItem(myselection, stringObj);

        let unString = JSON.parse(stringObj);
        conditions(unString);
    })

    paper.addEventListener("click", function(){     
        let myselection = "paper";
        let myObj = {
            myselection,
        }

        let stringObj = JSON.stringify(myObj);
        localStorage.setItem(myselection, stringObj);

        let unString = JSON.parse(stringObj);
        conditions(unString);
    })

    scissor.addEventListener("click", function(){
        let myselection = "scissor";
        let myObj = {
            myselection,
        }

        let stringObj = JSON.stringify(myObj);
        localStorage.setItem(myselection, stringObj);

        let unString = JSON.parse(stringObj);
        conditions(unString);
    })
}

function conditions(unString){
    computerAns.innerHTML = computerSelection()

    if (computerAns.innerHTML === unString.myselection){
        outcome.innerHTML ="draw try again";
    }else if (computerAns.innerHTML === "rock" && unString.myselection === "paper"){
        outcome.innerHTML ="you win..well done!";
    }else if (computerAns.innerHTML === "rock" && unString.myselection === "scissor"){
        outcome.innerHTML ="you lose haha";
    }else if (computerAns.innerHTML === "paper" && unString.myselection === "scissor"){
        outcome.innerHTML ="you win..well done!";
    }else if (computerAns.innerHTML === "paper" && unString.myselection === "rock"){
        outcome.innerHTML ="you lose haha";
    }else if (computerAns.innerHTML === "scissor" && unString.myselection === "rock"){
        outcome.innerHTML ="you win..well done!";
    }else if (computerAns.innerHTML === "scissor" && unString.myselection === "paper"){
        outcome.innerHTML ="you lose haha";
    }
}

function computerSelection(){
    let array  = ["rock", "paper", "scissor"];
    for(let i = 0; i < array.length; i++){ //shuffling the array with Fisher-Yates Shuffle Algorithm (please visit: https://www.youtube.com/watch?v=NfekYmg4vCE)
        return array[Math.floor(Math.random() * array.length)];
      }
      
}