let number = 2;

let anotherNumber: number=  3;

type Person = {
    name: string;
    age: number;
}

const me: Person = createPernson();

function createPernson(): Person {
    return { name: "MINJUN", age: 23 };
}

function printPerson(person: Person) {
    console.log(person.name);
}

printPerson(me);