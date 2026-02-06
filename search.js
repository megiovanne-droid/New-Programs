import {datas} from './Data.js'

const searchName = document.querySelector(".js-search-name");
const searchButton = document.querySelector(".js-search-button")
searchButton.addEventListener(("click"),()=>{
  search();
})

window.addEventListener(("keydown"),(event)=>{
  if(event.key === "Enter"){
    search();
  }
})

function search(){
  name = searchName.value;
  datas.forEach((search)=>{
    if(search.name === name){
      console.log(`${name} is a member!`);
    }else{
      console.log(`${name} Not Found!`);
    }
  })
}