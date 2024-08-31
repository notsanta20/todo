function renderDOM(arr,dom){
    dom.contentList.innerHTML = ``;
    dom.checkedList.innerHTML = ``;
    
    // arr.forEach((item, index) =>{
    //     const checkBox = document.createElement(`input`);
    //     const lable = document.createElement(`lable`);
    //     checkBox.type = `checkbox`;
    //     checkBox.id = `checkbox`;
    //     checkBox.classList.add(`checkBoxer`);
    //     checkBox.value = index;
    //     lable.textContent = item.title;

    //     if(item.finished){
    //         const checkedItem = document.createElement(`div`);
    //         checkedItem.classList.add(`checked-item`);
    //         dom.checkedList.appendChild(checkedItem);
    //         checkBox.checked = true;
    //         lable.classList.add(`checked-item-text`);
    //         checkedItem.appendChild(checkBox);
    //         checkedItem.appendChild(lable);
    //     }
    //     else{
    //         const contentItem = document.createElement(`div`);
    //         contentItem.classList.add(`content-item`);
    //         dom.contentList.appendChild(contentItem);
    //         lable.classList.add(`content-item-text`);
    //         contentItem.appendChild(checkBox);
    //         contentItem.appendChild(lable);
    //     }
    // });

    arr.forEach((item, index) =>{
        if(item.finished){
            const checkedItem = document.createElement(`div`);
            checkedItem.classList.add(`checked-item`);
            checkedItem.innerHTML = `
            <input type="checkbox" id="checkbox" class="checkBoxer" value="${index}" onchange="changeStatus(event)" checked>
            <label for="checkbox" class="checked-item-text">${item.title}</label>`;
            dom.checkedList.appendChild(checkedItem);
        }
        else{
            const contentItem = document.createElement(`div`);
            contentItem.classList.add(`content-item`);
            contentItem.innerHTML = `
            <input type="checkbox" id="checkbox" class="checkBoxer" value="${index}" onchange="changeStatus(event)">
            <label for="checkbox" class="content-item-text">${item.title}</label>`;
            dom.contentList.appendChild(contentItem);

        }
    });
}

function renderPage(dom, page){
    page.addEventListener(`click`, ()=>{
        dom.heading.textContent = page.getElementsByTagName('div')[0].textContent;
    })
}

export {renderDOM, renderPage};