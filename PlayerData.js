import { login } from './Login.js'

class userData {
  userData;
  localStorageKey;

  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }

  loadFromStorage() {
  this.userData = JSON.parse(localStorage.getItem('userData'));

    if(!this.userData){
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
    localStorage.setItem('userData',JSON.stringify(this.userData));
  }
}

const playerData = new PlayerData('user');
playerData.loadFromStorage();
