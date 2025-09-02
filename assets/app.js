// let tasksCont = document.getElementById("tasks-cont");

// // RENDER A TASK BLOCK
// function renderTask(title, descp, code, result){
//     tasksCont.innerHTML += `
//         <div class="task-block">
//             <h2 class="title">${title}</h2>
//             <p class="desc">${descp}</p>

//             <div class="code-block">
//                 <h3>Code:</h3>
//                 <pre class="code">${code}</pre>
//             </div>
//             <div class="result-block">
//                 <h3>Result:</h3>
//                 <div class="output">${result}</div>
//             </div>
//         </div>
//     `
// }

// // -------------------------------------------------------------------------------------------------------------
// // -------------------------------------------------------------------------------------------------------------
// // -------------------------------------------------------------------------------------------------------------

// // TASK-1: FIND MIN & MAX IN ARRAY
// function findMinMax(arr) {
//     let min = arr[0];
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return { min, max };
// }

// // Example usage:
// const numbers = [5, 2, 9, 1, 5, 6];
// const { min, max } = findMinMax(numbers);
// console.log("Min:", min);
// console.log("Max:", max);


// const reverseCode = `function findMinMax(arr) {
//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return { min, max };
// }

// // Example usage:
// const numbers = [5, 2, 9, 1, 5, 6];
// const { min, max } = findMinMax(numbers);
// console.log("Min:", min);
// console.log("Max:", max);
// `;

// renderTask("Task-1: Find Min & Max", "Find the minimum and maximum values in an array.", reverseCode, `Numbers: [5, 2, 9, 1, 5, 6]<br> Minimum: ${min}<br> Maximum: ${max}`);









// TASK-2

// function reverseArray(arr){
//     let reverseArr = []
//     for(let i = arr.length - 1; i >= 0; i--){
//         reverseArr.push(arr[i])
//     }

//     return reverseArr;
// }


// console.log(reverseArray([1,2,3,4,5]));


// task-3

// function findPalindrome(str){
//     let reverseStr = ""

//     for(let i = str.length - 1; i >= 0; i--){
//         reverseStr += str[i]
//     }

//     if(reverseStr === str){
//         return "It's Palindrome"
//     }else{
//         return "It's not Palindrome"
//     }
// }

// console.log(findPalindrome("madam"));


// Task-4

// function findDuplicateElement(arr){
//     let duplicate = []

//     for(let i = 0; i < arr.length; i++){
//         for(j = i+1; j < arr.length; j++){
//             if(arr[i] === arr[j] && !duplicate.includes(arr[i])){
//                 duplicate.push(arr[i])
//             }
//         }
//     }

//     return duplicate
// }

// console.log(findDuplicateElement([1, 2, 3, 4, 5, 2, 3, 6, 1, 1, 1]));


// task-5

// function charCount(str){
//     let count = {}

//     for(let i = 0; i < str.length; i++){
//         let char = str[i].toLowerCase()

//         if(count[char]){
//             count[char]++
//         }else{
//             count[char] = 1
//         }
//     }

//     return count
// }

// console.log(charCount("Hello"));


// task-6 P:1
// function recursiveFibonacci(n) {
//     if (n <= 1) {
//         return n; // base cases: fib(0)=0, fib(1)=1
//     }
//     return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }

// console.log(recursiveFibonacci(6)); 


// // task-6 P:2
// function fibonacci(n){
//     let seq = [0,1] //FIXED STARTING VALUES

//     for(let i = 2; i <= n; i++){
//         seq[i] = seq[i-1] + seq[i-2]
//     }

//     return seq.slice(0, n + 1)
// }

// console.log(fibonacci(6)); 



// task-7
























