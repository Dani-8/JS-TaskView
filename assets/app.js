let tasksCont = document.getElementById("tasks-cont");

// RENDER A TASK BLOCK
function renderTask(id, title, descp, code) {
    tasksCont.innerHTML += `
        <div class="task-block">
            <h2 class="title">${title}</h2>
            <p class="desc">${descp}</p>
            <button data-task-id="${id}" class="console-btn">Run</button>


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

// renderTask("Task-3: Check Palindrome", "Check if a given string is a palindrome.", findPalindromeCode);

const renderTask3 = () => {
    const id = "task3";
    const title = "Task-3: Check Palindrome";
    const descp = "Check if a given string is a palindrome.";
    const code = findPalindromeCode

    renderTask(id, title, descp, code)
}


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

// renderTask("Task-4: Find Duplicate Element", "Find all duplicate elements in an array.", findDuplicateElementCode);

const renderTask4 = () => {
    const id = "task4";
    const title = "Task-4: Find Duplicate Element";
    const descp = "Find all duplicate elements in an array.";
    const code = findDuplicateElementCode

    renderTask(id, title, descp, code)
}



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

// renderTask("Task-5: Character Count", "Count the occurrences of each character in a string.", charCountCode);

const renderTask5 = () => {
    const id = "task5";
    const title = "Task-5: Character Count";
    const descp = "Count the occurrences of each character in a string.";
    const code = charCountCode

    renderTask(id, title, descp, code)
}



// task-6 P:1
function recursiveFibonacci(n) {
    if (n <= 1) {
        return n; // base cases: fib(0)=0, fib(1)=1
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}



const recursiveFibonacciCode = `
function recursiveFibonacci(n) {
    if (n <= 1) {
        return n; // base cases: fib(0)=0, fib(1)=1
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(6));
`

// renderTask("Task-6: Recursive Fibonacci", "Calculate Fibonacci sequence using recursion.", recursiveFibonacciCode);

const renderTask6P1 = () => {
    const id = "task6P1";
    const title = "Task-6: Recursive Fibonacci";
    const descp = "Calculate Fibonacci sequence using recursion.";
    const code = recursiveFibonacciCode

    renderTask(id, title, descp, code)
}



// // task-6 P:2
function fibonacci(n){
    let seq = [0,1] //FIXED STARTING VALUES

    for(let i = 2; i <= n; i++){
        seq[i] = seq[i-1] + seq[i-2]
    }

    return seq.slice(0, n + 1)
}



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

// renderTask("Task-6: Fibonacci Sequence", "Generate Fibonacci sequence up to n.", fibonacciCode);

const renderTask6P2 = () => {
    const id = "task6P2";
    const title = "Task-6: Fibonacci Sequence";
    const descp = "Generate Fibonacci sequence up to n.";
    const code = fibonacciCode

    renderTask(id, title, descp, code)
}



// task-7
function isAnagram(str1, str2){
    let s1 = str1.replace(/\s+/g, '').toLowerCase();
    let s2 = str2.replace(/\s+/g, '').toLowerCase();

    let sorted1 = s1.split("").sort().join("");
    let sorted2 = s2.split("").sort().join("");

    return sorted1 === sorted2;
}



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

// renderTask("Task-7: Anagram Checker", "Check if two strings are Anagrams.", isAnagramCode);

const renderTask7 = () => {
    const id = "task7";
    const title = "Task-7: Anagram Checker";
    const descp = "Check if two strings are Anagrams.";
    const code = isAnagramCode

    renderTask(id, title, descp, code)
}



// task-8

function sumArray(arr){
    let total = 0

    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }

    return total;
}



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

// renderTask("Task-8: Sum Array", "Calculate the sum of all elements in an array.", sumArrayCode);

const renderTask8 = () => {
    const id = "task8";
    const title = "Task-8: Sum Array";
    const descp = "Calculate the sum of all elements in an array.";
    const code = sumArrayCode

    renderTask(id, title, descp, code)
}



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

// renderTask("Task-9: Sort Array", "Sort an array of numbers.", sortedArrayCode);

const renderTask9 = () => {
    const id = "task9";
    const title = "Task-9: Sort Array";
    const descp = "Sort an array of numbers.";
    const code = sortedArrayCode

    renderTask(id, title, descp, code)
}


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

// renderTask("Task-10: Vowel Counter", "Count vowels in a string.", countVowelsCode);

const renderTask10 = () => {
    const id = "task10";
    const title = "Task-10: Vowel Counter";
    const descp = "Count vowels in a string.";
    const code = countVowelsCode

    renderTask(id, title, descp, code)
}




//Task-11

function isPrime(num){
    if(num <= 1) return false

    let sqrt = Math.sqrt(num);

    for(let i = 2; i <= sqrt; i++){
        if(num % i === 0) return num + " is not a Prime number";
    }
    return num + " is a Prime number";
}



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

// renderTask("Task-11: Prime Checker", "Check if a number is prime.", isPrimeCode);

const renderTask11 = () => {
    const id = "task11";
    const title = "Task-11: Prime Checker";
    const descp = "Check if a number is prime.";
    const code = isPrimeCode

    renderTask(id, title, descp, code)
}


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

// renderTask("Task-12: Merge Arrays", "Merge two arrays into one.", mergeArrayCode);

const renderTask12 = () => {
    const id = "task12";
    const title = "Task-12: Merge Arrays";
    const descp = "Merge two arrays into one.";
    const code = mergeArrayCode

    renderTask(id, title, descp, code)
}



// task-13 P:1

function findMissingNumber(arr, n){
    let total = (n * (n + 1)) / 2;
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return total - sum
}


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

// renderTask("Task-13: Missing Number Finder", "Find the missing number in an array.", findMissingNumberCode);

const renderTask13P1 = () => {
    const id = "task13P1";
    const title = "Task-13: Missing Number Finder";
    const descp = "Find the missing number in an array.";
    const code = findMissingNumberCode

    renderTask(id, title, descp, code)
}



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

// renderTask("Task-13: Missing Numbers Finder", "Find the missing numbers in an array.", findMissingNumbersCode);

const renderTask13P2 = () => {
    const id = "task13P2";
    const title = "Task-13: Missing Numbers Finder";
    const descp = "Find the missing numbers in an array.";
    const code = findMissingNumbersCode

    renderTask(id, title, descp, code)
}



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

// renderTask("Task-14: Duplicate Remover", "Remove duplicates from an array.", removeDuplicatesCode);

const renderTask14 = () => {
    const id = "task14";
    const title = "Task-14: Duplicate Remover";
    const descp = "Remove duplicates from an array.";
    const code = removeDuplicatesCode

    renderTask(id, title, descp, code)
}


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

function renderLogMsg(container, msg){
    let output = container.querySelector(".output")
    output.textContent += msg + "\n"
}


const taskRunners = {
    "task1" : (localConsole) => {
        const numbers = [5, 2, 9, 1, 5, 6];
        const { min, max } = findMinMax(numbers);
        console.clear();
        console.log("--- Running Task 1: Find Min & Max ---");
        console.log("Min:", min);
        console.log("Max:", max);
        localConsole.log("--- Running Task 1: Find Min & Max ---");
        localConsole.log("Min: " + min);
        localConsole.log("Max: " + max);
    },

    "task2" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 2: Reverse Array ---");
        console.log(reverseArray([1,2,3,4,5]));
        localConsole.log("--- Running Task 2: Reverse Array ---");
        localConsole.log(reverseArray([1,2,3,4,5]));
    },

    "task3" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 3: Palindrome Check ---");
        console.log(findPalindrome("madam"));
        localConsole.log("--- Running Task 3: Palindrome Check ---");
        localConsole.log(findPalindrome("madam"));
    },

    "task4" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 4: Find Duplicates ---");
        console.log(findDuplicateElement([1, 2, 3, 4, 5, 2, 3, 6, 1, 1, 1]));
        localConsole.log("--- Running Task 4: Find Duplicates ---");
        localConsole.log(findDuplicateElement([1, 2, 3, 4, 5, 2, 3, 6, 1, 1, 1]));
    },

    "task5" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 5: Character Count ---");
        console.log(charCount("Hello"));
        localConsole.log("--- Running Task 5: Character Count ---");
        localConsole.log(charCount("Hello"));
    },

    "task6P1" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 6P1: Recursive Fibonacci ---");
        console.log(recursiveFibonacci(6));
        localConsole.log("--- Running Task 6P1: Recursive Fibonacci ---");
        localConsole.log(recursiveFibonacci(6));
    },

    "task6P2" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 6P2: Fibonacci Sequence ---");
        console.log(fibonacci(6));
        localConsole.log("--- Running Task 6P2: Fibonacci Sequence ---");
        localConsole.log(fibonacci(6));
    },

    "task7" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 7: Anagram Checker ---");
        console.log(isAnagram("listen", "silent"));
        console.log(isAnagram("hello", "world"));
        localConsole.log("--- Running Task 7: Anagram Checker ---");
        localConsole.log(isAnagram("listen", "silent"));
        localConsole.log(isAnagram("hello", "world"));
    },

    "task8" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 8: Sum Array ---");
        console.log(sumArray([1, 2, 3, 6]));
        localConsole.log("--- Running Task 8: Sum Array ---");
        localConsole.log(sumArray([1, 2, 3, 6]));
    },

    "task9" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 9: Sort Array ---");
        console.log(sortedArray([5, 2, 8, 1, 3]));
        localConsole.log("--- Running Task 9: Sort Array ---");
        localConsole.log(sortedArray([5, 2, 8, 1, 3]));
    },

    "task10" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 10: Vowel Counter ---");
        console.log(countVowels("Hello World"));
        localConsole.log("--- Running Task 10: Vowel Counter ---");
        localConsole.log(countVowels("Hello World"));
    },

    "task11" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 11: Prime Checker ---");
        console.log(isPrime(7));
        console.log(isPrime(10));
        localConsole.log("--- Running Task 11: Prime Checker ---");
        localConsole.log(isPrime(7));
        localConsole.log(isPrime(10));
    },

    "task12" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 12: Merge Arrays ---");
        console.log(mergeArray([1,2,3,4], [5,6,7,8]));
        localConsole.log("--- Running Task 12: Merge Arrays ---");
        localConsole.log(mergeArray([1,2,3,4], [5,6,7,8]));
    },

    "task13P1" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 13P1: Missing Number Finder ---");
        console.log(findMissingNumber([1, 2, 3, 5, 6], 6));
        localConsole.log("--- Running Task 13P1: Missing Number Finder ---");
        localConsole.log(findMissingNumber([1, 2, 3, 5, 6], 6));
    },

    "task13P2" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 13P2: Missing Numbers Finder ---");
        console.log(findMissingNumbers([1, 2, 5], 6));
        localConsole.log("--- Running Task 13P2: Missing Numbers Finder ---");
        localConsole.log(findMissingNumbers([1, 2, 5], 6));
    },

    "task14" : (localConsole) => {
        console.clear();
        console.log("--- Running Task 14: Duplicate Remover ---");
        console.log(removeDuplicates([1,2,3,4,3,2,1,5,6,8]));
        localConsole.log("--- Running Task 14: Duplicate Remover ---");
        localConsole.log(removeDuplicates([1,2,3,4,3,2,1,5,6,8]));
    },


}



document.addEventListener("DOMContentLoaded", () => {
    renderTask1()
    renderTask2()
    renderTask3()
    renderTask4()
    renderTask5()
    renderTask6P1()
    renderTask6P2()
    renderTask7()
    renderTask8()
    renderTask9()
    renderTask10()
    renderTask11()
    renderTask12()
    renderTask13P1()
    renderTask13P2()
    renderTask14()


    tasksCont.addEventListener("click", (e) => {
    const consoleBtn = e.target.closest("button[data-task-id]");
    if (consoleBtn) {
        let taskId = consoleBtn.dataset.taskId;
        let consoleOutput = document.getElementById(`console-${taskId}`);


        document.querySelectorAll(".output-cont").forEach(container => {
        if (container.id !== `console-${taskId}`) {
            container.classList.remove("output-cont-visible");
        }
        });


        consoleOutput.querySelector(".output").textContent = "";
        consoleOutput.classList.add("output-cont-visible");


        const localConsole = {
        log: function(msg) {
            if (typeof msg === 'object') {
                renderLogMsg(consoleOutput, JSON.stringify(msg));
            } else {
                renderLogMsg(consoleOutput, String(msg));
            }
        }
        };


        if (taskRunners[taskId]) {
        taskRunners[taskId](localConsole);
        }
    }
    });

})
























