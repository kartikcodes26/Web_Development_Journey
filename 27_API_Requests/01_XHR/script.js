const xhr = new XMLHttpRequest();
const url = "https://api.github.com/users/hiteshchoudhary";

// onreadystatechange logs whenever there is a change in state
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText); // Received data is usually in string format
        console.log(data.bio);
    }
};

xhr.open("GET", url);
xhr.send();
