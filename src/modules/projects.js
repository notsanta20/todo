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
        createProjectElements(dom, projectName)
        dom.projectInput.value = ``;
        dom.projectModal.close();
    });
}

function createProjectElements(dom, name){
    const sideItem = document.createElement(`div`);
    sideItem.classList.add(`side-item`);
    dom.sideBar.append(sideItem);

    sideItem.innerHTML = `
        <span class="material-symbols-outlined">donut_large</span>
        <div class="side-item-lable">${name}</div>
        <span class="material-symbols-outlined project-icon" onclick = deleteProject(event)>delete</span>
    `;
}

export {createProject,createProjectElements};