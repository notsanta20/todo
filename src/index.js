import {cacheInput, clearInput} from "./modules/cacheInput.js"
import {renderDOM} from "./modules/renderDOM.js"
import {renderPage} from "./modules/filterPage.js"
import {updateCount} from "./modules/updateCount.js"
import {validateForm} from "./modules/formValidation.js"
import {createProject,createProjectElements} from "./modules/projects.js"


// cache DOM elements
const domElements = {
    heading: document.querySelector(`.content-heading`),
    addTask: document.querySelector(`.add-task`),
    modal: document.querySelector(`.modal`),
    modalBtn: document.querySelector(`.btn`),
    contentList: document.querySelector(`.content-list`),
    checkedList: document.querySelector(`.checked-list`),
    homeCount: document.querySelector(`.home-count`),
    priorityCount: document.querySelector(`.priority-count`),
    todayCount: document.querySelector(`.today-count`),
    tomorrowCount: document.querySelector(`.tomorrow-count`),
    finishedCount: document.querySelector(`.finished-count`),
    homePage: document.querySelector(`.home`),
    priorityPage: document.querySelector(`.priority`),
    todayPage: document.querySelector(`.today`),
    tomorrowPage: document.querySelector(`.tomorrow`),
    finishedPage: document.querySelector(`.finished`),
    projectModal: document.querySelector(`.project-modal`),
    projectAddBtn: document.querySelector(`.project-add-btn`),
    projectModalBtn: document.querySelector(`.project-modal-btn`),
    projectInput: document.querySelector(`#project-input`),
    sideBar: document.querySelector(`.side-project`),
    options: document.querySelector(`#grp`)
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

//Store Projects
const projects = [`Ideas`, `Dev`];


// activate DOM modal and Validate form
domElements.addTask.addEventListener(`click`, ()=>{
   domElements.modal.showModal();
   validateForm(domElements);
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
    renderDOM(allItems,domElements);
}
//ChangeStatus function attached to window to be available globally
window.changeStatus = changeStatus;


//render pages
renderPage(domElements.homePage, domElements, allItems);
renderPage(domElements.priorityPage, domElements, allItems);
renderPage(domElements.todayPage, domElements, allItems);
renderPage(domElements.tomorrowPage, domElements, allItems);



//Create and Delete projects
createProject(domElements, projects);

//Render projects
function renderProjects(event){
    //clear container elements
    domElements.contentList.innerHTML = ``;
    domElements.checkedList.innerHTML = ``;

    //render page heading
    let currentPage = event.target.dataset.d;
    domElements.heading.textContent = currentPage;

}
//Attached to window to be available globally
window.renderProjects = renderProjects;

//Delete Projects
function deleteProject(event){
    domElements.sideBar.removeChild(event.target.parentElement);
}
//Attached to window to be available globally
window.deleteProject = deleteProject;


//render and update count on page start
projects.forEach((item)=>{
    createProjectElements(domElements, item);
})
renderDOM(allItems,domElements);
updateCount(domElements, allItems);