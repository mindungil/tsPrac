console.log("Hello World");

//union type
type car = {
    name: string;
    price: number;
}
type train = {
    name: string;
    price: number;
}
function printName(obj: car | train) {
    console.log(obj.name);
}
const sonata: car = {
    name: 'sonata',
    price: 1234,
}
printName(sonata);

//인터섹션
type toy = {
    name: string;
    price: number;
    id: number;
}
type cumputer = toy & {
    day: number;
}