const url = "https://jsonplaceholder.typicode.com/users/2";

fetch(url)
    .then((response) => {
        console.log(response.status);
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

/*
fetch()
    ↓
Send request
    ↓
Promise
    ↓
Response object
    ↓
response.json()
    ↓
Promise
    ↓
Actual data
*/
