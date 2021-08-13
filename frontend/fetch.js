'use strict';

console.log("Hello can you see me");

// fetch(url-to-fetch-from)
// .then((Response) => {
//     response.json()
//     .then((data) => {
//         console.log(data);
//     });
// });

// const cardName = document.querySelector('#cardName');
// const cardColour = document.querySelector('#cardColour');
// const cardSize = document.querySelector('#cardSize');
// const cardModel = document.querySelector('#cardModel');
// const cardID = document.querySelector('#cardID');
// console.log(cardName);
// console.log(cardColour);
// console.log(cardSize);
// console.log(cardModel);
// console.log(cardID);

fetch(`http://localhost:8082/getAll`)
    .then((response) => {
        response.json()
            .then((data) => {
                console.log(data);
                console.log(data[0].name);

                // cardName.textContent = "Name :" + data[0].cardName;
                // cardName.textContent = "Colour :" + data[0].cardColour;
                // cardName.textContent = "Size :" + data[0].cardSize;
                // cardName.textContent = "Model :" + data[0].cardModel;
                // cardName.textContent = "ID :" + data[0].car_id;

                data.forEach((data) => {
                    createCards(data);

                });
            });


    });

let createCards = (data) => {

    const cardParent = document.querySelector('#cardList');

    const child = document.createElement('div');
    const childBody = document.createElement('div');
    const childName = document.createElement('h5');
    const childColour = document.createElement('h5');
    const childSize = document.createElement('h5');
    const childModel = document.createElement('h5');
    const childID = document.createElement('h5');

    childName.textContent = "Name :" + data.name;
    childName.textContent = "Colour :" + data.colour;
    childName.textContent = "Size :" + data.size;
    childName.textContent = "Model :" + data.model;
    childName.textContent = "ID :" + data.id;

    childBody.className = "card-body";
    child.className = "card";



    childBody.appendChild(childName);
    childBody.appendChild(childColour);
    childBody.appendChild(childSize);
    childBody.appendChild(childModel);
    childBody.appendChild(childID);

    child.appendChild(childBody);
    cardParent.appendChild(child);

}


const nameInput = document.querySelector('#nameInput');
const colourInput = document.querySelector('#colourInput');
const sizeInput = document.querySelector('#sizeInput');
const modelInput = document.querySelector('#modelInput');
const idInput = document.querySelector('#idInput');

const submitButton = document.querySelector('#submitBtn');
const updateButton = document.querySelector('#updateBtn');
const clearButton = document.querySelector('#clearBtn');



console.log(nameInput);
console.log(colourInput);
console.log(sizeInput);
console.log(modelInput);
console.log(idInput);
console.log(submitButton);
console.log(updateButton);
console.log(clearButton);


let printOutForm = () => {

    console.log(nameInput.value);
    console.log(colourInput.value);
    console.log(sizeInput.value);
    console.log(modelInput.value);
    console.log(idInput.value);

}

let postData = () => {

    const car = {
        "name": nameInput.value,
        "colour": colourInput.value,
        "size": sizeInput.value,
        "model": modelInput.value,
    };

    console.log(car);

    fetch(`http://localhost:8082/add`, {
        method: `POST`,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(car)
    }).then((response) => {
        response.json();
    })
        .then((data) => {


            console.log(`Post request succesful`);

        });

    };    
    const deleteID = document.querySelector('#deleteInput');
    const deleteButton = document.querySelector('#deleteBtn');

    let deleteData = (id) => {

    fetch(`http://localhost:8082/delete/${id}`, {
        method: `DELETE`, // Using DELETE Method
    }).then((data) => {
        console.log(`Delete request succesful`);
    });

}

let updateData = (id) => {

    const item = {
        "name": nameInput.value,
        "quantity": parseInt(quantityInput.value, 10),
        "high_priority": true
    };

    fetch(`http://localhost:8082/update/${id}`, {
        method: `PUT`, 
        headers: {
            "Content-type":"application/json" 
        },              
        body: JSON.stringify(item) 
    }).then((response) =>{
        response.json();
    })
    .then((data) => {
        console.log(`Post request succesful`);
    });

};

     updateButton.addEventListener('click', function() {
     updateData(idInput.value);
})

     deleteButton.addEventListener('click', function(){
     deleteData(deleteID.value);
});


submitButton.addEventListener('click', postData);

