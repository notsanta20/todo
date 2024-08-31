function updateCount(home, pri, today, tomorrow, array){
    //update Home count
    home.textContent = array.length;
    
    //update Priority count
    (()=>{
        let count = 0;
        array.forEach((item)=>{
            if(item.priority === `1`){
                count++;
            }
        })
        pri.textContent = count;
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
        today.textContent = count;
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
            tomorrow.textContent = count;
        })();



}

export{updateCount};