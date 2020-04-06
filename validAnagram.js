
/**
 * Given Two strings, write a function to determine if the second string is anagram of the first
 */


 //this is one of the way to find whether the second string is anagram or not..
 //The time complexity of this function is O(nlog(n)) because sorting algorithm in js is O(nlog(n))
 //So even if it may looks the clean solution, it is not the best solution
function anagram(str1,str2){
    if(str1.length != str2.length) return false;  
    str1 = str1.toLowerCase().split('').sort().join('');
    str2 = str2.toLowerCase().split('').sort().join('');
    return str1 == str2;
}

//This function has the time complexity of O(n) solution and space complexity is O(n) as well
function anagram(str1,str2){
  if(str1.length != str2.length) return false;  
  let str1_count = {};
  let str2_count = {};
  
  //find the existance of the character into the string
  for(let v1 in str1){
    str1_count[str1[v1]] = (str1_count[str1[v1]] || 0) + 1
    str2_count[str2[v1]] = (str2_count[str2[v1]] || 0) + 1
  }
    return is_equal(str1_count,str2_count);
}

//match the two objects and see whether it is valid anagram of no
function is_equal(obj_1,obj_2){
  for (let key in obj_1) {
    if (obj_1[key] !== obj_2[key]){
      return false
    }
  }
  return true
}
  
  console.log(anagram('',''));
  console.log(anagram('aaz','zza'));
  console.log(anagram('anagram','nagaram'));
  console.log(anagram('rat','car'));
  console.log(anagram('awesome','awesom'));
  console.log(anagram('qwerty','qeywrt'));
  console.log(anagram('texttwisttime','timetwisttext'));
  
  