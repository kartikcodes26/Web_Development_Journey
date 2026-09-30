obj = {
    name: "Kartik",
    price: 1999,

    WelcomeMessage: function() {
        console.log(`${this.name}, Welcome to the site`);
    },

    CurrentContext: function() {
        console.log(this)
    }
}

obj.WelcomeMessage()
obj.CurrentContext()

console.log(this)

// "this" only works in objects not functions

/* ---------------------- Arrow Functions -------------------------------------- */

const add = (a, b) => (a + b)
// () => (a + b) No return keyword
// () => {a + b} Return keyword
console.log(add(2, 9))
