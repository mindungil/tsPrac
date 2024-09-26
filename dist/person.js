"use strict";
let number = 2;
let anotherNumber = 3;
const me = createPernson();
function createPernson() {
    return { name: "MINJUN", age: 23 };
}
function printPerson(person) {
    console.log(person.name);
}
printPerson(me);
