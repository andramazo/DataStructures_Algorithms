
/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */
//Time complexity is O(n) and space complexity is O(n)
function two_sum(arr,target){
   let i=0; 
   let remainder_obj = {};

  //loop into array to see what values are visitited and find the difference
  while(i < arr.length){
   // if(i < target){
        let missing_val = target - arr[i];
        if(remainder_obj[missing_val]) return [remainder_obj[missing_val]-1,i] //send the index back if it is found
    //}
    remainder_obj[arr[i]] = i+1; //store the  visitied index and its value
    i++;
  } 
  return [];
}

console.log(two_sum([2, 7, 11, 15],13))
console.log(two_sum([2, 7, 11, 15],9))
console.log(two_sum([2, 7, 11, 15],26))
