//adding 100 para
// Calculating speed
let t1 = performance.now(); //Calculating speed at this point

for(let i = 0; i <= 100; i++) {
    let newElement = document.createElement('P');
    newElement.textContent = 'this is paragraph' + i;

    document.body.appendChild(newElement);
}
let t2 = performance.now(); // Calculating speed at this point
console.log("This takes " + (t2-t1) + " ms");

let t3 = performance.now();
let myDiv = document.createElement('div');

for(let i = 0; i <= 100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'this is paragraph ' + i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

let t4 = performance.now();
console.log("This takes " + (t4-t3) + " ms");