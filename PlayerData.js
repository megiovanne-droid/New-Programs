class PlayerData {
  playerData;
  localStorageKey;

  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }

  loadFromStorage() {
  this.data = JSON.parse(localStorage.getItem('playerData'));

    if(!this.playerData){
      playerData = [{
      id: crypto.randomUUID(),
      phoneNumber: '09999999999',
      email: 'thedeveloper@gmail.com',
      password: '12345678',
      balance: 999999
      }];
    }
  }

  saveToStorage(){
    localStorage.setItem('playerData',JSON.stringify(playerData));
  }
}

const playerData = new PlayerData(user);
playerData.loadFromStorage();
