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

    //update Today count
    (()=>{
        const todayDate = new Date;
        const currentDate = todayDate.getDate();
        let date;
        let count = 0;
        array.forEach((item)=>{
            date = item.dueDate.slice(-2);
            if(date == currentDate){
                count++;
            }
        })
        today.textContent = count;
    })();

        //update Tomorrow count
        (()=>{
            const todayDate = new Date;
            const currentDate = todayDate.getDate() + 1;
            let date;
            let count = 0;
            array.forEach((item)=>{
                date = item.dueDate.slice(-2);
                if(date == currentDate){
                    count++;
                }
            })
            tomorrow.textContent = count;
        })();



}

export{updateCount};