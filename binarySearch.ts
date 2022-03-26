//You are given a 0-indexed integer array nums and a target element target.
//A target index is an index i such that nums[i] == target.
//Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

function countNegatives(grid: number[][]): number {
    let noOfNegative:number = 0;
    for (let i = 0 ; i < grid.length ; i ++) {
        let lowerIndex = 0;
        let upperIndex = grid[i].length - 1;

        if(grid[i][0] < 0){
            noOfNegative += grid[i].length;
        }else{
            while (lowerIndex < upperIndex) {
                const mid = lowerIndex + Math.floor((upperIndex - lowerIndex)/2);
                if(grid[i][mid] < 0 && grid[i][mid - 1] >= 0){
                    noOfNegative += (grid[i].length - mid);
                    break;
                }else if (grid[i][mid] >= 0 && grid[i][mid + 1] < 0){
                    noOfNegative += (grid[i].length - (mid+1));
                    break;
                }else if (grid[i][mid] < 0) {
                    upperIndex = mid - 1;
                }else if (grid[i][mid] >= 0) {
                    lowerIndex = mid + 1;
                }
            }
        }
    }
    return noOfNegative;
};

console.log(countNegatives([[3,-1,-3,-3,-3],[2,-2,-3,-3,-3],[1,-2,-3,-3,-3],[0,-3,-3,-3,-3]])) //output : 16
