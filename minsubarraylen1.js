
/**
 * Write a function called minSubArraylen which accepts two parameters - an array of positive integers and a positive integer
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isnot one, return 0 instead.
 */

//I have used the sliding window approach
//Time comploexity of the solution -O(n) and space complexity is  O(1)
function minSubArraylen(arr,val){
  let i=j=sum=0; //initialze the vwhere i and j will loop based on length of array, sum - sum of contiguoius index's value
  let found_index = Infinity;  

  //loop into array
  while(i < arr.length){
    //add sum if the sum is less than the val passed and j is less than length of an array
    if(sum < val && j < arr.length){     
      sum+= arr[j];
      j++; //incrememnt j so it goes to next index
    }else if(sum >= val){ //if some is equal or greater than val
       found_index = Math.min(found_index,(j-i)) //catch the minimum length of an subarray which made sum >= val
       sum -= arr[i] //substract the val based on i var and incrememnt the i
       i++;
    }else{
      break; //need to do so that while loop does not become infinite since j will not restrict the loop
    }
  } 
  return  (found_index == Infinity) ? 0 : found_index; //if infinity means none subarray is found which >= val provided
}

//Test cases
console.log(minSubArraylen([2,3,1,2,4,3],7))
console.log(minSubArraylen([2,1,6,5,4],9))
console.log(minSubArraylen([3,1,7,11,2,9,8,21,62,33,19],52))
console.log(minSubArraylen([1,4,16,22,,5,7,8,9,10],39))
console.log(minSubArraylen([1,4,16,22,5,7,8,9,10],55))
console.log(minSubArraylen([4,3,3,8,1,2,3],11))
console.log(minSubArraylen([1,4,16,22,5,7,8,9,10],95))