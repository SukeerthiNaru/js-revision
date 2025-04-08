//spread operator ex:
const array = [1, 2, 3];
const copy = [...array];
console.log(copy);              //o/p:  [1, 2, 3]

//
// let a= [1,2,]
// let b= [4,5,]
// let merged=(...a,...b);
// console.log(merged);
// //
const a = [1,2];
const b = [3,4];
const merged = [...a, ...b];
console.log(merged);               // [1, 2, 3, 4]

//
const word = "hello world";
const letters = [...word];
console.log(letters);              // ['h', 'e', 'l', 'l', 'o']

//
const user = { name: "keerthi", age: 20 };
const updtUser = { ...user, city: "HYD"};
console.log(updtUser);                 // { name: 'keerthi', age:20 , city:'HYD'}

//Rest operator ex:
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);         // 10
console.log(second);          // 20
console.log(rest);           //o/p [30, 40, 50]

//
const person = { name: "keerthi", age: 20, country: "india", job: "software" };
const { name, ...otherInfo } = person;
console.log(name); 
console.log(otherInfo);     // { age: 30, country: "US", job: "dev" }




