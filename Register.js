import {datas, saveToStorage} from './Data.js'

const phoneNumber = document.getElementById("js-phone-number");
const emailAddress = document.getElementById("js-email-address")
const submitButton = document.querySelector(".js-submit-button")

submitButton.addEventListener("click",()=>{
  register();
})

window.addEventListener("keydown",(event)=>{
  if(event.key === "Enter"){
    register();
  }
})

function register(){
  const phone = phoneNumber.value;
  const email =emailAddress.value;
  let matchUser;

  datas.forEach((user)=>{
    if(user.phoneNumber === phone){
      matchUser = user;
    }
  })
  if(matchUser){
      console.log(`${phone} is already registered.`)
  }else{
    datas.push({
      id: crypto.randomUUID(),
      phoneNumber: phone,
      email: email,
      balance: 0
    })
  }
  saveToStorage();
  console.log(datas);
}