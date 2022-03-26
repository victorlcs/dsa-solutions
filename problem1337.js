"use strict";
// /https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
//Solution : Using Hash Map
function kWeakestRows(mat, k) {
    let answer = [];
    let myMap = new Map();
    mat.forEach((x, index) => {
        if (x[x.length - 1] === 1) {
            myMap.set(index, x.length);
        }
        else {
            myMap.set(index, x.reduce((a, b) => a + b));
        }
    });
    const newMap = new Map([...myMap].sort((a, b) => {
        return a[1] - b[1];
    }));
    const iteratorMap = newMap.keys();
    for (let i = 0; i < k; i++) {
        answer.push(iteratorMap.next().value);
    }
    return answer;
}
;
let test1 = [[1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1]];
console.log(kWeakestRows(test1, 3)); //output : [2,0,3]
