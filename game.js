let userScore = 0;                                             //1
let compScore = 0;                                             //2

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");                     //3
const  userScorePara = document.querySelector("#user-score");
const  compScorePara = document.querySelector("#comp-score");


const genCompChoice =() =>{                                      //6
    const options =["rock", "paper","scissors"];
   const ranIdx= Math.floor(Math.random()*3);
   return options[ranIdx];
};
const drawGame = () =>{                                         //8
    msg.innerText="Game Draw";
    msg.style.backgroundColor = "#081b31";
};

 const showWinner =(userWin, userChoice, compChoice) =>{
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You Win.  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else{
        compScore ++;
        compScorePara.innerText = compScore;
        msg.innerText=`You Lost. ${compChoice} beats Your  ${userChoice}`;
        msg.style.backgroundColor ="red";
    }

 }
const playGame =(userChoice) =>{                   //5
console.log("user choice=",userChoice);
const compChoice =genCompChoice();                //7
console.log("comp choice =",compChoice);
if(userChoice===compChoice) {
    //draw game
    drawGame();
} else{
    let userWin = true;
    if(userChoice=== "rock"){ 
        //scissors.paper
      userWin =  compChoice ==="paper"? false: true;
    } else if ( userChoice ==="paper"){                        //8
        //rock.scissors
       userWin = compChoice ==="scissors" ? false: true;
    } else {(userChoice ==="scissors")
    userWin =  compChoice === "rock" ? false :true ;

    showWinner(userWin ,userChoice,compChoice);
    
    }
   }
};

choices.forEach((choice) =>{                         //4
    choice.addEventListener("click",() =>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
});

});