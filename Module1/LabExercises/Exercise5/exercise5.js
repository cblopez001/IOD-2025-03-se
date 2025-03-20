// SECTION 1: Created an array called justiceLeague and assigned 5 elements to it.
const justiceLeague= ["Superman", "Batman", "WonderWoman","Aquaman","Green Lantern"];

//Then I created a function called printArray and assigned it to printArray.
function printArray(justiceLeague){
    console.log(justiceLeague);
}
printArray(justiceLeague);
//console logged the following 5 elements to the array: Superman, Batman, WonderWoman, Aquaman, Green Lantern.


//SECTION 2: Replaced the 1st and 4th element of the array with "Martian Manhunter" and "The Flash".Then I called the function printArray.

justiceLeague.splice(1,1,"Martian Manhunter");// replaced the element at index 1 with "Martian Manhunter"
printArray(justiceLeague);

justiceLeague.splice(4,1,"The Flash");// replaced the element at index 4 with "The Flash"
printArray(justiceLeague);

//console logged the following 5 elements to the array: Superman, Martian Manhunter, WonderWoman, Aquaman, The Flash.


//SECTION 3: Removed the last element from the array
justiceLeague.pop();
printArray(justiceLeague);
// console logged the following 4 elements to the array: Superman, Martian Manhunter, WonderWoman, Aquaman.


//SECTION 4: Added an element into to the Array named "Batman" to the front of the list.
justiceLeague.unshift("Batman");
printArray(justiceLeague);
// console logged the following 5 elements to the array: Batman, Superman, Martian Manhunter, WonderWoman, Aquaman.


//BONUS SECTION: Added a 3 new elements to the Array named "Hawkman", "Green Lantern", and "The Flash"...it's not the League without The Flash.
justiceLeague.push("Hawkman","Green Lantern","The Flash");
printArray(justiceLeague);
// console logged the following 8 elements to the array: Batman, Superman, Martian Manhunter, WonderWoman, Aquaman, Hawkman, Green Lantern, The Flash.