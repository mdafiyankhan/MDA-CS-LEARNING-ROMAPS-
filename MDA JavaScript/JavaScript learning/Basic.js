/*let a = 8;
let b = "8"`
console.log(a>b && a==b)
console.log(a>b && a===b)



*/
// this code is the logical operator of not operator which is different from && and tiled......

/*let a = 8;
let b = 6;
console.log(!(a>b))*/
// Conditonal statements..........

let a = prompt("what is your age:");
a = Number.parseInt(a);
if(a>=18){
  alert("you can drive but safely");
}


else if (a>15 && a<18){
  alert("just wait for few years then you can drive ");
}
else{
  alert("you can`t drive");
}

  
// switch concept ............
let day = prompt("select your day using nuymber:");
day = Number.parseInt(day);
switch(day){
  case 1:
  console.log("Monday")
  break;
  
  case 2:
  console.log("Tuesday")
  break;
  
  case 3:
  console.log("Sunday")
  break;
  default:
  
  console.log("Invalid Day")
// new add
}

  
