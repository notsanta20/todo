import {cacheInput} from "./modules/cacheInput.js";

let arr = [];
const addBtn = document.querySelector(`.btn`);

addBtn.addEventListener(`click`, (event)=>{
    event.preventDefault();
    arr.push(cacheInput());
    console.log(arr);
});

