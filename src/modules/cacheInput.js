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

export {cacheInput};