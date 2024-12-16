//// for loop //////

// let num = [3, 5, 1, 2, 4]

//for(let i=0; i<=num.length;i++){
  //  console.log(num[i])
//}



//// for.Each //////

// let num = [3, 5, 1, 2, 4]
// num.forEach((Element)=> {
//   console.log(Element + Element)
// })

// let name= "sufi"
// let abb = Array.from(name)
// console.log(abb)


///// for of////

// let num = [3, 5, 1, 2, 4]
// for(let i of num){
//     console.log(i)
// }


////for in ///

// for(let j in num){
//     console.log(j)
// }


// for(let a of num){
//     console.log(a)
// }
////// of end ////

///////// .map ////

// let arr = [56, 67, 23]
// //console.log(arr)
//  let a = arr.map((value, index, array)=>{
//     console.log(value, index, array)
//     return value + index
//  })
//  console.log(a)


 //// .filter ///
 
 
//  let crr = [56, 67, 23, 2, 4, 9]
// //console.log(arr)
//  let c2 = crr.filter((c)=>{
//     return c<30
//  })
// console.log(c2)

////  .raduce ////

// let arr4 = [1, 13, 24, 38,47,51,]
// let newdrr = arr4.reduce((h1, h2)=>{
//     return h1 + h2
// })
// console.log(newdrr)



// let brr4 = [2, 33, 44, 38,47,61,]
// const reduce_fun = (h1, h2)=>{
//     return h1 + h2
// }
// let newerr = brr4.reduce(reduce_fun)
// console.log(newerr)

////( .slice )////


// const number =[1, 2, 3, 4, 5, 6, 7, 8]
//  let arr = number.slice(6);

//  console.log(arr);


 /////( splice )/////

 
// const number =[1, 2, 3, 4, 5, 6, 7, 8]
// let arr = number.splice(0, 4);

// console.log(arr);
// console.log(number);

////// function  ///////

// function cockMaggi(maggi, Pani, taple) {
//   console.log(
//     "yor maggi will be ready in" +
//       maggi * 2 +
//       "minutes" +
//       "and ingrediants used are:-" +
//       maggi +
//       "maggi" +
//       Pani +
//       "cups of water" +
//       "using" +
//       taple +
//       "pen",
//   );
// }
// cockMaggi(4, 5, 1);


// const prompt = require("prompt-sync")();
let bread1 = prompt("which braed you want to have:-");
let veggies1 = prompt("what are your favorit veggies:-");
let sauce = prompt("which sauce you want to have:-");
function makeSandwich(bread1, veggies1, sauce) {
  let sandwich = bread1 + "bread" + veggies1 + "vegiese1" + sauce + "sauce";
  return sandwich;
}
let vegSandwich = makeSandwich(bread1, veggies1, sauce);
console.log(vegSandwich);

///// unknown ///////
/*const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);*/