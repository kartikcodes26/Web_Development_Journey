let student = {
  name: "John",
  age: 20,
  courses: ["Math", "Science", "History"],
};

// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for-in loop
for (const key in student) {
  console.log(key, student[key]);
}

// for-of loop (iterator)
for (const c of "Foxy") {
  console.log(c);
}

// While loop
let j = 0;
while (j < 15) {
  console.log(j);
  j++;
}

// do-while loop
let z = 0;
do {
    console.log(z)
    z++
} while(z < 30)



