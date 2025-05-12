// console.log("Hello Bhai!");

//-----------Synchronous code----------
// function sync() {
//     console.log("First");
// }
// sync();
// console.log("second");
// output - First second

//-------------Asynchronous Code--------------
// setTimeout(() => {
//     console.log("third");
// }, 3000);
// function sync() {
//     console.log("First");
// }
// sync();
// console.log("second");
// Expected output: Third, first, second
// Original Output: First, second, third

//-----------------Promise-----------------
// let meraPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("I am inside promise.");
//     }, 3000);
//     // resolve(2003);
//     reject(new Error("Bhaiya Error aa gaya."));
// })


//---------------then and catch in promise----------------
// let meraPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("I am inside promise.");
//     }, 3000);
//     // resolve(343432323123);
//     reject(new Error("Bhaiya Error aa gaya."));
// })

// meraPromise.then((value) =>  {console.log(value)});
// meraPromise.catch((error) => {console.log("Found an Error")});

// console.log("Pehla");

// let waadaa1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("This is setTimeout 1");
//     }, 2000);
//     resolve(true);
// })
// let output = waadaa1.then(() => {
//     let waadaa2 = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log("This is setTimeout 2");
//         }, 4000);
//         resolve("waadaa2 resolved");
//     })
//     return waadaa2;
// })
// output.then((value) => console.log(value));

//--------------Async-Await------------------
// async function utility() {
//     let dehliMausam = new Promise((response, reject) => {
//         setTimeout(() => {
//             response("Delhi me bohot garmi hai");
//         }, 5000);
//     });

//     let hydMausam = new Promise((response, respect) => {
//         setTimeout(() => {
//             response("Hyd is very cool");
//         }, 6000);
//     });
//     let dM = dehliMausam;
//     let hM = hydMausam;

//     return [dM, hM];
// }
// console.log(utility());


//--------------Fetch API--------------
// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output = await content.json();
//     console.log(output);
// }
// utility();

async function helper() {
    let object = {
        method: 'POST',
        body: JSON.stringify({
            title: 'bhupesh Sahu',
            body: 'lean',
            userId: 23,
            weight: 80,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }

    let content = await fetch('https://jsonplaceholder.typicode.com/posts', object);
    let response = content.json();
    return response;
}

async function utility() {
    let answer = await helper();
    console.log(answer);
}
utility();