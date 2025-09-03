let tasksCont = document.getElementById("tasks-cont");

// RENDER A TASK BLOCK
function renderTask(id, title, descp, code) {
    tasksCont.innerHTML += `
        <div class="task-block">
            <h2 class="title">${title}</h2>
            <p class="desc">${descp}</p>
            <button class="console-btn">Run</button>


            <div class="code-block">
                <h3>Code:</h3>
                <pre class="code">${code}</pre>
            </div>

            <div class="custom-console">
                <h3>Console Output:</h3>
                <div id="console-${id}" class="output-cont">
                    <pre class="output"></pre>
                </div>
            </div>
        </div>
    `
}

// // -------------------------------------------------------------------------------------------------------------
// // -------------------------------------------------------------------------------------------------------------
// // -------------------------------------------------------------------------------------------------------------

// // TASK-1: FIND MIN & MAX IN ARRAY
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
}

const numbers = [5, 2, 9, 1, 5, 6];
const { min, max } = findMinMax(numbers);
console.log("Min:", min);
console.log("Max:", max);


const findMinMaxCode = `function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
}

const numbers = [5, 2, 9, 1, 5, 6];
const { min, max } = findMinMax(numbers);
console.log("Min:", min);
console.log("Max:", max);
`;

// renderTask("Task-1: Find Min & Max", "Find the minimum and maximum values in an array.", findMinMaxCode);

const renderTask1 = () => {
    const id = "task1";
    const title = "Task-1: Find Min & Max";
    const descp = "Find the minimum & maximum values in an array.";
    const code = findMinMaxCode;

    renderTask(id, title, descp, code)
}



// TASK-2

function reverseArray(arr){
    let reverseArr = []
    for(let i = arr.length - 1; i >= 0; i--){
        reverseArr.push(arr[i])
    }

    return reverseArr;
}


console.log(reverseArray([1,2,3,4,5]));


const reverseArrayCode = `
function reverseArray(arr){
    let reverseArr = []
    for(let i = arr.length - 1; i >= 0; i--){
        reverseArr.push(arr[i])
    }

    return reverseArr;
}

console.log(reverseArray([1,2,3,4,5]));
`

// renderTask("Task-2: Reverse Array", "Reverse the elements of an array.", reverseArrayCode);

const renderTask2 = () => {
    const id = "task2";
    const title = "Task-2: Reverse Array";
    const descp = "Reverse the elements of an array.";
    const code = reverseArrayCode;

    renderTask(id, title, descp, code)
}




// task-3

function findPalindrome(str){
    let reverseStr = ""

    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i]
    }

    if(reverseStr === str){
        return "It's Palindrome"
    }else{
        return "It's not Palindrome"
    }
}

console.log(findPalindrome("madam"));


const findPalindromeCode = `
function findPalindrome(str){
    let reverseStr = ""
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i]
    }

    if(reverseStr === str){
        return "It's Palindrome"
    }else{
        return "It's not Palindrome"
    }
}

console.log(findPalindrome("madam"));
`

renderTask("Task-3: Check Palindrome", "Check if a given string is a palindrome.", findPalindromeCode);




// Task-4

function findDuplicateElement(arr){
    let duplicate = []

    for(let i = 0; i < arr.length; i++){
        for(j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j] && !duplicate.includes(arr[i])){
                duplicate.push(arr[i])
            }
        }
    }

    return duplicate
}

console.log(findDuplicateElement([1, 2, 3, 4, 5, 2, 3, 6, 1, 1, 1]));


const findDuplicateElementCode = `
function findDuplicateElement(arr){
    let duplicate = []

    for(let i = 0; i < arr.length; i++){
        for(j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j] && !duplicate.includes(arr[i])){
                duplicate.push(arr[i])
            }
        }
    }

    return duplicate
}

console.log(findDuplicateElement([1, 2, 3, 4, 5, 2, 3, 6, 1, 1, 1]));
`

