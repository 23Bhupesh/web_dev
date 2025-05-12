console.log("Chaliye shuru krte hai!");

//--------------Object Creation---------------
// let rectangle = {
//     length: 1, 
//     breadth: 2,

//     //Method Creation 
//     draw: function() {
//         console.log("Chalo Draw krte hai!");
//     } 
// };

//---------------Factory Function Method-1 ------------------
//Factory function
// function createRectangle(len, bre) {
//     //Object
//     return rectangle = {
//         length: len, 
//         breadth: bre,
//         //Method
//         draw: function() {
//             console.log("Ab draw krenge.");
//         }
//     }
// };

//Objects Creation
// let rectangle1 = createRectangle(5, 3); //Object -1
// let rectangle2 = createRectangle(2, 6); //Object -2
// let rectangle3 = createRectangle(9, 4); //Object -3

//---------------Constructor Function Method-2 -------------
// Constructor function -> Notation Use -> Pascal Notation -> First letter of evert letter is Capital

// function Rectangle(len, bre) {
//     this.length = len,
//     this.breadth = bre,
//     this.draw = function() {
//         console.log("Drawing");
//     }
// }
// let createRectangleObj1 = new Rectangle(4, 5);

//-----------For-In loop---------------

// let rectangle = {
//     length:2,
//     breadth:3
// };

// //For-In loop
// for(let key in rectangle) {
//     console.log(key, rectangle[key]);
// }

// //For-of loop
// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }

//-----------------Object Cloning-----------------
//---------Method 1---------
// let src = {
//     a : 1, 
//     b : 2, 
//     c : 3
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest); //cloning successful

// src.a++;
// console.log(dest); 

//----------Method - 2-----------
// let src = {
//     a : 10, 
//     b : 20, 
//     c : 30
// };

// let dest = Object.assign({}, src);

// console.log(dest); //Cloning successful

// src.a++;
// console.log(dest); 

//-----------Method - 3 -------------
let src = {
    a: 10,
    b: 20,
    c: 30
};
let dest = {...src};

console.log(dest);

src.a++;
console.log(dest);