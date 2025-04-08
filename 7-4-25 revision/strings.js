const str="hello";
console.log(str.length);                //length 5

//charAt
const str1="hello world";
console.log("hello world".charAt(4));      //o
//charAt
const str2="hello";
console.log("hello".charAt(1));            //e
//charAt



//concat
const str3="hiiiii";
console.log("Hello".concat(" World"));   //hello world
//
console.log("hiiii".concat(" hello"));  //hiii hello

//includes(substring)
const text = "JavaScript is awesome!";
console.log(text.includes("awesome"));                // true
//
const text1 = "Hello World";
console.log(text1.includes("world"));             // false 
//
const text2="hello World!"
console.log(text2.toLowerCase().includes("world"));          // true

//starts with
let text3 = "happy journey";
console.log(text3.startsWith("journey"));            // false
console.log(text3.startsWith("happy"));             //true

//ends with 
const text4="hello world";
console.log(text4.endsWith("world"));           //true
//
const verb = "running";
console.log(verb.endsWith("ing"));             // true

//indexof

console.log("hello world".indexOf("o")); // 4
console.log("world".indexOf("r"));    //2

//lastIndexof
let phrase = "banana";
let index = phrase.lastIndexOf("a");
console.log(index);               // 5 

//repeat
console.log("ha".repeat(3));         // "hahaha"
//replace
const text5 = "I like apples";
const result1 = text5.replace("apples", "oranges");
console.log(result1);                 // "I like oranges"

//replaceAll
let date = "2025-04-07";
let formatted = date.replaceAll("-", "/");
console.log(formatted);                // "2025/04/07"

//slice(start, end)
let str4 = "JavaScript";
let result2 = str4.slice(0, 4);
console.log(result2);                   // "Java"

//
let str5 = "Hello World";
let result3 = str5.slice(-5);
console.log(result3);                      // "World"

//substring(start,end)
let str6="abcdef"
console.log(str6.substring(1, 4)); // "bcd"

//split
const str7="a,b,c"
console.log(str7.split(","));            // ["a", "b", "c"]

//toLowercase
let str8="HELLO"
console.log(str8.toLowerCase());           // "hello"
//toUppercase
let str9="lowercase"
console.log(str9.toLocaleUpperCase());

//trim
let var2="  space  "
console.log(var2.trim());        // "space"

//tostring
let num = "string";
console.log(num.toString());           // "string"

//valueof
let text9 = new String("value");
console.log(text9.valueOf());            // "value"


















