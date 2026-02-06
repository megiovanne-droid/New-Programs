export const datas=[]

export function saveToStorage(){
  localStorage.setItem('datas',JSON.stringify(datas));
}

export function getFromStorage(){
  datas = JSON.parse(localStorage.getItem('datas'));
  return datas;
}