/* Shared Function */
// function to get the value from HTML
function getTheHtmlValue(inputId) {
    const amount = document.getElementById(inputId);
    const amountString = amount.innerText;
    const money = parseFloat(amountString);
    return money;
}
// function to set the value to HTML
function setTheHtmlValue(InputId, Output) {
    const Previous = document.getElementById(InputId);
    Previous.innerText = Output;
}
// function to create and show the purchasing product
function createElement(Name) {
    const create = document.getElementById('create');
    const count = create.childElementCount;
    const p = document.createElement('p');
    p.innerText = (count+1) +'.'+' '+ Name;
    create.appendChild(p);
}
// function to get the value from input or text area
function getInputValue(inputId) {
    const inputOut = document.getElementById(inputId);
    const valueId = inputOut.value;
    return valueId;
}