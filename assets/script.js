
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
    rock.classList.add("btnDecoration");
    buttons.appendChild(rock);

    let paper = document.createElement("img");
    paper.setAttribute("src", "./assets/images/paper.jpg");
    paper.classList.add("btnDecoration");
    buttons.appendChild(paper);

    let scissor = document.createElement("img");
    scissor.setAttribute("src", "./assets/images/scissor.jpg");
    scissor.classList.add("btnDecoration");
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

    let rockC = document.createElement("img");
    rockC.setAttribute("src", "./assets/images/rock.jpg");
    rockC.classList.add("comBtnDecoration");
    

    let paperC = document.createElement("img");
    paperC.setAttribute("src", "./assets/images/paper.jpg");
    paperC.classList.add("comBtnDecoration");
    

    let scissorC = document.createElement("img");
    scissorC.setAttribute("src", "./assets/images/scissor.jpg");
    scissorC.classList.add("comBtnDecoration");
    








    if (computerAns.innerHTML === unString.myselection){
        outcome.innerHTML ="draw try again";
    }else if (computerAns.innerHTML === "rock" && unString.myselection === "paper"){
        outcome.innerHTML ="you win..well done!";
        computerAns.appendChild(rockC);
    }else if (computerAns.innerHTML === "rock" && unString.myselection === "scissor"){
        outcome.innerHTML ="you lose haha";
        computerAns.appendChild(rockC);
    }else if (computerAns.innerHTML === "paper" && unString.myselection === "scissor"){
        outcome.innerHTML ="you win..well done!";
        computerAns.appendChild(paperC);
    }else if (computerAns.innerHTML === "paper" && unString.myselection === "rock"){
        outcome.innerHTML ="you lose haha";
        computerAns.appendChild(paperC);
    }else if (computerAns.innerHTML === "scissor" && unString.myselection === "rock"){
        outcome.innerHTML ="you win..well done!";
        computerAns.appendChild(scissorC);
    }else if (computerAns.innerHTML === "scissor" && unString.myselection === "paper"){
        outcome.innerHTML ="you lose haha";
        computerAns.appendChild(scissorC);
    }
}

function computerSelection(){
    let array  = ["rock", "paper", "scissor"];
    for(let i = 0; i < array.length; i++){ //shuffling the array with Fisher-Yates Shuffle Algorithm (please visit: https://www.youtube.com/watch?v=NfekYmg4vCE)
        return array[Math.floor(Math.random() * array.length)];
      }
      
}