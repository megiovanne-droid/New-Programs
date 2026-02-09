const gameLog = [];
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
  gameLog.push(
    {
      playId: crypto.randomUUID(),
      result: {
        coinOne: tossCoin(),
        coinTwo: tossCoin(),
        coinThree: tossCoin()
      }
    }
  )
  const currentGame = gameLog.length -1;

  if (gameLog[currentGame].result.coinOne === "heads" && gameLog[currentGame].result.coinTwo === "heads" && gameLog[currentGame].result.coinThree === "heads"){
    gameResult = "You Win!";
  }else if(gameLog[currentGame].result.coinOne === "tails" && gameLog[currentGame].result.coinTwo === "tails" && gameLog[currentGame].result.coinThree === "tails"){
    gameResult = "You Loss!";
  }
  else{
    gameResult = "Game Draw!";
  }

  document.querySelector(".js-display-result").innerHTML = gameResult;
}

const playButton = document.querySelector(".js-play-button");
  playButton.addEventListener("click", ()=>{
    playGame();
  })


