###### 1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);

- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

<h3>Ans: A & B </h3>
<p>Explaine : declare a variable greeting with let, and it remains undefined. However, due to a typo, also create a global variable greetign and assign an empty object {} to it. When log greetign, it outputs the empty object, represented as {}. | .B because there is a typo in the variable name. Intended to create a variable named greeting and assign an empty object to it. However,  mistakenly wrote greetign instead of greeting. As a result, JavaScript doesn't recognize greetign as a defined variable, so it throws a ReferenceError</p>




###### 2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}

sum(1, "2");

- A: NaN
- B: TypeError
- C: "12"
- D: 3
 <h3>Ans: C - 12</h3>
 <p> Explaine:The function sum that takes two parameters a and b and returns their sum. When you call sum(1, "2"), JavaScript performs type coercion, converting the number 1 to a string, and then concatenates the strings "1" and "2" to produce "12".</p>



###### 3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

- A:['🍕', '🍫', '🥑', '🍔']`
- B:['🍝', '🍫', '🥑', '🍔']`
- C['🍝', '🍕', '🍫', '🥑', '🍔']]`
- D: ReferenceError


 <h3>Ans: A - ['🍕', '🍫', '🥑', '🍔'] </h3>
<p> Explaine:  First creates an array called food with four emoji elements. Then, it creates an object info with a property favoriteFood set to the first element of the food array. Then, it changes the info.favoriteFood to "🍝" but this change doesn't affect the food array. So, when console log the food array, it return the same element: ['🍕', '🍫', '🥑', '🍔']. </p>


###### 4. Write the correct answer from the following options and give an explanation (2-5 lines).

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

 <h3>Ans: B- `Hi there, undefined`</h3>

<p>Explaine: The sayHi function expects a name as argument when it is called. But here calling sayHi() without passing any arguments. In this case function will have default value of undefined.  The function will returns "Hi there, undefined" to the console.</p>


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


 <h3>Ans: C - 3</h3>
<p>Explaine:The loop go through each number in nums. If a number is not 0 which is considered "truthy" in JavaScript,and increment the count variable by 1. 0 is "falsy," so it doesn't increment count but 1, 2, and 3 are "truthy" so each one increments count by 1.After going through all the numbers count ends up as 3.
</p>