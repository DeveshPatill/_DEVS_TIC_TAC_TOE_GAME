let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

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
    count=0
    for(let pattern of winPatterns) {
        console.log("pattern 1")
        count+=pattern;
    }
    console.log(count)
}