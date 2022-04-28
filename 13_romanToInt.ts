function romanToInt(s: string): number {
    let dictItem = [
        ['I',1],
        ['V',5],
        ['X',10],
        ['L',50],
        ['C',100],
        ['D',500],
        ['M',1000],
    ]
    let romanDict = new Map();
    dictItem.forEach(x => {
        romanDict.set(x[0],x[1]);
    })
    
    let splitedRoman = s.split('');
    let mappedRoman = splitedRoman.map(x => {
        if(romanDict.has(x)) {
            return romanDict.get(x);
        }
    }).reverse();

    return recursion(mappedRoman);
};

function recursion(array:number[],sum = 0,start = 0):number {
    let end = array.length - 1
    if (array[start] > array[start+1]){
        sum += array[start] - array[start+1];
        start += 2;
    }else {
        sum += array[start];
        start ++;
    }

    if(!(start > end)) {
       return recursion(array,sum,start);
    } 

    return sum;
}

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));