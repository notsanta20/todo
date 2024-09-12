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
const storageObj = {
    allItems: [
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
    ],
    projects: [`Life`, `Dev`]
}

//Open Modal
domElements.addTask.addEventListener(`click`, ()=>{
    domElements.modal.showModal();
    validateForm(domElements);
});

//Add new Tasks
domElements.modalBtn.addEventListener(`click`, ()=>{
    const newTask = cacheInput();
    storageObj.allItems.push(newTask);
    renderDOM(currentPage,domElements,storageObj.allItems);
    clearInput();
    domElements.modal.close();
    storeItems();
});

//Open project modal
createProject(domElements,storageObj.projects);

//Render projects
document.addEventListener(`click`, (e)=>{
    const target = e.target.closest(`.side-item-label`);
    if(target){
        const name = target.parentElement.dataset.d;
        changeTitle(name,domElements);
        renderDOM(name,domElements,storageObj.allItems);
    }
})

//Delete projects
document.addEventListener(`click`, (e)=>{
    const target = e.target.closest(`.project-icon`);
    if(target){
        const item = e.target.dataset.d;
        let index;
        storageObj.projects.forEach((pro,i)=>{
            if(pro === item){
                index = i;
            }
        })
        storageObj.projects.splice(index,1);
        createProjectElements(domElements,storageObj.projects);
    }
    
})

//Store Items locally
function storeItems(){   
    localStorage.setItem(`obj`, JSON.stringify(storageObj));
}

//Get stored Items
(()=>{
    let tempObj = JSON.parse(localStorage.getItem(`obj`));
    if(tempObj !== null){
        storageObj.allItems = tempObj.allItems;
        storageObj.projects = tempObj.projects;

    }
}
)();

addEvent(domElements.homePage, domElements, storageObj.allItems);
addEvent(domElements.priorityPage, domElements, storageObj.allItems);
addEvent(domElements.todayPage, domElements, storageObj.allItems);
addEvent(domElements.tomorrowPage, domElements, storageObj.allItems);
addEvent(domElements.finishedPage, domElements, storageObj.allItems);

renderDOM(currentPage,domElements,storageObj.allItems);
createProjectElements(domElements,storageObj.projects);

export{storeItems};
