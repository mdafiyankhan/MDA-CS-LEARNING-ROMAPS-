// Day 00 (clouser introduction)
/*function outer() {
  let name= "Mda Tech"
  function inner(){
    console.log(name)
  }
  inner();
}
outer();*/

//Practice set 2 [ increment decrement]....

/*function counter(){
  let count= 0;
  function increment(){
    count++;
  }
  function decrement(){
    count--;
  } return{
    increment:increment,
    decrement:decrement,
    getCount:function(){
      return count;
    }
  }
}
let myCounter = counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount())
myCounter.decrement();
console.log(myCounter.getCount())*/

function createCounter(n){
  
  return function() {
    return n++
    
  };
}
/*const counter = createCounter();
console.log(counter())
console.log(counter())
console.log(counter())*/