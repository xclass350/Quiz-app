let questions = [
  {
    numb: 1,
    question: "What is the output of typeof null?",
    answer: "object",
    options: ["object", "null", "undefined", "string"],
  },

  {
    numb: 2,
    question:
      "Which JavaScript function is used to convert a string to an integer?",
    answer: "parseInt()",
    options: ["parseInt()", "parseFloat()", "toString()", "valueOf()"],
  },

  {
    numb: 3,
    question: "What is the purpose of the this keyword in JavaScript?",
    answer: "To refer to the current object",
    options: [
      "Hypertext Preprocessor",
      "To refer to the current object",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },

  {
    numb: 4,
    question:
      "Which JavaScript method is used to add an element to the end of an array?",
    answer: "push()",
    options: ["push()", "pop()", "shift()", "unshift()"],
  },

  {
    numb: 5,
    question:
      "What is the difference between null and undefined in JavaScript?",
    answer:
      "null represents the absence of any object value, while undefined represents an uninitialized variable",
    options: [
      "null represents the absence of any object value, while undefined represents an uninitialized variable",
      "null represents an uninitialized variable, while undefined represents the absence of any object value",
      "null and undefined are interchangeable",
      "null represents a primitive value, while undefined represents an object",
    ],
  },

  {
    numb: 6,
    question:
      "Which JavaScript function is used to check if a variable is an array?",
    answer: "Array.isArray()",
    options: ["isArray()", "instanceof()", "typeof()", "Array.isArray()"],
  },

  {
    numb: 7,
    question: "What is the purpose of the try-catch block in JavaScript?",
    answer: "To handle runtime errors",
    options: [
      "To handle runtime errors",
      "To handle syntax errors",
      "To handle logical errors",
      "To handle compilation errors",
    ],
  },

  {
    numb: 8,
    question:
      "Which JavaScript method is used to remove the last element from an array?",
    answer: "pop()",
    options: ["pop()", "push()", "shift()", "unshift()"],
  },

  {
    numb: 9,
    question: "What is the output of console.log(typeof undefined)?",
    answer: "",
    options: ["undefined", "null", "object", "string"],
  },

  {
    numb: 10,
    question:
      "Which JavaScript function is used to convert a string to uppercase?",
    answer: "toUpperCase()",
    options: ["toUpperCase()", "toLowerCase()", "trim()", "substring()"],
  },

  {
    numb: 11,
    question: "What is the purpose of the finally block in JavaScript?",
    answer: "To execute code regardless of an error",
    options: [
      "To handle runtime errors",
      "To handle syntax errors",
      "To execute code regardless of an error",
      "To execute code only if an error occurs",
    ],
  },

  {
    numb: 12,
    question:
      "Which JavaScript method is used to sort an array in ascending order?",
    answer: "sort()",
    options: ["sort()", "reverse()", "sort().reverse()", "reverse().sort()"],
  },

  {
    numb: 13,
    question: "What is the output of console.log(2 + '3')?",
    answer: "23",
    options: ["5", "23", "NaN", "undefined"],
  },

  {
    numb: 14,
    question: "What is the purpose of the bind() method in JavaScript?",
    answer: "To bind a function to a specific context",
    options: [
      "To bind a function to a specific context",
      "To bind a function to a specific argument",
      "To bind a function to a specific return value",
      "To bind a function to a specific exception",
    ],
  },

  {
    numb: 15,
    question:
      "Which JavaScript function is used to check if a variable is a boolean value?",
    answer: "typeof()",
    options: ["typeof()", "instanceof()", "Boolean()", "isNaN()"],
  },

  {
    numb: 16,
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "== checks for value equality, while === checks for type and value equality",
    options: [
      "== checks for value equality, while === checks for type and value equality",
      "== checks for type and value equality, while === checks for value equality",
      "== and === are interchangeable",
      "== checks for type equality, while === checks for value equality",
    ],
  },

  {
    numb: 17,
    question:
      "Which JavaScript method is used to create a new array from an existing array?",
    answer: "slice()",
    options: ["slice()", "splice()", "concat()", "clone()"],
  },

  {
    numb: 18,
    question:
      "What is the purpose of the hasOwnProperty() method in JavaScript?",
    answer: "To check if an object has a property",
    options: [
      "To check if an object has a property",
      "To check if an object has a method",
      "To check if an object has a constructor",
      "To check if an object has a prototype",
    ],
  },

  {
    numb: 19,
    question:
      "Which JavaScript function is used to check if a variable is a number?",
    answer: "isNaN()",
    options: ["isNaN()", "isFinite()", "typeof()", "Number.isInteger()"],
  },

  {
    numb: 20,
    question:
      "Which JavaScript method is used to create a new object from an existing object?",
    answer: "Object.create()",
    options: [
      "Object.create()",
      "Object.assign()",
      "Object.clone()",
      "Object.copy()",
    ],
  },

  {
    numb: 21,
    question: "What is the purpose of the freeze() method in JavaScript?",
    answer: "To freeze an object, preventing any changes to its properties",
    options: [
      "To freeze an object, preventing any changes to its properties",
      "To unfreeze an object, allowing changes to its properties",
      "To seal an object, preventing any new properties from being added",
      "To unseal an object, allowing new properties to be added",
    ],
  },

  {
    numb: 22,
    question:
      "Which JavaScript function is used to check if a variable is a string?",
    answer: "typeof()",
    options: ["typeof()", "instanceof()", "String()", "isNaN()"],
  },

  {
    numb: 23,
    question:
      "What is the difference between var, let, and const in JavaScript?",
    answer:
      "var is used for global variables, let is used for local variables, and const is used for constant variables",
    options: [
      "var is used for global variables, let is used for local variables, and const is used for constant variables",
      "var is used for local variables, let is used for global variables, and const is used for constant variables",
      "var, let, and const are interchangeable",
      "var is used for constant variables, let is used for global variables, and const is used for local variables",
    ],
  },

  {
    numb: 24,
    question:
      "Which JavaScript method is used to remove the first element from an array?",
    answer: "shift()",
    options: ["shift()", "unshift()", "pop()", "push()"],
  },

  {
    numb: 25,
    question: "What is the purpose of the finally block in JavaScript?",
    answer:
      "To specify code that should run regardless of whether an exception was thrown",
    options: [
      "To specify code that should run regardless of whether an exception was thrown",
      "To specify code that should run only if an exception was thrown",
      "To specify code that should run only if no exception was thrown",
      "To specify code that should run before an exception is thrown",
    ],
  },

  {
    numb: 26,
    question:
      "Which JavaScript function is used to convert a string to lowercase?",
    answer: "toLowerCase()",
    options: ["toLowerCase()", "toUpperCase()", "trim()", "substring()"],
  },

  {
    numb: 27,
    question: "What is the difference between == and != in JavaScript?",
    answer:
      "== checks for value equality, while != checks for value inequality",
    options: [
      "== checks for value equality, while != checks for value inequality",
      "== checks for type and value equality, while != checks for type and value inequality",
      "== and != are interchangeable",
      "== checks for type equality, while != checks for value inequality",
    ],
  },

  {
    numb: 28,
    question:
      "Which JavaScript method is used to create a new array with the elements of an existing array, in reverse order?",
    answer: "reverse()",
    options: ["reverse()", "sort()", "slice()", "splice()"],
  },

  {
    numb: 29,
    question: "What is the purpose of the debugger statement in JavaScript?",
    answer: "To pause the execution of the code at a specific point",
    options: [
      "To pause the execution of the code at a specific point",
      "To continue the execution of the code from a specific point",
      "To skip the execution of a specific block of code",
      "To execute a specific block of code repeatedly",
    ],
  },

  {
    numb: 30,
    question:
      "Which JavaScript function is used to check if a variable is a finite number?",
    answer: "isFinite()",
    options: ["isFinite()", "isNaN()", "typeof()", "Number.isInteger()"],
  },

  {
    numb: 31,
    question:
      "What is the difference between a for loop and a forEach loop in JavaScript?",
    answer:
      "A for loop is used for iterating over a fixed number of iterations, while a forEach loop is used for iterating over an unknown number of iterations",
    options: [
      "A for loop is used for iterating over a fixed number of iterations, while a forEach loop is used for iterating over an unknown number of iterations",
      "A for loop is used for iterating over an unknown number of iterations, while a forEach loop is used for iterating over a fixed number of iterations",
      "A for loop and a forEach loop are interchangeable",
      "A for loop is used for iterating over arrays, while a forEach loop is used for iterating over objects",
    ],
  },

  {
    numb: 32,
    question:
      "Which JavaScript method is used to merge two or more objects into a single object?",
    answer: "Object.assign()",
    options: [
      "Object.assign()",
      "Object.create()",
      "Object.freeze()",
      "Object.seal()",
    ],
  },

  {
    numb: 33,
    question:
      "Which JavaScript function is used to convert a string to a JSON object?",
    answer: "JSON.parse()",
    options: ["JSON.parse()", "JSON.stringify()", "eval()", "parseJSON()"],
  },

  {
    numb: 34,
    question:
      "What is the difference between null and undefined in JavaScript?",
    answer:
      "null represents the absence of any object value, while undefined represents an uninitialized variable",
    options: [
      "null represents the absence of any object value, while undefined represents an uninitialized variable",
      "null represents an uninitialized variable, while undefined represents the absence of any object value",
      "null and undefined are interchangeable",
      "null represents a primitive value, while undefined represents an object",
    ],
  },

  {
    numb: 35,
    question: "What is the purpose of the yield keyword in JavaScript?",
    answer: "To pause the execution of a generator function and return a value",
    options: [
      "To pause the execution of a generator function and return a value",
      "To continue the execution of a generator function from a specific point",
      "To skip the execution of a specific block of code in a generator function",
      "To execute a specific block of code repeatedly in a generator function",
    ],
  },

  {
    numb: 36,
    question:
      "Which JavaScript function is used to check if a variable is a symbol?",
    answer: "typeof()",
    options: ["typeof()", "instanceof()", "Symbol()", "isNaN()"],
  },

  {
    numb: 37,
    question: "What is the purpose of the static keyword in JavaScript?",
    answer:
      "To define a static method that can be called without creating an instance of the class",
    options: [
      "To define a static method that can be called without creating an instance of the class",
      "To define a non-static method that can only be called by creating an instance of the class",
      "To define a new class",
      "To define a new function",
    ],
  },

  {
    numb: 38,
    question:
      "Which JavaScript method is used to create a new array with the elements of an existing array, filtered according to a specific condition?",
    answer: "filter()",
    options: ["filter()", "map()", "reduce()", "forEach()"],
  },

  {
    numb: 39,
    question:
      "What is the difference between a promise and an async/await in JavaScript?",
    answer:
      "A promise is used for asynchronous programming, while async/await is used for asynchronous programming with a simpler syntax",
    options: [
      "A promise is used for asynchronous programming, while async/await is used for synchronous programming",
      "A promise is used for synchronous programming, while async/await is used for asynchronous programming",
      "A promise and async/await are interchangeable",
      "A promise is used for asynchronous programming, while async/await is used for asynchronous programming with a simpler syntax",
    ],
  },

  {
    numb: 40,
    question:
      "Which JavaScript method is used to create a new array with the elements of an existing array, concatenated with another array?",
    answer: "concat()",
    options: ["concat()", "join()", "slice()", "splice()"],
  },

  {
    numb: 41,
    question: "What is the purpose of the class keyword in JavaScript?",
    answer: "To define a new class",
    options: [
      "To define a new class",
      "To define a new function",
      "To define a new object",
      "To define a new module",
    ],
  },

  {
    numb: 42,
    question:
      "Which JavaScript function is used to convert a string to a number?",
    answer: "parseInt()",
    options: ["parseInt()", "parseFloat()", "Number()", "valueOf()"],
  },

  {
    numb: 43,
    question: "What is the purpose of the export keyword in JavaScript?",
    answer: "To export a module",
    options: [
      "To import a module",
      "To export a module",
      "To define a new function",
      "To define a new class",
    ],
  },

  {
    numb: 44,
    question: "What is the purpose of the super keyword in JavaScript?",
    answer: "To call a method from a parent class",
    options: [
      "To call a method from a parent class",
      "To call a method from a child class",
      "To define a new class",
      "To define a new function",
    ],
  },

  {
    numb: 45,
    question:
      "Which JavaScript method is used to create a new array with the elements of an existing array, in reverse order?",
    answer: "reverse()",
    options: ["reverse()", "sort()", "slice()", "splice()"],
  },

  {
    numb: 46,
    question: "What is the difference between const and let in JavaScript?",
    answer:
      "const is used for constant variables, while let is used for variable variables",
    options: [
      "const is used for constant variables, while let is used for variable variables",
      "const is used for variable variables, while let is used for constant variables",
      "const and let are interchangeable",
      "const is used for global variables, while let is used for local variables",
    ],
  },

  {
    numb: 47,
    question:
      "Which JavaScript function is used to convert a string to a date object?",
    answer: "Date.parse()",
    options: [
      "Date.parse()",
      "Date.stringify()",
      "Date.valueOf()",
      "Date.toString()",
    ],
  },

  {
    numb: 48,
    question: "What is the purpose of the static keyword in JavaScript?",
    answer:
      "To define a static method that can be called without creating an instance of the class",
    options: [
      "To define a static method that can be called without creating an instance of the class",
      "To define a non-static method that can only be called by creating an instance of the class",
      "To define a new class",
      "To define a new function",
    ],
  },

  {
    numb: 49,
    question:
      "Which JavaScript function is used to convert a date object to a string?",
    answer: "Date.toString()",
    options: [
      "Date.toString()",
      "Date.valueOf()",
      "Date.parse()",
      "Date.stringify()",
    ],
  },

  {
    numb: 50,
    question:
      "Which JavaScript method is used to create a new array with the elements of an existing array, concatenated with another array?",
    answer: "concat()",
    options: ["concat()", "join()", "slice()", "splice()"],
  },
  
];
