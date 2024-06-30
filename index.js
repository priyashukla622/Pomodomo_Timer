
// function iterateWithCallback(arr, callback) {
//     for (const item of arr) {
//       callback(item);
//     }
//   }
//   function double(num) {
//     console.log(num * 2);
// }
// iterateWithCallback([10,12],double)



// function greet(name, callback) {
//     console.log('Hello, ' + name + '!');
//     callback();
// }

// function sayGoodbye() {
//     console.log('Goodbye!');
// }

// greet('Alice', sayGoodbye);  




// function outer(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]));
//     }
//     return result;
// }

// function inner(num) {
//     return num * 2;
// }

// let arr = [10, 20, 30, 40];
// let a = outer(arr, inner);
// console.log(a); 




// function greet(name, callback) {
//     console.log('Hello, ' + name + '!');
//     callback();
// }
// function sayGoodbye() {
//     console.log('Goodbye!');
// }
// greet('Alice', sayGoodbye);  





// function outer(num, callback) {
//     console.log("hello");
//     return callback(num);
// }
// function inner(arr) {  
//     return arr* 2;
// }
// let a = outer(10, inner);
// console.log(a); 





// const myPromise = new Promise((resolve, reject) => {
//     // let resolve = true;
//     if (resolve) {
//         console.log('Operation succeeded!');
//     } else {
//         console.log('Operation failed.');
//     }
// });



// Create a new promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const operationWasSuccessful = true; 

        if (operationWasSuccessful) {
            resolve('Operation succeeded!');
        } else {
            reject('Operation failed.');
        }
    }, 2000); 
});
myPromise
    .then(result => {
        console.log(result);  
    })
    .catch(error => {
        console.log(error);  
    });
