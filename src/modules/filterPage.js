import {renderDOM} from "./renderDOM.js"

function filterItems(currentPage,dom,array){
    let filteredArray = [];

    const tempToday = new Date();
    const tempTomorrow = new Date(tempToday)
    tempTomorrow.setDate(tempToday.getDate() + 1);
    const day = tempToday.getDate();
    const nextDay = `0` + tempTomorrow.getDate();

    if(currentPage === `Priority`){
        array.forEach((item)=>{
            if(item.priority === `1`){
                filteredArray.push(item);
            }
        })
    }
    else if (currentPage === `Today`){
        array.forEach((item)=>{
            if(item.dueDate.slice(-2) == day){
                filteredArray.push(item);
            }
        });
    }
    else if (currentPage === `Tomorrow`){
        array.forEach((item)=>{
            if(item.dueDate.slice(-2) == nextDay.slice(-2)){
                filteredArray.push(item);
            }
        });
    }
    else{
        filteredArray = array;
    }
    renderDOM(filteredArray,dom);
}

function renderPage(page,dom,array){
    //clear container elements
    dom.contentList.innerHTML = ``;
    dom.checkedList.innerHTML = ``;

    //render page heading
    let currentPage;
    page.addEventListener(`click`, (event)=>{
        currentPage = event.target.dataset.d;
        dom.heading.textContent = currentPage;
        filterItems(currentPage,dom,array);
    })
}

export{renderPage}