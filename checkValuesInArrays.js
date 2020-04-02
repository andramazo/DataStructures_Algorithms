
/**
 * Write a function called same, which accepts two arrays. The function should return true if every value in array has it's corresponsding value squared in the second array. 
 * The frequency of values must be the same
 */
/**
 * This solution has time complexity of O(n) even when we are using three loops but it is not nested loop.
 */
//function accepts to arrays as parameters
function same(arr1,arr2){
    //This will be the base case for this function since if length is not same, it can not have same frequencey
    if(arr1.length != arr2.length){
      return false;
    }
    //Creating two objects where we will store the array value
    //where key w-> array's each index value and value of the object will be how many times value exist into array
    var counter1 = {}
    var counter2 = {}
    //loops through both the array and creates the object
    for(let v1 of arr1){
      counter1[v1] = (counter1[v1] || 0) + 1
    }
    for(let v2 of arr2){
      counter2[v2] = (counter2[v2] || 0) + 1
    }
    //loops through the first object and find the frequency that key exist into second array
    //it also checks whether it has sqaure key existing into second object
    for(let key in counter1){
      if(!(key **2 in counter2)) return false //if key square does not exist
      if(counter2[key ** 2] !== counter1[key]) return false; //if sqaure exist but counter is not the same
    }  
    return true;
  }
  
  console.log(same([1,2,3],[4,1,9]))
  console.log(same([1,2,3], [1,9]))
  console.log(same([1,2,1], [4,4,1]))