renderTask("Task-4: Find Duplicate Element", "Find all duplicate elements in an array.", findDuplicateElementCode);





// task-5

function charCount(str){
    let count = {}

    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase()

        if(count[char]){
            count[char]++
        }else{
            count[char] = 1
        }
    }

    return count
}

console.log(charCount("Hello"));


const charCountCode = `
function charCount(str){
    let count = {}

    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase()

        if(count[char]){
            count[char]++
        }else{
            count[char] = 1
        }
    }

    return count
}

console.log(charCount("Hello"));
`

renderTask("Task-5: Character Count", "Count the occurrences of each character in a string.", charCountCode);




// task-6 P:1
function recursiveFibonacci(n) {
    if (n <= 1) {
        return n; // base cases: fib(0)=0, fib(1)=1
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(6)); 


const recursiveFibonacciCode = `
function recursiveFibonacci(n) {
    if (n <= 1) {
        return n; // base cases: fib(0)=0, fib(1)=1
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(6));
`

renderTask("Task-6: Recursive Fibonacci", "Calculate Fibonacci sequence using recursion.", recursiveFibonacciCode);


// // task-6 P:2
function fibonacci(n){
    let seq = [0,1] //FIXED STARTING VALUES

    for(let i = 2; i <= n; i++){
        seq[i] = seq[i-1] + seq[i-2]
    }

    return seq.slice(0, n + 1)
}

console.log(fibonacci(6)); 


const fibonacciCode = `
function fibonacci(n){
    let seq = [0,1] //FIXED STARTING VALUES

    for(let i = 2; i <= n; i++){
        seq[i] = seq[i-1] + seq[i-2]
    }

    return seq.slice(0, n + 1)
}

console.log(fibonacci(6));
`

renderTask("Task-6: Fibonacci Sequence", "Generate Fibonacci sequence up to n.", fibonacciCode);





// task-7
function isAnagram(str1, str2){
    let s1 = str1.replace(/\s+/g, '').toLowerCase();
    let s2 = str2.replace(/\s+/g, '').toLowerCase();

    let sorted1 = s1.split("").sort().join("");
    let sorted2 = s2.split("").sort().join("");

    return sorted1 === sorted2;
}


console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false


const isAnagramCode = `
function isAnagram(str1, str2){
    let s1 = str1.replace(/\\s+/g, '').toLowerCase();
    let s2 = str2.replace(/\\s+/g, '').toLowerCase();

    let sorted1 = s1.split("").sort().join("");
    let sorted2 = s2.split("").sort().join("");

    return sorted1 === sorted2;
}


console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
`

renderTask("Task-7: Anagram Checker", "Check if two strings are Anagrams.", isAnagramCode);





// task-8

function sumArray(arr){
    let total = 0

    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }

    return total;
}

console.log(sumArray([1, 2, 3, 6]));


const sumArrayCode = `
function sumArray(arr){
    let total = 0

    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }

    return total;
}

console.log(sumArray([1, 2, 3, 6]));
`

renderTask("Task-8: Sum Array", "Calculate the sum of all elements in an array.", sumArrayCode);





// task-9

function sortedArray(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){

                let swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
    return arr;
}
console.log(sortedArray([5, 2, 8, 1, 3]));


const sortedArrayCode = `
function sortedArray(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){

                let swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
    return arr;
}
console.log(sortedArray([5, 2, 8, 1, 3]));
`

renderTask("Task-9: Sort Array", "Sort an array of numbers.", sortedArrayCode);




// task-10

function countVowels(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let vowelsFound = []

    str = str.toLowerCase();

    for(let i = 0; i < str.length; i++){
        if(!vowelsFound.includes(str[i]) && vowels.includes(str[i])){
            count++;
            vowelsFound.push(str[i]);
        }
    }

    return {count, vowelsFound};
}

console.log(countVowels("Hello World"));


