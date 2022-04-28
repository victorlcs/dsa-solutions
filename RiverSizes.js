"use strict";
//https://www.algoexpert.io/questions/River%20Sizes
//let mySet = new Set();
function riverSizes(matrix) {
    let listing = new Map();
    matrix.forEach((a, pIndex, aArray) => {
        a.forEach((b, cIndex, bArray) => {
            let list = [];
            if (b === 1) {
                if (pIndex !== 0)
                    if (aArray[pIndex - 1][cIndex] === 1)
                        list.push(`[${pIndex - 1},${cIndex}]`);
                if (cIndex !== 0)
                    if (aArray[pIndex][cIndex - 1] === 1)
                        list.push(`[${pIndex},${cIndex - 1}]`);
                if (cIndex !== bArray.length - 1)
                    if (aArray[pIndex][cIndex + 1] === 1)
                        list.push(`[${pIndex},${cIndex + 1}]`);
                if (pIndex !== aArray.length - 1) {
                    if (aArray[pIndex + 1][cIndex] === 1)
                        list.push(`[${pIndex + 1},${cIndex}]`);
                }
                listing.set(`[${pIndex},${cIndex}]`, [...list]);
            }
        });
    });
    let river = Array.from(listing.keys());
    //depthFirstSearch(river[0],listing);
    return depthFirstSearch(river[0], listing);
}
function depthFirstSearch(start, maps = new Map(), mySet = new Set(), answer = []) {
    let value = maps.get(start);
    if (value) {
        mySet.add(start);
        maps.delete(start);
        value.forEach((x, index, arr) => {
            if (!mySet.has(x)) {
                depthFirstSearch(x, maps, mySet, answer);
            }
        });
        if (mySet.size != 0) {
            answer.push(mySet.size);
            mySet.clear();
        }
        if (maps.size != 0) {
            let river = Array.from(maps.keys());
            depthFirstSearch(river[0], maps, mySet, answer);
        }
    }
    return answer;
}
let test = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
];
let test2 = [
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
    [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1]
];
console.log(riverSizes(test1));
