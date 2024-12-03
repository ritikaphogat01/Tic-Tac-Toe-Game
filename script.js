let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;
let winnerfound = false;

const WinPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  true0 = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    console.log(" ");
    if (turnO) {
      // playerO
      box.innerText = "O";
      turnO = false;
    } else {
      // playerX
      box.innerText = "X";
      turnO = true;
    }

    box.disabeled = true;
    CheckWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (pos1val) => {
  msg.innerText = `Congratulations, Winner is  ${pos1val}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const CheckWinner = () => {
let winnerfound =false;


  for (let pattern of WinPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;


    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
   winnerfound= true;
   break;
      }
    
  }
  }

// // check for a draw:
if(!winnerfound){
  let allfilled = true;
  boxes.forEach((box) => {
if (box.innerText === "") allfilled = false;

  });
if (allfilled){
console.log("It's a draw! No one wins.");
msg.innerText = "It's a draw! No one wins."
msgcontainer.classList.remove("hide");
}
}
};

newgamebtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
