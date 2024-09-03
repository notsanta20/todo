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
    sideItem.classList.add(`side-item-pro`);
    dom.sideBar.append(sideItem);

    sideItem.innerHTML = `
        <div onclick = renderProjects(event)>
        <span class="material-symbols-outlined" data-d="${name}">donut_large</span>
        <div class="side-item-lable" data-d="${name}" onclick = renderProjects(event)>${name}</div>
        </div>
        <span class="material-symbols-outlined project-icon" onclick = deleteProject(event)>delete</span>
    `;

    addProject(dom,name);
}

function addProject(dom, name){
    const option = document.querySelector(`option`);
    option.textContent = name;
    dom.options.append(option);
}

export {createProject,createProjectElements};