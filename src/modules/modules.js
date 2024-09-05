let currentPage = `Home`;

function changeTitle(event,dom){
    //render page heading
    let currentPage = typeof(event) === `string` ? event : event.target.dataset.d;
    dom.heading.textContent = currentPage;
}

function filterItems(page,array){
    let filteredArray = [];
    
    const tempToday = new Date();
    const tempTomorrow = new Date(tempToday)
    tempTomorrow.setDate(tempToday.getDate() + 1);
    const day = tempToday.getDate();
    const nextDay = `0` + tempTomorrow.getDate();

    if(page === `Priority`){
        array.forEach((item)=>{
            if(!item.finished){
                if(item.priority === `1`){
                    filteredArray.push(item);
                }
            }
        })
    }
    else if (page === `Today`){
        array.forEach((item)=>{
            if(!item.finished){
                if(item.dueDate.slice(-2) == day){
                    filteredArray.push(item);
                }
            }
        });
    }
    else if (page === `Tomorrow`){
        array.forEach((item)=>{
            if(!item.finished){
                if(item.dueDate.slice(-2) == nextDay.slice(-2)){
                    filteredArray.push(item);
                }
            }
        });
    }
    else if(page === `Finished`){
        array.forEach((item)=>{
            if(item.finished){
                filteredArray.push(item);
            }
        });
    }
    else if(page === `Home`){
        array.forEach((item)=>{
            if(!item.finished){
                filteredArray.push(item);
            }
        });
    }
    else{
        array.forEach((item)=>{
            if(!item.finished){
                if(item.project === page){
                    filteredArray.push(item);
                }
            }
        });
    }
    return filteredArray;
}

function addEvent(page,dom,array){
    page.addEventListener(`click`, (event)=>{
        changeTitle(event,dom);
        renderDOM(event.target.dataset.d,dom,array);
    });
}

function updateCount(dom, array){
    //update Home count
    (()=>{
        let count = 0;
        array.forEach((item)=>{
            if(!item.finished){
                count++;
            }
        })
        dom.homeCount.textContent = count;
    })();
    
    //update Priority count
    (()=>{
        let count = 0;
        array.forEach((item)=>{
            if(!item.finished){
                if(item.priority === `1`){
                    count++;
                }
            }
        })
        dom.priorityCount.textContent = count;
    })();
    

    const tempToday = new Date();
    const tempTomorrow = new Date(tempToday)
    tempTomorrow.setDate(tempToday.getDate() + 1);
    const day = tempToday.getDate();
    const nextDay = `0` + tempTomorrow.getDate();


    //update Today count
    (()=>{
        let date;
        let count = 0;
        array.forEach((item)=>{
            if(!item.finished){
                date = item.dueDate.slice(-2);
                if(date == day){
                    count++;
                }
            }
        })
        dom.todayCount.textContent = count;
    })();

    //update Tomorrow count
    (()=>{
        let date;
        let count = 0;
        array.forEach((item)=>{
            if(!item.finished){
                date = item.dueDate.slice(-2);
                if(date == nextDay.slice(-2)){
                    count++;
                }
            }
        })
        dom.tomorrowCount.textContent = count;
    })();

    //update Finished count
    (()=>{
        let count = 0;
        array.forEach((item)=>{
            if(item.finished){
                count++;
            }
        })
        dom.finishedCount.textContent = count;
    })();
}

function renderDOM(page,dom,array){
    currentPage = page;

    const filteredArray = filterItems(currentPage, array);
    dom.contentList.innerHTML = ``;  
    if(filteredArray.length === 0){
        const contentItem = document.createElement(`div`); 
        contentItem.classList.add(`content-text`);
        contentItem.textContent = `Great All tasks are done`
        dom.contentList.classList.add(`content-list-center`);
        dom.contentList.appendChild(contentItem);
    }
    else{
        dom.contentList.classList.remove(`content-list-center`);
        filteredArray.forEach((item, index) =>{
            const contentItem = document.createElement(`div`); 
            contentItem.classList.add(`content-item`);

            const spanIcon = document.createElement(`span`);
            const projectTitle = document.createElement(`div`);
            const spanEdit = document.createElement(`span`);
            const spanDelete = document.createElement(`span`);
            spanIcon.classList.add(`material-symbols-outlined`);
            spanIcon.classList.add(`change-status`);
            spanIcon.setAttribute(`data-index`, index);
            projectTitle.textContent = item.title;
            // spanEdit.classList.add(`material-symbols-outlined`);
            // spanEdit.classList.add(`edit-task`);
            // spanEdit.setAttribute(`data-index`, index);
            // spanEdit.textContent = `edit_note`;
            spanDelete.classList.add(`material-symbols-outlined`);
            spanDelete.classList.add(`delete-task`);
            spanDelete.setAttribute(`data-index`, index);
            spanDelete.textContent = `delete`;

            contentItem.appendChild(spanIcon);
            contentItem.appendChild(projectTitle);
            // contentItem.appendChild(spanEdit);
            contentItem.appendChild(spanDelete);
            if(item.finished){
                spanIcon.classList.add(`checked`);
                spanIcon.textContent = `task_alt`;
                projectTitle.classList.add(`checked-item-text`);
                // spanEdit.classList.add(`checked`);
                spanDelete.classList.add(`checked`);

            }
            else{
                spanIcon.classList.add(`unchecked`);
                spanIcon.textContent = `radio_button_unchecked`;
                projectTitle.classList.add(`content-item-text`);

            }
            dom.contentList.appendChild(contentItem);
        });
    }
    itemFunc(page,dom,array,filteredArray);
    updateCount(dom,array);
    
}

