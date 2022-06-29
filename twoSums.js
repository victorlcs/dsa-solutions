// function twoSums(nums, target) {
//     let foundAnswer = false;
//     let arrayAnswer = [];
//     for(let a = 0; a < nums.length; a ++) {
//         for(let i = 0; i < nums.length; i ++) {
//             if (i !== a) {
//                 if (nums[a] + nums[i] === target) {
//                     foundAnswer = true;
//                     arrayAnswer = [a,i];
//                     break;
//                 }
//             }
//         }
//         if (foundAnswer) {
//             break;
//         }
//     }
//     return arrayAnswer;
// }
function twoSumsWithBinarySearch(nums, target) {
    let foundAnswer = false;
    let arrayAnswer = [];
    
    //find midpoint
    let sorted = [...nums].sort((a,b) => a-b);
    let start = 0;
    let end = sorted.length - 1;

    while (start < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (sorted[end] < target) {
            break;
        }
        if (sorted[mid] < target && target < sorted[mid+1]) {
            console.log(mid);
            end = mid;
            break;
        }
        if (sorted[mid] < target) {
            start = mid;
        }else if (sorted[mid] > target) {
            end = mid;
        }
    }
    //find sum
    for(let a = end; a > 0; a --) {
        for(let i = 0; i < end; i ++) {
            if (i !== a) {
                if (sorted[a] + sorted[i] === target) {
                    foundAnswer = true;
                    let getIndex = function (element) {
                        return nums.findIndex(x => x === element);
                    }
                    arrayAnswer = [getIndex(sorted[i]),getIndex(sorted[a])];
                    break;
                }
            }
        }
        if (foundAnswer) {
            break;
        }
    }
    return arrayAnswer;
}
// console.log(twoSums([2,7,11,15,1,4,33,22,66],23));
console.log(twoSums([3,2,4],6));
console.log(twoSums([3,3],6)); //binary search return wrong