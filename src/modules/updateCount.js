function updateCount(dom, array){
    //update Home count
    dom.homeCount.textContent = array.length;
    
    //update Priority count
    (()=>{
        let count = 0;
        array.forEach((item)=>{
            if(item.priority === `1`){
                count++;
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
            date = item.dueDate.slice(-2);
            if(date == day){
                count++;
            }
        })
        dom.todayCount.textContent = count;
    })();

    //update Tomorrow count
    (()=>{
        let date;
        let count = 0;
        array.forEach((item)=>{
            date = item.dueDate.slice(-2);
            if(date == nextDay.slice(-2)){
                count++;
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

export{updateCount};