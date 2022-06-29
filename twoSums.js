function twoSums(nums, target) {
    let hashMap = new Map();
    for(let a = 0; a < nums.length; a ++) {
        let required = target - nums[a]
        if (hashMap.has(required)) {
            return [hashMap.get(required),a];
        }else {
            hashMap.set(nums[a],a);
        }
    }
    return [];
}

console.log(twoSums([2,5,5,11],10));
console.log(twoSums([2,1,8,3],5));
console.log(twoSums([0,4,3,0],0));