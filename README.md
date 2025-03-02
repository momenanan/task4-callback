## Question 1: What is a callback function in JavaScript?
A **callback function** in JavaScript is a function passed as an argument to another function and is executed later, usually after an operation is completed.
It is commonly used in asynchronous programming, such as handling events or making API requests.
- - -
## Question 2 : Why are callbacks important in asynchronous programming?
Callbacks are crucial in asynchronous programming because they allow JavaScript to execute tasks without blocking the main thread.
This ensures smooth performance by handling time-consuming operations, like API requests or file reading, without freezing the entire application.
- - -
## Question 3 : How do you define and pass a callback function to another function?

          function greet(name, callback)
          {
              console.log("Hello, " + name);
              callback();
          }
                  function sayGoodbye() {
                 console.log("Goodbye!");
               }
       greet("Alice", sayGoodbye);
- - -
## Question 4 : Explain the difference between synchronous and asynchronous callbacks?
A **synchronous callback** is executed immediately within the function it is passed to, blocking further execution until it completes.
An **asynchronous callback** is executed later, usually after an event or operation completes, allowing the program to continue running without waiting.
- - -
## Question 5 : What is the "callback hell" problem, and how can it be mitigated?
**Callback hell** occurs when multiple nested callbacks make the code difficult to read and maintain, leading to a "pyramid of doom."
This happens in asynchronous operations when callbacks are deeply nested.

 **How to Mitigate Callback Hell:**
 
 1- Use Named Functions: Define separate functions instead of using inline callbacks.
 
 2- Modularization: Break code into smaller, reusable functions.
 
 3- Promises: Use JavaScript Promises to avoid nesting.
 
 4- Async/Await: Use async/await for cleaner, more readable asynchronous code.