function cacheInput(){
    return {
        title: document.querySelector(`#title`).value,
        dueDate: document.querySelector(`#date`).value,
        time: document.querySelector(`#time`).value,
        priority: document.querySelector(`#priority`).value,
        project: document.querySelector(`#grp`).value,
        finished: false
    }
}

function clearInput(){
    document.querySelector(`#title`).value = ``;
    document.querySelector(`#date`).value = ``;
    document.querySelector(`#time`).value = ``;
    document.querySelector(`#priority`).value = ``;
   document.querySelector(`#grp`).value = ``;
}

function validateForm(dom){
    const title = document.querySelector(`#title`);
    title.addEventListener(`input`, ()=>{
        if(title.value === ``){
            dom.modalBtn.disabled = true;
            title.classList.add(`input-red`);
            title.placeholder = `Title cannot be empty`;
        }
        else{
            dom.modalBtn.disabled = false;
            title.classList.remove(`input-red`);
        }

    });
}

//create projects
function createProject(dom, array){
    //open modal
    dom.projectAddBtn.addEventListener(`click`, ()=>{
        dom.projectModal.showModal();
    });

    //render new project and close modal
    dom.projectModalBtn.addEventListener(`click`, ()=>{
        let projectName = dom.projectInput.value;
        array.push(projectName);
        createProjectElements(dom, array);
        dom.projectInput.value = ``;
        dom.projectModal.close();
    });
}

function createProjectElements(dom, proArray){
    dom.sideBar.innerHTML = ``;
    dom.options.innerHTML = ``;
    const defaultOption = document.createElement(`option`);
    defaultOption.textContent = `Create/Select a project`;
    defaultOption.disabled = true;
    defaultOption.selected = true;
    dom.options.append(defaultOption);

    proArray.forEach((item)=>{
        const sideItem = document.createElement(`div`);
        sideItem.classList.add(`side-item`);
        sideItem.classList.add(`side-item-pro`);
        sideItem.setAttribute(`data-d`, item);
        const span1 = document.createElement(`span`);
        const div = document.createElement(`div`);
        const span2 = document.createElement(`span`);
        span1.classList.add(`material-symbols-outlined`);
        span1.textContent = `donut_large`;
        div.classList.add(`side-item-lable`);
        div.textContent = item;
        span2.classList.add(`material-symbols-outlined`);
        span2.classList.add(`project-icon`);
        span2.setAttribute(`data-d`, item);
        span2.textContent = `delete`

        dom.sideBar.append(sideItem);
        sideItem.append(span1);
        sideItem.append(div);
        sideItem.append(span2);

        addProject(dom,item);
    })
}

function addProject(dom, name){
    const option = document.createElement(`option`);
    option.textContent = name;
    option.value = name;
    dom.options.append(option);
}

function editTask(event,array){
    const item =  array[event.dataset.index];
}

function itemFunc(page,dom,array,filter){
    const changeBtn = document.querySelectorAll(`.change-status`);
    const editBtn = document.querySelectorAll(`.edit-task`);
    const deleteBtn = document.querySelectorAll(`.delete-task`);

    //Change status of ToDos
    changeBtn.forEach((button)=>{
        button.addEventListener(`click`, (e)=>{
            const item = filter[e.target.dataset.index];
            item.finished = item.finished ? false : true;
            renderDOM(page,dom,array)
        });
    });

    //Edit ToDos
    editBtn.forEach((button)=>{
        button.addEventListener(`click`, (e)=>{
            const item = filter[e.target.dataset.index];

        });
    });

    //Delete ToDos
    deleteBtn.forEach((button)=>{
        button.addEventListener(`click`, (e)=>{
            const item = filter[e.target.dataset.index];
            let deleteIndex;
            array.forEach((task,index)=> {
                if(task.title === item.title){
                    deleteIndex = index;
                }
            });
            array.splice(deleteIndex, 1);
            renderDOM(page,dom,array)
        });
    });


}

export{addEvent,renderDOM,cacheInput,clearInput,validateForm,createProject,changeTitle,createProjectElements,editTask,currentPage};
