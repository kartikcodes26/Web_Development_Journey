let date = new Date()
const time = document.querySelector(".time")

// Motivational quotes
const quotes = [
    "Believe in yourself. Or at least pretend until it works.",
    "You miss 100% of the naps you don't take.",
    "Dream big. Sleep bigger.",
    "Future you is watching. Don't embarrass them.",
    "You can do it. Probably. Maybe. Let's find out.",
    "Success is 1% inspiration and 99% wondering what you're doing.",
    "Don't stop when you're tired. Stop when you're done. Or when food arrives.",
    "Be the reason your Wi-Fi password gets changed.",
    "Every expert was once a beginner who had no idea what they were doing.",
    "Small steps every day. Unless you're late, then run.",
    "Your comfort zone called. It wants you back. Ignore it.",
    "Hard work pays off. Unfortunately, it doesn't pay immediately.",
    "You have survived 100% of your worst days. Nice streak.",
    "Do something today that your future self will thank you for.",
    "Don't compare yourself to others. Compare yourself to yesterday's slightly confused version of you.",
    "Wake up. Grind. Question your life choices. Repeat.",
    "One day or day one. You decide. Also, both sound suspiciously productive.",
    "If at first you don't succeed, try doing it with better documentation.",
    "Progress is progress, even if your progress bar looks frozen.",
    "You don't need motivation. You need to open the damn IDE.",
    "Your code doesn't hate you. It just hasn't forgiven you yet.",
    "Debugging: solving a problem you wouldn't have if you hadn't tried to solve another problem.",
    "It's not procrastination. It's asynchronous productivity.",
    "Keep going. The compiler is not going to fix itself.",
    "Believe in the process. Even if the process currently makes zero sense.",
    "Today's goal: be slightly less clueless than yesterday.",
    "You are one good decision away from making several more complicated decisions.",
    "Don't give up. Restart the program first.",
    "If your plan fails, congratulations: you found a bug in the plan.",
    "Motivation level: 404 Not Found.",
    "Your future self has already judged your current tab count.",
    "Study now, complain later.",
    "JEE doesn't define your life. But unfortunately, it does define your current schedule.",
    "One chapter at a time. One question at a time. One existential crisis at a time.",
    "Physics is just the universe asking you to calculate something.",
    "Chemistry: because apparently knowing what atoms are doing wasn't enough.",
    "Math: where the numbers are made up and the answers actually matter.",
    "You don't need to finish everything today. Just don't finish nothing.",
    "If you're tired, rest. If you're lazy, start for five minutes and see what happens."
];

setInterval(function(){
    let date = new Date()
    let currtime = date.toLocaleTimeString()
    time.textContent = currtime
}, 1000)

setInterval(function(){
    let randindex = Math.floor(Math.random() * quotes.length)
    document.querySelector('.quotes').textContent = quotes[randindex]
}, 3000)
