let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; //palyer x,player o

winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame=()=>{
    turnO = true;

}





boxes.forEach((boxx)=>{
    boxx.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turnO === true){
            boxx.innerText="O";
            turnO = false;  
        }else{
            boxx.innerText="X";
            turnO = true; 
        }
        boxx.disabled = true;

        checkWinner();

    });
});

const checkWinner = ()=>{
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner=(Winner)=>{
    msg.innerText=`Congragulations. winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

