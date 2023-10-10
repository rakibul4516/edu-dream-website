###### 1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);

- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

<h1>Ans: A & B both</h1>
<p>Explaine : This code will create an empty object and assign it to the greeting variable. Then, it will log the contents of the greeting variable, which will result in an output of an empty object {} being displayed in the console || . JavaScript is case-sensitive, so greetign and greeting are treated as two different variables. Therefore, greetign is not defined, and attempting to log it will result in a ReferenceError</p>




###### 2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}

sum(1, "2");

- A: NaN
- B: TypeError
- C: "12"
- D: 3
 <h1>Ans: C - 12</h1>
 <p> Explaine: sum function two parameter given a and b, using the + operator. a is number type value and b is string type value so a and b addition value is 12</p>



###### 3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

- A:['🍕', '🍫', '🥑', '🍔']`
- B:['🍝', '🍫', '🥑', '🍔']`
- C['🍝', '🍕', '🍫', '🥑', '🍔']]`
- D: ReferenceError


 <h1>Ans: A -- ['🍕', '🍫', '🥑', '🍔'] </h1>
<p> Explaine: food is array , this array have 4 element , info is object with a fav property initially set to the first element of the food array, which is 🍕 , update the info.fav property to 🍝 , info object property does not affect the original food array. So, when you log the food array, it remains unchanged  </p>


###### 4. Write the correct answer from the following options and give an explanation (2-5 lines).

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

 <h1>Ans:  B-- `Hi there, undefined`</h1>

<p>Explaine: sayHi is a  function give a 'name' parameter, which you can use to build the greeting message. However, when you call sayHi() without passing any argument, the name parameter inside the function becomes undefined.
So, the function attempts to concatenate undefined with the greeting string, resulting in 'Hi there, undefined'</p>


###### 5. Write the correct answer from the following options and give an explanation (2-5 lines).

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

- A: 1
- B: 2
- C: 3
- D: 4


 <h>Ans:C -- 3</h>
<p>Explaine:
 nums is an array . this array in 4 length . this array used in forEach method to iterate through each element of the array.
array fast element is 0 so counting value is falsy .and 1, 2, 3 it is considered truthy so increment count variable by 1 .
so false is count value is unchanged and true is count value increment by 1 for each of these value.
</p>