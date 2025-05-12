console.log("Started!!!");

let firstName = 'bhupesh'; //String as primitive

let lastName = new String('Sahu'); // String as Object

//Sstring Operations (mdn)
//toUppercase
//toLowercase
//trim
//trimStart
//trimEnd

// let sentence = 'this is \nmy first \nsentence';

// or Another Way
// let sentence = `Hey ${firstName}, 
// this is my first sentence.

// Thanks and Regards, 
// ${lastName}`;

// console.log(sentence);

//-----------------Dates-------------------

// let date = new Date(); //way 1st

// let date2 = new Date('December 23 2003 08:30'); 

// let date3 = new Date(2003, 11, 23, 8);

// console.log(date3);

//----------------Arrays-------------------------

// let array = [1, 2, 3, 4, 5];
// console.log(array);

// let num = [1, 4, 5, 7];
// num.push(9); //end -> push
// num.unshift(8); //start -> unshift
// num.splice(2, 0, 'a', 'b', 'c'); // middle -> splice
// console.log(num);

//-----------Searching--------------
//primitives ---> 1. indexOf 2. includes
//Object/References ---> Callback Function

// ---------Callback function----------
// let courses = [
//     {no:1, naam:"Bhupesh"}, 
//     {no:2, naam:"sahu"}
// ];
// console.log(courses);

// let course = courses.find(function(course) {
//     return course.naam === "Bhupesh";
// })
// console.log(course);

// let course = courses.find(course => course.naam === "Bhupesh");
// console.log(course);

//--------------deleting element------------
// let numbers = [1, 2, 3, 4, 5, 6, 7];

// numbers.pop(); //end
// numbers.shift(); //start
// numbers.splice(2, 1); //middle

// console.log(numbers);

//-----------Deleting elements----------
// let numbers = [1, 2, 3, 4, 5];
// let numbers2 = numbers; 
// // numbers = []; // this is not a best practice, because it is a reference type object.

// // numbers.length = 0; //Best practice for deleting - way-1
// // numbers.splice(0, numbers.length); //2nd Best practice for deleting - way-2

// console.log(numbers);
// console.log(numbers2);

