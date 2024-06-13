import * as tmplt from './templates.js' //imports participant html and success html

let participantCount = 1;

document.addEventListener('DOMContentLoaded', function() { // adds event listener to the Add Participant button
    const addButton = document.querySelector('#add'); // selecting add button
  
    addButton.addEventListener('click', function() {
      
      participantCount++; // increments participant count by 1
      
      const newParticipantHTML = tmplt.participantTemplate(participantCount); // creates new participant HTML
  
      addButton.insertAdjacentHTML('beforebegin', newParticipantHTML); // inserts new participant HTML before the Add button
    });
  });


const form = document.querySelector('form'); // selecting form element
const summary = document.querySelector('#summary'); // selecting summary div
form.addEventListener('submit', submitForm); // event listener for when form is submitted, calls submitForm()

function submitForm(event)
{
    event.preventDefault(); // stops page from refreshing
    const adultName = document.querySelector("#adult_name").value; // selecting adult name
    const feeTotals = computeFees(); // assigning computeFees to variable
    const participantTotal = document.querySelectorAll("[class^=participant]").length; // selecting each instance of participant class
    
    form.style.display = "none"; // hides form
    summary.style.display = "block"; // displays summary div
    
    const registerInfo = { //object for name, fees, and participant count
        name: adultName,
        fees: feeTotals, 
        participantNumber: participantTotal
    };
    summary.innerHTML = tmplt.successTemplate(registerInfo); // writes the success registration html in summary div
}

function computeFees()
{
    let inputFee = document.querySelectorAll("[id^=fee]"); // selects all fee ids, returns NodeList
    console.log(inputFee); // writes NodeList to console

    inputFee = [...inputFee]; // converts NodeList into an array

    let feeTotal = inputFee.reduce((total, feeInput) => { // adds each feeInput in the array into a total
        return total + (parseFloat(feeInput.value) || 0); // iterates through inputFee and if value is empty, then adds 0
    }, 0);

    return feeTotal.toFixed(2); // total to 2nd decimal point
}


//   document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('form');
//     const summary = document.querySelector('#summary'); // Assuming you have an element with id="summary"

//     form.addEventListener('submit', submitForm);

//     function submitForm(event) {
//         event.preventDefault();
//         const adultName = document.querySelector("#adult_name").value;
//         const feeTotal = computeFees();
//         const participantCount = document.querySelectorAll("[class^=participant]").length;

//         form.style.display = "none";
//         summary.style.display = "block";

//         const registerInfo = {
//             name: adultName,
//             participantNumber: participantCount,
//             fees: feeTotal
//         };

//         summary.innerHTML = successTemplate(registerInfo);
//     }

//     function computeFees() {
//         let inputFee = document.querySelectorAll("[id^=fee]");
//         console.log(inputFee);

//         inputFee = [...inputFee];

//         let feeTotal = inputFee.reduce((total, feeInput) => {
//             return total + (parseFloat(feeInput.value) || 0);
//         }, 0);

//         return feeTotal.toFixed(2);
//     }

//     function successTemplate(info) {
//         return `
//         <p>Thank you ${info.name} for registering. You have registered ${info.participantNumber} participants and owe $${info.fees} in fees.</p>
//         `;
//     }
// });