"use strict";
function romanToInt(s) {
    let dictItem = [
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ];
    let romanDict = new Map();
    dictItem.forEach(x => {
        romanDict.set(x[0], x[1]);
    });
    let splitedRoman = s.split('');
    let mappedRoman = splitedRoman.map(x => {
        if (romanDict.has(x)) {
            return romanDict.get(x);
        }
    }).reverse();
    // let answer = 0;
    // mappedRoman.reduce((curr,prev,currIndex,array)=>{
    //     if (curr > prev) {
    //         answer += curr-prev;
    //         return array[currIndex - 1];
    //     }else{
    //         answer += curr
    //         return curr;
    //     }
    // });
    return recursion(mappedRoman);
}
;
function recursion(array, sum = 0, start = 0) {
    let end = array.length - 1;
    if (array[start] > array[start + 1]) {
        sum += array[start] - array[start + 1];
        start += 2;
    }
    else {
        sum += array[start];
        start++;
    }
    if (!(start > end)) {
        return recursion(array, sum, start);
    }
    return sum;
}
// XXVII
// 27
// 10 10 5 1 1
//LVIII
//58
//50 5 1 1 1
//1 1 1 5 50
//1 1 1 5 50
//MCMXCIV
//1994
// 1000 100 1000 10 100 1 5
// 5 1 100 10 1000 100 1000
// 4 90 900 1000
// 
//1. Split the roman text to array of string
//1.1 Convert each roman string into number.
//2. go through each string from backward
//3. if index n > index n - 1 , array[n] and array[n-1] will be replaced with = array[n] - array[n-1].
//4. Sum all the value in the array
console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
