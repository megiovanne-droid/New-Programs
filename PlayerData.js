class PlayerData {
  userData;
  localStorageKey;

  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }

  loadFromStorage() {
    this.userData = JSON.parse(localStorage.getItem(this.localStorageKey));
    if(!this.userData){
      this.userData = [{
      id: crypto.randomUUID(),
      phoneNumber: '09999999999',
      email: 'thedeveloper@gmail.com',
      password: '12345678',
      balance: 999999
      }];
    }
  }

  saveToStorage(){
    localStorage.setItem(this.localStorageKey,JSON.stringify(this.userData));
  }
}

export const playerData = new PlayerData('users');
