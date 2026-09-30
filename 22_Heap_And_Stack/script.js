// Primitive (stack), Non-primitive (heap)

// Primitive types: They create copies
let oldname = "Kartik"
let newname = oldname
newname = "Foxy"

console.log(oldname);
console.log(newname);

// Non-Primitive type (heap)
let person = {
    name: "Kartik",
    age: 18,
    Gender: "M"
};

let new_person = person;
console.log(new_person);
new_person.name = "Foxy"

console.log(person.name)
console.log(new_person.name)
// Both change as they are referencing the object





