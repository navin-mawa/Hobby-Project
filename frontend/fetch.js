'use strict';

console.log("Hello can you see me");

// fetch(url-to-fetch-from)
// .then((Response) => {
//     response.json()
//     .then((data) => {
//         console.log(data);
//     });
// });

fetch(`http://localhost:8082/getAll`)
.then((response) =>{
    response.json()
    .then((data) => {
        console.log(data);
    });
});