let x = [2, 3, 5, 6, 7, 8]

x.forEach(element => {
    console.log(element)
});

let x_new = x.map((e) => {
    return e * 2;
})

console.log(x_new)

const GreaterThanSeven = (x) => {
    if(x > 7)
    {
        return true
    }
    return false
}

// Give condition ke base pe filter karo
console.log(x.filter(GreaterThanSeven));

const red = (a, b) => {
    return a + b;
}
console.log(x.reduce(red))

console.log(Array.from("Foxy"))
