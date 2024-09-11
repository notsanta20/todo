import "./style.css";
import { addEvent,renderDOM,cacheInput,clearInput,validateForm,createProject,changeTitle,createProjectElements,currentPage,editTask } from "./modules/modules.js";


// cache DOM elements
const domElements = {
    heading: document.querySelector(`.content-heading`),
    homePage: document.querySelector(`.home`),
    priorityPage: document.querySelector(`.priority`),
    todayPage: document.querySelector(`.today`),
    tomorrowPage: document.querySelector(`.tomorrow`),
    finishedPage: document.querySelector(`.finished`),
    homeCount: document.querySelector(`.home-count`),
    priorityCount: document.querySelector(`.priority-count`),
    todayCount: document.querySelector(`.today-count`),
    tomorrowCount: document.querySelector(`.tomorrow-count`),
    finishedCount: document.querySelector(`.finished-count`),
    contentList: document.querySelector(`.content-list`),
    addTask: document.querySelector(`.add-task-container`),
    modal: document.querySelector(`.modal`),
    modalBtn: document.querySelector(`.btn`), 
    projectModal: document.querySelector(`.project-modal`),
    projectAddBtn: document.querySelector(`.project-add-btn`),
    projectModalBtn: document.querySelector(`.project-modal-btn`),
    projectInput: document.querySelector(`#project-input`),
    sideBar: document.querySelector(`.side-project-items`),
    options: document.querySelector(`#grp`),
    editModal: document.querySelector(`.edit-modal`),
}

// Store all the Tasks
const allItems = [
    {
        title: `Beta testing update`,
        dueDate: "2024-09-16",
        time: "10:00",
        priority: "1",
        project: `Dev`,
        finished: false
    },
    {
        title: `Buy passes`,
        dueDate: "2024-09-04",
        time: "22:00",
        priority: "0",
        project: `Life`,
        finished: false
    },
    {
        title: `Beta build update`,
        dueDate: "2024-08-15",
        time: "17:30",
        priority: "1",
        project: `Dev`,
        finished: true
    }
];

//Store Projects
const projects = [`Life`, `Dev`];

//Change task status
// document.addEventListener(`click`, (e)=>{
//     const target = e.target.closest(`.change-status`);
//     if(target){
//         const index = target.dataset.index;
//         const value = allItems[index].finished;
//         allItems[index].finished = value ? false : true;
//         updateCount(domElements, allItems);
//         renderDOM(currentPage,domElements,allItems);
//     }
// })

//Open Modal
domElements.addTask.addEventListener(`click`, ()=>{
    domElements.modal.showModal();
    validateForm(domElements);
});

//Add new Tasks
domElements.modalBtn.addEventListener(`click`, ()=>{
    const newTask = cacheInput();
    allItems.push(newTask);
    renderDOM(currentPage,domElements,allItems);
    clearInput();
    domElements.modal.close();
});

//Edit Task
document.addEventListener(`click`, (e)=>{
    const target = e.target.closest(`.edit-task`);
    if(target){

        editTask(target,allItems);
    }
})

//Open project modal
createProject(domElements,projects);

//Render projects
document.addEventListener(`click`, (e)=>{
    const target = e.target.closest(`.side-item`);
    if(target){
        const name = target.dataset.d;
        changeTitle(name,domElements);
        renderDOM(name,domElements,allItems);
    }
})

//Delete projects
document.addEventListener(`click`, (e)=>{
    const target = e.target.closest(`.project-icon`);
    if(target){
        const item = e.target.dataset.d;
        let index;
        projects.forEach((pro,i)=>{
            if(pro === item){
                index = i;
            }
        })
        projects.splice(index,1);
    }
    createProjectElements(domElements,projects);
})

addEvent(domElements.homePage, domElements, allItems);
addEvent(domElements.priorityPage, domElements, allItems);
addEvent(domElements.todayPage, domElements, allItems);
addEvent(domElements.tomorrowPage, domElements, allItems);
addEvent(domElements.finishedPage, domElements, allItems);

renderDOM(currentPage,domElements,allItems);
createProjectElements(domElements,projects);
