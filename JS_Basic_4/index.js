console.log("Hello Buddy!");

//-----------function--------------

//function declaration
// function run() {
//     console.log("Running");
// }

// run(); //function call

//--------------Function Assignment------------
// let stand = function walk() {
//     console.log("I'm walking");
// }
// stand();

//-----------Rest Operator--------------
// function sum(num, value, ...args) {
//     console.log(args);
// }
// sum(1,2,3,4,5,6,7);

//---------------Default Parameters----------------
// function interest (p, r=4, y=3) {
//     return p*r*y/100;
// }
// console.log(interest(1000, undefined, undefined));

//---------------Getter-Setter Function------------------
let person = {
    fName : 'Bhupesh',
    lName : 'Sahu',
    //Getter function
    get fullName() {
        return `${person.fName} ${person.lName}`;
    },

    //Setter Function
    set fullName(value) {
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}
console.log(person.fullName); //Getter (read only)
person.fullName = 'Dhruv Sahu';
console.log(person.fullName);