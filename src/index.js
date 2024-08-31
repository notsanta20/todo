import {cacheInput, clearInput} from "./modules/cacheInput.js"
import {renderDOM, renderPage} from "./modules/renderDOM.js"
import {updateCount} from "./modules/countandFilter.js"


// cache DOM elements
const domElements = {
    addTask: document.querySelector(`.add-task`),
    modal: document.querySelector(`.modal`),
    modalBtn: document.querySelector(`.btn`),
    contentList: document.querySelector(`.content-list`),
    checkedList: document.querySelector(`.checked-list`),
    homeCount: document.querySelector(`.home-count`),
    priorityCount: document.querySelector(`.priority-count`),
    todayCount: document.querySelector(`.today-count`),
    tomorrowCount: document.querySelector(`.tomorrow-count`),
    homeBtn: document.querySelector(`.home`),
    priorityBtn: document.querySelector(`.priority`),
    todayBtn: document.querySelector(`.today`),
    tomorrowBtn: document.querySelector(`.tomorrow`),
    heading: document.querySelector(`.content-heading`)
}

// Store all the Tasks
const allItems = [
    {
        title: `Beta testing update`,
        dueDate: "2024-09-16",
        time: "10:00",
        priority: "1",
        grp: `beta`,
        finished: false
    },
    {
        title: `Buy passes`,
        dueDate: "2024-08-31",
        time: "22:00",
        priority: "0",
        grp: `life`,
        finished: false
    },
    {
        title: `Beta build update`,
        dueDate: "2024-08-15",
        time: "17:30",
        priority: "1",
        grp: `beta`,
        finished: true
    }
];

// store finished Tasks
const checkedItems = [

];

// activate DOM modal
domElements.addTask.addEventListener(`click`, ()=>{
   domElements.modal.showModal();
});

// create new tasks and render
let newItem = {};
domElements.modalBtn.addEventListener(`click`, ()=>{
    newItem = cacheInput();
    allItems.push(newItem);
    domElements.modal.close();
    clearInput();
    renderDOM(allItems,domElements);
    updateCount(domElements.homeCount, domElements.priorityCount, domElements.todayCount, domElements.tomorrowCount, allItems);
});

// change and render finished tasks.

// window.addEventListener("DOMContentLoaded", () => {
//     const checkBox = document.querySelectorAll(`.checkBoxer`);
//     checkBox.forEach((box) =>{
//         box.addEventListener(`change`, (event)=>{
//             if(box.checked){
//                 allItems[event.target.value].finished = true;
//             }
//             else{
//                 allItems[event.target.value].finished = false;
//             }
//             renderDOM(allItems,domElements);
//             updateCount(domElements.homeCount, domElements.priorityCount, domElements.   todayCount, domElements.tomorrowCount, allItems);
//         });
//     })
// });

function changeStatus(event){
    if(event.target.checked){
        allItems[event.target.value].finished = true;
    }
    else{
        allItems[event.target.value].finished = false;
    }
    renderDOM(allItems,domElements,changeStatus);
    updateCount(domElements.homeCount, domElements.priorityCount, domElements.todayCount, domElements.tomorrowCount, allItems);
}
//ChangeStatus function attached to window to be available globally
window.changeStatus = changeStatus;


//render pages
renderPage(domElements, domElements.homeBtn);
renderPage(domElements, domElements.priorityBtn);
renderPage(domElements, domElements.todayBtn);
renderPage(domElements, domElements.tomorrowBtn);


//render and update count on page start
renderDOM(allItems,domElements,changeStatus);
updateCount(domElements.homeCount, domElements.priorityCount, domElements.todayCount, domElements.tomorrowCount, allItems);