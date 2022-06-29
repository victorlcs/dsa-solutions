function canSum(targetSum, numbers) {
  let sortedNumbers = numbers.sort((a,b)=> b-a);
  for (let i = 0;i < sortedNumbers.length;i++) {
  	if (sortedNumbers[i] <= targetSum) {
    	targetSum = (targetSum - sortedNumbers[i]);
    }
  }
  if (targetSum === 0) {
    return true;
  }
  if (targetSum !== 0 && sortedNumbers.find( x => targetSum >= x)) {
  	return canSum(targetSum,sortedNumbers);
  }
  return false;
}
console.log(canSum(7,[2,3])); //return true
console.log(canSum(7,[5,3,4,7])); //return true
console.log(canSum(7,[2,4])); //return false 
console.log(canSum(8,[2,3,5])); //return true
console.log(canSum(300,[7,14])); //return false


