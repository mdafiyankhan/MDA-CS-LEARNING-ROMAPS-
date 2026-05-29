// 1. for Loop bsic code
/*for(let i=0;i<9;i++){
  console.log(i)// 0 t0 8 print hoga
  console.log(i+1) // 1 to 9 print hoga
}*/



// 2. for in loop bsaic code...... 

/*let student ={  // 'Object' ek reserved keyword hai, isliye variable ka naam 'student' rakhna behtar hai
  name : 9,
  roll : 8,
  section : 10
};
student = Number.parseInt(student)
for(let x in student){
  // Object[x] ka use karein
  console.log("Detail of the student " +x+ " are " + student[x]);
}*/



// 3. for of loop basic code.....
/*for(let a of "afiyan"){
  console.log(a)
}*/

// 4. PRACTICLE PROGRAMME FOR LOOP USING THE ARRAY STATEMENT (Object.keys(name).length)
/*
let marks={
  Math: 90,
  Physics: 89,
  Chmistry: 97
  
}
for(let i=0;i<Object.keys(marks).length;i++){
  console.log("Marks of the student in " +Object.keys(marks)[i]+ " is " + marks[Object.keys(marks)[i]])
}
*/

// 4. sum of n odd numbers
/* let n = prompt("Enter the value of n:");
n = Number.parseInt(n);

let sum = 0; // 1. Variable initialize kiya
let count = 0;
let i = 1;

while(count < n) {
  if (i % 2 !== 0) { // Check kiya ki number odd hai ya nahi
    sum += i;
    console.log(i + " +");
    count++; // Sirf tab count badhega jab odd number milega
  }
  i++;
}

console.log("Sum of first " + n + " odd numbers is " + sum); */

// 5. square root of the number

/* let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of" +theNumber * theNumber);

//6. cube root of the number
/* let number = Number(prompt("Enter the number : "));
if(!Number.isNaN(number)){ // yaha pr dhyan de concept use hua hai number valid hona chahiye
  console.log("Your number is the cube root of" + number*number*number);
  // cube root nikalega
}
else{ 
  console.log("Abe sahi number daal")
}
*/

// 7. (a) do while LOOP
/* 
let name;
do{
  name= prompt("who are you:")
} while(!name)  // ! nhi daalenge then code baar baar execute hoga but value return nhi karega
  console.log("Hello" + name);
  
  (b) password jb tk dega nhi tb tk login nhi kr sakta hai  */
 /* const correctPassword = "code123";
  let userInput;

do {
  // Browser environment mein prompt use hota hai input ke liye
  userInput = prompt("Enter the secret password:");

  if (userInput === correctPassword) {
    console.log("Success! Aap login ho chuke hain.");
    
  }
  else if(userInput!== correctPassword){
    prompt("Invalid pass please try again:")
  }

} while (userInput !== correctPassword);*/
  
  
// 8. (a) Ratio of the power method
/*let result= 1;
let counter= 0;
while(counter<10){ // counter0 means = (2^0)*2= result that follow continue upto 9 times
  result= result*2;
  counter= counter+1;
}
console.log(result);*/

// (b) 3 ratio the power 4 
/*let result= 1;
let counter= 0;
while(counter<4){
  result*= 3;
  counter++;
}
console.log("the value of 3 ratio the power 4 is :" ,result);
*/

// 9. 









