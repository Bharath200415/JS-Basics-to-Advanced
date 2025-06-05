
function isPalindrome(str){
  let checkstring = str.toLowerCase().replace(/[^a-z0-9]/g, ''); //basically the replace function here means to replace everything which is not a lowercase alphabet or numbers with space
  let left = 0;
  let right = checkstring.length-1;
  while (left<right){
    if (checkstring[left]!=checkstring[right]){
      console.log("It isnt a palindrome");

    }
    left++;
    right--;
    
  }
  console.log("It is a palindrome");

  

}

isPalindrome("Abc 012..##  10cbA")