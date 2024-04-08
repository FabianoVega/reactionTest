const mainMenu=document.querySelector(".main-screen");
const clickableArea=document.querySelector(".clickable-area");
const message = document.querySelector(".clickable-area .message");

let timer;
let greeDisplayed;
let timeNow;
let waitinfForStart;


const init = () => {
    greeDisplayed = false;
};

init();

const setGreenColor = () => {
    clickableArea.style.backgroundColor = "#32cd32";
    message.innerHTML = "Clique agora!!";
    message.style.color = "#111";
    greeDisplayed = true;
    timeNow = Date.now();
};

const startGame = () =>{
    clickableArea.style.backgroundColor = "#c1121f";
    message.innerHTML = "Espere a cor verde.";
    message.style.color = "#fff";


    let randomNumeber = Math.floor(Math.random() * 4000 + 3000);
    timer = setTimeout(setGreenColor,randomNumeber);

    waitinfForStart = false;

    console.log("Numero Random:",randomNumeber);

};

mainMenu.addEventListener("click", () => {
    mainMenu.classList.remove("active");
    startGame();
});

const displayReactionTime = (rt) =>{
    clickableArea.style.backgroundColor = "#faf0ca";
    message.innerHTML =`<div class='reaction-time'>${rt} ms</div>Clique para continuar.`;
    greeDisplayed = false;
    waitinfForStart = true;
}  

clickableArea.addEventListener("click", () => {
    if (greeDisplayed){
        let clickTime = Date.now();
        let reactionTime = clickTime - timeNow;
        console.log("Tempo Reação:", reactionTime);
        displayReactionTime(reactionTime);
        return;
    }

    if (waitinfForStart){
        startGame();
        return;
    }
});