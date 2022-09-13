//Selecting element from HTML
const adviceId = document.querySelector('.data-id');
const quoteText = document.querySelector('.quote-text');
const diceBtn = document.querySelector('.dice-btn');

//URL Variable
const apiUrl = 'https://api.adviceslip.com/advice';


//Fetching data function
let fetchData = () => {
    fetch(apiUrl)
    .then((response => response.json()))
    .then((data) => {
        let quote = data;
        adviceId.textContent = quote.slip.id;
        quoteText.textContent = quote.slip.advice;
    });
}

//Event handler on button
diceBtn.addEventListener('click', fetchData)