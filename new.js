function LetterChanges(str) {
  var splitString = str.split("");
  var vowels = ["a", "e", "i", "o", "u"];
      var newArray = [];

  for (let i = 0; i <= splitString.length; i++){
   if (splitString[i] === "a"){
     newArray.push("A");
   } else {
     newArray.push(splitString[i]);
   }
//     if (i.toString().includes(vowels)) {
//       i.toUpperCase();}
// }

 var joinArray = newArray.join("");
  // code goes here
  return joinArray


}
}

// keep this function call here
console.log(LetterChanges(readline()));
