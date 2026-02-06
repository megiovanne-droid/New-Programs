import {datas, saveToStorage} from './Data.js'

const phoneNumber = document.getElementById("js-phone-number");
const emailAddress = document.getElementById("js-email-address");
const pass = document.getElementById("js-password");
const submitButton = document.querySelector(".js-submit-button");

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
  const email = emailAddress.value;
  const password = pass.value;
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
      passwprd: password,
      balance: 0
    })
    saveToStorage();
  }
  document.querySelector(".js-notification").innerHTML=`${phone} already registered. Pls provided another number.`;
  console.log(datas);
  }