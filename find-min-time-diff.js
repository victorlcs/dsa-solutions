"use strict";
function timeDiff(mat) {
    let minMinute = 1;
    let newTime = [];
    mat.forEach(time => {
        let temp = new Array(2);
        if (time.includes('pm')) {
            temp = time.replace('pm', '').split(':');
            //push in 24hours format,12hours format
            newTime.push(((+temp[0] + 12) * 60) + +temp[1], (+temp[0] * 60) + +temp[1]);
        }
        else {
            temp = time.replace('am', '').split(':');
            newTime.push((+temp[0] * 60) + +temp[1]);
        }
    });
    console.log(newTime);
    newTime = newTime.sort((a, b) => a - b);
    minMinute = newTime[1] - newTime[0];
    for (let i = 0; i < newTime.length - 1; i++) {
        minMinute = Math.min(minMinute, newTime[i + 1] - newTime[i]);
    }
    return minMinute;
}
console.log(timeDiff(['11:45pm', '5:00pm', '12:01am', '6:00am']));
//console.log(timeDiff(['13:00pm','12:00pm','9:00pm','6:00am']))
//console.log(timeDiff(['1:00pm','2:00am']));
//11:45pm  12:01am   = 12 hour format (min diff)
//23:45    00:01     = 24 hour format
//1:00pm   2:00am    = 12 hour format
//13:00    02:00     = 24 hour format (min diff)
//11:45pm  1:01am   = 12 hour format (min diff)
//23:45    1:01     = 24 hour format
