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

export{validateForm}