import { playerData } from './PlayerData.js'

class GameData{
  gameLog;
  localStorageKey;

  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage(); 
  }

  saveToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.gameLog))
  }

  loadFromStorage() {
    this.gameLog = JSON.parse(localStorage.getItem(this.localStorageKey));
    if(!this.gameLog){
      this.gameLog = [{
        playId: playerData.id,
        playLogs: [{
          result:'',
          balanceMoney: playerData.balance
        }]
      }]
    }
  }
}

const gameLog = new GameData('Hantak');
gameLog.loadFromStorage();
console.log(gameLog);
