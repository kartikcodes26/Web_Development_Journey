let num = Math.floor(Math.random() * 10)

let usernum
let tries = 3;
let found = false;

while(tries--)
{
    if(usernum < num) {
    console.log("Try Greater")
    }
    else if (usernum > num) {
        console.log("Try Smaller")
    }
    else {
        console.log("Congratulations you found it")
        found = true;
        break;
    }
}

if(!found) {
    console.log(`The number was ${num}`)
}

