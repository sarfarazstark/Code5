// create an array of elements
let elements = ["apple", "banana", "carrot"];

// delete the first element using shift() method
let deleted = elements.shift();
console.log("Deleted element: " + deleted);

// add a new element at the end using push() method
let added = elements.push("dragonfruit");
console.log("Added element: " + elements[elements.length - 1]);

// print the final array
console.log("Final array: " + elements);