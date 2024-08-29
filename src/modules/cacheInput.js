function cacheInput(){
    return {
        title: document.querySelector(`#title`).value,
        des: document.querySelector(`#des`).value,
        dueDate: document.querySelector(`#date`).value,
        time: document.querySelector(`#time`).value,
        priority: document.querySelector(`#priority`).value,
        notes: document.querySelector(`#notes`).value,
        list: document.querySelector(`#list`).value,
        grp: document.querySelector(`#grp`).value
    }
}

export {cacheInput};