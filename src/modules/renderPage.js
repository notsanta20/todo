import {renderDOM} from "./renderDOM.js"

function filterItems(currentPage,dom,array){
    let filteredArray = [];
    if(currentPage === `Priority`){
        array.forEach((item)=>{
            if(item.priority === `1`){
                filteredArray.push(item);
            }
        })
    }
    else if (currentPage === `Today`){
        const fullDate = new Date;
        const day = fullDate.getDate();
        array.forEach((item)=>{
            if(item.dueDate.slice(-2) == day){
                filteredArray.push(item);
            }
        });
    }
    else if (currentPage === `Tomorrow`){
        const fullDate = new Date;
        const day = fullDate.getDate();
        array.forEach((item)=>{
            if(item.dueDate.slice(-2) == day + 1){
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