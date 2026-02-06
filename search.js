import {datas} from './Data.js'

const name = document.querySelector("js-search-name").value;
const searchName = document.querySelector(".js-search-button")
searchName.addEventListener(("click"),()=>{
}

function search(){
  members.forEach((search)=>{
    if(search.name === searchName){
      name = searchName;
      console.log("{name} is a member!")
    }else{
      console.log('Name Not Found!')
    }
  })
}