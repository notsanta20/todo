function renderDOM(arr,dom){
    dom.contentList.innerHTML = ``;
    dom.checkedList.innerHTML = ``;
    

    arr.forEach((item, index) =>{
        const checkBox = document.createElement(`input`);
        const lable = document.createElement(`lable`);
        checkBox.type = `checkbox`;
        checkBox.id = `checkbox`;
        checkBox.classList.add(`checkBoxer`);
        checkBox.value = index;
        lable.for = `checkbox`;

        if(item.finished){
            const checkedItem = document.createElement(`div`);
            checkedItem.classList.add(`checked-item`);
            dom.checkedList.appendChild(checkedItem);
            checkBox.checked = true;
            lable.textContent = item.title;
            lable.classList.add(`checked-item-text`);
            checkedItem.appendChild(checkBox);
            checkedItem.appendChild(lable);
        }
        else{
            const contentItem = document.createElement(`div`);
            contentItem.classList.add(`content-item`);
            dom.contentList.appendChild(contentItem);
            lable.textContent = item.title;
            lable.classList.add(`content-item-text`);
            contentItem.appendChild(checkBox);
            contentItem.appendChild(lable);
        }
    });
}

export {renderDOM};