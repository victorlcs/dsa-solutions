//https://www.algoexpert.io/questions/River%20Sizes
function riverSizes(matrix: number[][]) {
  // Write your code here.
  
  matrix.forEach((a,pIndex) => {
      a.forEach((b,cIndex) => {     
          if(b === 1){

          }
      })
  })
  return [-1];
}

function helper(value:number,pIndex:number,cIndex:number,a:number[],direction="right") {
    let curSize:number = 0;
    //let toChkPosArr:number[][] = [[]];
    if (value === 1) {
        curSize++;
        //toChkPosArr.push([pIndex,cIndex]);

        if(direction === "right") {
            let nextIndex = cIndex+1;
            helper(a[nextIndex],pIndex,nextIndex,a);
        }else{
            let nextIndex = pIndex+1;
            helper(a[nextIndex],nextIndex,cIndex,a,direction="down");
        }
        
    }else {
        let nextIndex = pIndex+1;
        helper(a[nextIndex],nextIndex,cIndex,a,direction="down");
    }
}



console.log(riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
]));

console.log(riverSizes([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
]));

const riverMap = new Map();

function doSomething(pIndex:number,cIndex:number,matrix: number[][]) {
    let topIndex = pIndex - 1;
    let leftIndex = cIndex - 1;
    let rightIndex = cIndex + 1;
    let bottomIndex = pIndex + 1;

    if(riverMap.has(`[$topIndex,$cIndex]`)) {
        return;
    }else {

        if(topIndex >=0 && matrix[topIndex][cIndex] === 1) {
        let mapValue = riverMap.get(`[$topIndex,$cIndex]`);
        if (mapValue) {

        }
    }
    }

    

}
