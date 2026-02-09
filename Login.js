import {datas} from './Data.js'

const loginNumber = document.getElementById("js-login-number");
const loginPassword = document.getElementById("js-login-password");
const loginButton = document.querySelector(".js-submit-login");

loginButton.addEventListener("click",()=>{
  login();
})

function login(){
  const number = loginNumber.value;
  const password = loginPassword.value;
  let matchUser;
  let matchPassword;


  datas.forEach((user)=>{
    if(user.phoneNumber === number){
      matchUser = user;
      if(matchUser.password === password){
        matchPassword = matchUser.password;
        alert("Play Game!");
      }
    }
    })
  if(!matchUser){
    console.log("not registered");
  }else{
    console.log("Incorrect Password!");
  }
  //console.log(number);
  //console.log(password);
  //console.log(datas);
}