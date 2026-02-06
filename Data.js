export let datas=JSON.parse(localStorage.getItem('datas'));

if(!datas){
  datas = [{
  id: crypto.randomUUID(),
  phoneNumber: '09999999999',
  email: 'thedeveloper@gmail.com',
  balance: 999
}];
}

export function saveToStorage(){
  localStorage.setItem('datas',JSON.stringify(datas));
}