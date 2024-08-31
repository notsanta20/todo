function cacheInput(){
    return {
        title: document.querySelector(`#title`).value,
        dueDate: document.querySelector(`#date`).value,
        time: document.querySelector(`#time`).value,
        priority: document.querySelector(`#priority`).value,
        grp: document.querySelector(`#grp`).value,
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

export {cacheInput, clearInput};