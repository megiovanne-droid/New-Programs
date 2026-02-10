import "./GameData.js"
import "./PlayerData.js"

let gameResult ='';

function tossCoin(){
  const result = Math.random();
  if(result >= 0.5){
    return "heads";
  }else{
    return "tails";
  }
}

function playGame(){
  /*
  const currentGame = gameLog.playResults.length -1;

  if (gameLog[currentGame].result.coinOne === "heads" && gameLog[currentGame].result.coinTwo === "heads" && gameLog[currentGame].result.coinThree === "heads"){
    gameResult = "Win";
  }else if(gameLog[currentGame].result.coinOne === "tails" && gameLog[currentGame].result.coinTwo === "tails" && gameLog[currentGame].result.coinThree === "tails"){
    gameResult = "Loss";
  }
  else{
    gameResult = "Draw";
  }

  gameLog.push(
    {
    playId: '',
    playResult: gameResult,
    balanceMoney: 0
    }
  )*/

  document.querySelector(".js-display-result").innerHTML = gameResult;
}

const playButton = document.querySelector(".js-play-button");
  playButton.addEventListener("click", ()=>{
    playGame();
    console.log(playerData);
  }
)


