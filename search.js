import {datas} from './Data.js'

const searchName = document.querySelector(".js-search-name");
const searchButton = document.querySelector(".js-search-button")

searchButton.addEventListener("click",()=>{
  search();
})

window.addEventListener("keydown",(event)=>{
  if(event.key === "Enter"){
    search();
  }
})

function search(){
  const name = searchName.value;
  let matchSearch;

  datas.forEach((search)=>{
    if(search.name === name){
      matchSearch = name;
    }
  })
  if(matchSearch){
      console.log(`${name} is a member.`)
  }else{
    datas.push({
      name: name,
      address:'Bitoon, Dumanjug, Cebu',
      age: 39
    }
    )
  }
  console.log(datas);
}