"use strict";
//https://leetcode.com/problems/broken-calculator/
function brokenCalc(startValue, target) {
    let currentTarget = target;
    let answer = 0;
    while (startValue !== currentTarget) {
        console.log(currentTarget);
        if (currentTarget - startValue > 1 || currentTarget - startValue < -1) {
            if (currentTarget % 2 === 0) {
                currentTarget = currentTarget / 2;
                answer++;
            }
            else {
                currentTarget += 1;
                answer++;
            }
        }
        else {
            currentTarget += 1;
            answer++;
        }
    }
    return answer;
}
;
//console.log(brokenCalc(2,3)); //output : 2
//console.log(brokenCalc(5,8)); //output : 2
//console.log(brokenCalc(3,10)); //output : 3
//console.log(brokenCalc(1024,1)); //output : 
console.log(brokenCalc(1, 1024)); //output : 
