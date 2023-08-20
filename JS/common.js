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
// function to check the coupon code
function checkCoupon(input) {
    const coupon = getInputValue('input')
    if (coupon === 'SELL200') {
        const discountFieldId = input * 20 / 100;
        const discountField = parseFloat(discountFieldId).toFixed(2)
        setTheHtmlValue("DiscountId", discountField);
        const afterDiscountField = input - discountField;
        const afterDiscount = parseFloat(afterDiscountField).toFixed(2)
        setTheHtmlValue('Discounted', afterDiscount);
        // console.log(afterDiscount);
    }
}