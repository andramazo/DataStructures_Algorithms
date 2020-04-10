
/**
 * Given a string, find the length of the longest substring without repeating characters.
 */
//this soluton has time complexity of O(n) and space complexity of O(n) as well
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length
    let response = 0
    let l = 0;
    let visited = {}

    for(let i=0;i<s.length;i++){
      if(visited[s[i]]){ //if the object has the char found.
          l = Math.max(visited[s[i]],l) //find the maximum index of the visited character so it can be break
      }
      response = Math.max(response,i-l+1) //find the maximum length of the substring found
      visited[s[i]] = i+1; //assign the latest found idex of that character into the object
    }
    return response;
};

console.log(lengthOfLongestSubstring("bbbbbb"))
console.log(lengthOfLongestSubstring("pwwkeb"))