const countVowelsCode = `
function countVowels(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let vowelsFound = []

    str = str.toLowerCase();

    for(let i = 0; i < str.length; i++){
        if(!vowelsFound.includes(str[i]) && vowels.includes(str[i])){
            count++;
            vowelsFound.push(str[i]);
        }
    }

    return {count, vowelsFound};
}

console.log(countVowels("Hello World"));
`

renderTask("Task-10: Vowel Counter", "Count vowels in a string.", countVowelsCode);





//Task-11

function isPrime(num){
    if(num <= 1) return false

    let sqrt = Math.sqrt(num);

    for(let i = 2; i <= sqrt; i++){
        if(num % i === 0) return num + " is not a Prime number";
    }
    return num + " is a Prime number";
}

console.log(isPrime(7));
console.log(isPrime(10));

const isPrimeCode = `
function isPrime(num){
    if(num <= 1) return false

    let sqrt = Math.sqrt(num);

    for(let i = 2; i <= sqrt; i++){
        if(num % i === 0) return num + " is not a Prime number";
    }
    return num + " is a Prime number";
}

console.log(isPrime(7));
console.log(isPrime(10));
`

renderTask("Task-11: Prime Checker", "Check if a number is prime.", isPrimeCode);




//Task-12

function mergeArray(arr1, arr2){
    let merged = []

    for(let i = 0; i < arr1.length; i++){
        merged.push(arr1[i])
    }

    for(let i = 0; i < arr2.length; i++){
        merged.push(arr2[i])
    }

    return merged
}

console.log(mergeArray([1,2,3,4], [5,6,7,8]));


const mergeArrayCode = `
function mergeArray(arr1, arr2){
    let merged = []

    for(let i = 0; i < arr1.length; i++){
        merged.push(arr1[i])
    }

    for(let i = 0; i < arr2.length; i++){
        merged.push(arr2[i])
    }

    return merged
}

console.log(mergeArray([1,2,3,4], [5,6,7,8]));
`

renderTask("Task-12: Merge Arrays", "Merge two arrays into one.", mergeArrayCode);





// task-13 P:1

function findMissingNumber(arr, n){
    let total = (n * (n + 1)) / 2;
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return total - sum
}

console.log(findMissingNumber([1, 2, 3, 5, 6], 6));

const findMissingNumberCode = `
function findMissingNumber(arr, n){
    let total = (n * (n + 1)) / 2;
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return total - sum
}

console.log(findMissingNumber([1, 2, 3, 5, 6], 6));
`

renderTask("Task-13: Missing Number Finder", "Find the missing number in an array.", findMissingNumberCode);



// task-13 P:2

function findMissingNumbers(arr, n){
    let missing = []

    for(let i= 1; i <= n; i++){
        if(!arr.includes(i)){
            missing.push(i)
        }
    }

    return missing
}

console.log(findMissingNumbers([1, 2, 5], 6));


const findMissingNumbersCode = `
function findMissingNumbers(arr, n){
    let missing = []

    for(let i= 1; i <= n; i++){
        if(!arr.includes(i)){
            missing.push(i)
        }
    }

    return missing
}

console.log(findMissingNumbers([1, 2, 5], 6));
`

renderTask("Task-13: Missing Numbers Finder", "Find the missing numbers in an array.", findMissingNumbersCode);




//Task-14

function removeDuplicates(arr){
    let unique = []

    for(let i =0; i < arr.length; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }
    return unique
}

console.log(removeDuplicates([1,2,3,4,3,2,1,5,6,8]));


const removeDuplicatesCode = `
function removeDuplicates(arr){
    let unique = []

    for(let i =0; i < arr.length; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }
    return unique
}

console.log(removeDuplicates([1,2,3,4,3,2,1,5,6,8]));
`

renderTask("Task-14: Duplicate Remover", "Remove duplicates from an array.", removeDuplicatesCode);